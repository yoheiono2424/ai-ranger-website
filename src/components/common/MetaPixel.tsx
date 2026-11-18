import Script from 'next/script';

/**
 * Metaピクセル（データセット「reharu.com（社長の別班）」・広告アカウント「社長の別班」にリンク済み）
 * ピクセルIDは公開される値なので直接書いてよい。環境変数があればそちらを優先
 */
const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || '886268374536602';

const MetaPixel = () => {
  if (!PIXEL_ID) return null;
  return (
    <Script id="meta-pixel" strategy="afterInteractive">
      {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${PIXEL_ID}');fbq('track','PageView');`}
    </Script>
  );
};

export default MetaPixel;
