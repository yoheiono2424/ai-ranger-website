'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { trackLead } from '@/lib/track';

/** スマホで画面の下にずっと出るボタン（最初の画面と入力欄が見えている間は隠す） */
export const StickyCTA = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const form = document.getElementById('form');
      const formTop = form ? form.getBoundingClientRect().top : Infinity;
      setShow(window.scrollY > window.innerHeight * 0.9 && formTop > window.innerHeight * 0.6);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-50 p-3 bg-white/95 border-t border-ab-line backdrop-blur transition-transform duration-300 ${
        show ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <a
        href="#form"
        className="flex w-full items-center justify-center py-3.5 bg-ab-cyan text-white font-bold rounded-lg"
      >
        まず話してみる（無料）
      </a>
    </div>
  );
};

/** LPの中に置く短い入力欄（4項目） */
export const ShortForm = () => {
  const [v, setV] = useState({ company: '', name: '', contact: '', message: '' });
  const [err, setErr] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'done'>('idle');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!v.name.trim() || !v.contact.trim()) {
      setErr('お名前と、連絡先（メールか電話番号）を入れてください');
      return;
    }
    setErr('');
    setState('sending');
    const isMail = v.contact.includes('@');
    const params = {
      company: v.company || '未記入',
      name: v.name,
      email: isMail ? v.contact : '未記入',
      phone: isMail ? '未記入' : v.contact,
      inquiryType: '社長のAI別班について（広告LP /lp/ai から）',
      message: v.message || '（ひと言なし）',
    };
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    try {
      if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
        await emailjs.send(SERVICE_ID, TEMPLATE_ID, params, PUBLIC_KEY);
      } else {
        console.log('EmailJS未設定のため送信しません（確認用）', params);
      }
      trackLead('lp-ai');
      setState('done');
    } catch {
      setState('idle');
      setErr('送信できませんでした。時間をおいてもう一度お試しください。');
    }
  };

  if (state === 'done') {
    return (
      <div className="rounded-xl border-2 border-ab-cyan bg-white p-8 text-center">
        <p className="text-xl font-black text-ab-navy mb-3">受け付けました。</p>
        <p className="text-sm text-ab-muted leading-loose">
          担当から、ご連絡します。
          <br />
          少しだけお待ちください。
        </p>
      </div>
    );
  }

  const field =
    'w-full rounded-lg border border-ab-line bg-white px-4 py-3.5 text-base text-ab-text placeholder:text-[#9AA6B6] focus:border-ab-cyan focus:outline-none';

  return (
    <form onSubmit={submit} className="rounded-xl border border-ab-line bg-white p-5 md:p-8 space-y-4 text-ab-navy">
      <div>
        <label className="block text-sm font-bold mb-2" htmlFor="lp-name">
          お名前 <span className="text-ab-cyan-ink text-xs">必須</span>
        </label>
        <input id="lp-name" className={field} value={v.name} onChange={(e) => setV({ ...v, name: e.target.value })} placeholder="例）熊本 太郎" autoComplete="name" />
      </div>
      <div>
        <label className="block text-sm font-bold mb-2" htmlFor="lp-company">
          会社名
        </label>
        <input id="lp-company" className={field} value={v.company} onChange={(e) => setV({ ...v, company: e.target.value })} placeholder="例）株式会社〇〇" autoComplete="organization" />
      </div>
      <div>
        <label className="block text-sm font-bold mb-2" htmlFor="lp-contact">
          メールか電話番号 <span className="text-ab-cyan-ink text-xs">必須</span>
        </label>
        <input id="lp-contact" className={field} value={v.contact} onChange={(e) => setV({ ...v, contact: e.target.value })} placeholder="ご連絡しやすい方をひとつ" />
      </div>
      <div>
        <label className="block text-sm font-bold mb-2" htmlFor="lp-msg">
          ひと言（なくても大丈夫です）
        </label>
        <textarea id="lp-msg" rows={3} className={field} value={v.message} onChange={(e) => setV({ ...v, message: e.target.value })} placeholder="例）見積もりづくりを楽にしたい" />
      </div>
      {err && <p className="text-sm text-ab-cyan-ink font-bold">{err}</p>}
      <button
        type="submit"
        disabled={state === 'sending'}
        className="w-full py-4 bg-ab-cyan text-white text-lg font-bold rounded-lg hover:bg-ab-navy transition-colors disabled:opacity-60"
      >
        {state === 'sending' ? '送っています…' : '無料で話してみる'}
      </button>
      <p className="text-xs text-ab-muted leading-relaxed">
        送信すると<Link href="/privacy-policy" className="underline">プライバシーポリシー</Link>に同意したものとします。
      </p>
    </form>
  );
};

/** LPのどこまで読まれたかを計測に送る（各セクションの表示・25/50/75/100%・入力開始）。GA4とMetaピクセルへ */
export const LpReadTracker = () => {
  useEffect(() => {
    type W = Window & { fbq?: (...a: unknown[]) => void; gtag?: (...a: unknown[]) => void };
    const w = window as W;
    const sent = new Set<string>();
    const send = (name: string, params: Record<string, string | number>) => {
      const key = name + JSON.stringify(params);
      if (sent.has(key)) return;
      sent.add(key);
      w.gtag?.('event', name, { lp: 'ai', ...params });
      w.fbq?.('trackCustom', name, { lp: 'ai', ...params });
      // Metaはパラメーター別の内訳が見られないので、番号入りの名前でも送る（lp_s03・lp_scroll_50 など）
      const metaName =
        name === 'lp_section' ? `lp_s${String(params.section_no).padStart(2, '0')}` :
        name === 'lp_scroll' ? `lp_scroll_${params.percent}` : '';
      if (metaName) w.fbq?.('trackCustom', metaName, { lp: 'ai' });
    };
    // 「まず話してみる」で入力欄へ飛んだ後は、読んだ扱いにしない（飛んだ瞬間に100%まで記録されるため）
    let jumped = false;
    const sections = Array.from(document.querySelectorAll('section'));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || jumped) return;
          const i = sections.indexOf(e.target as HTMLElement) + 1;
          const h = (e.target.querySelector('h1,h2,h3')?.textContent || '').trim().slice(0, 30);
          send('lp_section', { section_no: i, section_title: h });
          io.unobserve(e.target);
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => io.observe(s));
    const onScroll = () => {
      if (jumped) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 100;
      [25, 50, 75, 100].forEach((p) => pct >= p - 1 && send('lp_scroll', { percent: p }));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    const onFocus = (ev: FocusEvent) => {
      if ((ev.target as HTMLElement)?.closest?.('#form form')) send('lp_form_start', { form: 'lp-ai' });
    };
    document.addEventListener('focusin', onFocus);
    const onClick = (ev: MouseEvent) => {
      const a = (ev.target as HTMLElement)?.closest?.('a[href="#form"]');
      if (!a) return;
      const i = sections.indexOf(a.closest('section') as HTMLElement) + 1;
      jumped = true;
      send('lp_cta_click', { section_no: i });
    };
    document.addEventListener('click', onClick, true);
    return () => {
      document.removeEventListener('click', onClick, true);
      io.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('focusin', onFocus);
    };
  }, []);
  return null;
};
