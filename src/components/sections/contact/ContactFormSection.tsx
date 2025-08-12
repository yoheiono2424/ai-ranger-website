'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface FormData {
  company: string;
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
  privacyPolicy: boolean;
}

interface FormErrors {
  company?: string;
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  message?: string;
  privacyPolicy?: string;
}

const ContactFormSection = () => {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    name: '',
    email: '',
    phone: '',
    inquiryType: '',
    message: '',
    privacyPolicy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inquiryTypes = [
    { value: 'ai-ranger', label: 'AIレンジャーについて' },
    { value: '5-ranger', label: '5レンジャーについて' },
    { value: 'estimate', label: 'お見積もり依頼' },
    { value: 'other', label: 'その他' },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'お名前は必須項目です';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスは必須項目です';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください';
    }

    if (!formData.inquiryType) {
      newErrors.inquiryType = 'お問い合わせ種別を選択してください';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ内容は必須項目です';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'お問い合わせ内容は10文字以上入力してください';
    }

    if (formData.phone && !/^[\d-+()]+$/.test(formData.phone)) {
      newErrors.phone = '正しい電話番号を入力してください';
    }

    if (!formData.privacyPolicy) {
      newErrors.privacyPolicy = 'プライバシーポリシーへの同意が必要です';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // EmailJSの設定値（一時的にハードコード - 後で環境変数に移行）
    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_example';
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_example';
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'public_key_example';

    // EmailJS初期化とメール送信
    try {
      // EmailJSに送信するデータを準備
      const templateParams = {
        company: formData.company || '未記入',
        name: formData.name,
        email: formData.email,
        phone: formData.phone || '未記入',
        inquiryType: inquiryTypes.find(t => t.value === formData.inquiryType)?.label || '',
        message: formData.message,
      };

      // 環境変数が設定されていない場合はダミー処理
      if (SERVICE_ID === 'service_example') {
        console.log('EmailJS設定が必要です。.env.localファイルを作成してください。');
        console.log('送信データ:', templateParams);
        // ダミーの遅延処理
        setTimeout(() => {
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({
            company: '',
            name: '',
            email: '',
            phone: '',
            inquiryType: '',
            message: '',
            privacyPolicy: false,
          });
        }, 1000);
      } else {
        // 実際のEmailJS送信
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          templateParams,
          PUBLIC_KEY
        );
        
        setIsSubmitting(false);
        setIsSubmitted(true);
        // フォームリセット
        setFormData({
          company: '',
          name: '',
          email: '',
          phone: '',
          inquiryType: '',
          message: '',
          privacyPolicy: false,
        });
      }
    } catch (error) {
      console.error('メール送信エラー:', error);
      alert('送信に失敗しました。もう一度お試しください。');
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const inputValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: inputValue }));
    
    // エラーがある場合はクリア
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                送信完了
              </h2>
              <p className="text-gray-700 mb-6">
                お問い合わせいただき、ありがとうございます。<br />
                内容を確認の上、2営業日以内にご返信いたします。
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-6 py-3 bg-ai-blue text-white font-bold rounded-full hover:bg-sky-blue transition-colors"
              >
                新しいお問い合わせ
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              お問い合わせフォーム
            </h2>
            <p className="text-gray-600">
              以下のフォームにご記入いただき、お気軽にお問い合わせください
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {/* 会社名 */}
              <div>
                <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ai-blue focus:border-ai-blue transition-colors"
                  placeholder="株式会社〇〇"
                />
              </div>

              {/* お名前 */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ai-blue transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-300 focus:border-ai-blue'
                  }`}
                  placeholder="山田太郎"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ai-blue transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-300 focus:border-ai-blue'
                  }`}
                  placeholder="example@company.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                  電話番号
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ai-blue transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-gray-300 focus:border-ai-blue'
                  }`}
                  placeholder="03-1234-5678"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* お問い合わせ種別 */}
            <div className="mt-6">
              <label htmlFor="inquiryType" className="block text-sm font-bold text-gray-700 mb-2">
                お問い合わせ種別 <span className="text-red-500">*</span>
              </label>
              <select
                id="inquiryType"
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ai-blue transition-colors ${
                  errors.inquiryType ? 'border-red-500' : 'border-gray-300 focus:border-ai-blue'
                }`}
              >
                <option value="">選択してください</option>
                {inquiryTypes.map(type => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
              {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>}
            </div>

            {/* お問い合わせ内容 */}
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                お問い合わせ内容 <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-ai-blue transition-colors ${
                  errors.message ? 'border-red-500' : 'border-gray-300 focus:border-ai-blue'
                }`}
                placeholder="お問い合わせの詳細をご記入ください"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              <p className="text-sm text-gray-500 mt-1">10文字以上でご記入ください</p>
            </div>

            {/* プライバシーポリシー同意 */}
            <div className="mt-6">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-ai-blue border-gray-300 rounded focus:ring-ai-blue"
                />
                <label htmlFor="privacyPolicy" className="ml-2 text-sm text-gray-700">
                  <a 
                    href="/privacy-policy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-ai-blue hover:text-sky-blue underline"
                  >
                    プライバシーポリシー
                  </a>
                  に同意する <span className="text-red-500">*</span>
                </label>
              </div>
              {errors.privacyPolicy && <p className="text-red-500 text-sm mt-1 ml-6">{errors.privacyPolicy}</p>}
            </div>

            {/* 送信ボタン */}
            <div className="mt-8 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 font-bold rounded-full transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-ai-blue hover:bg-sky-blue text-white'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    送信中...
                  </div>
                ) : (
                  '送信する'
                )}
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;