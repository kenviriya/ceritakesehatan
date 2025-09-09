import type {Metadata} from 'next';
import {Montserrat, Inter} from 'next/font/google';
import './globals.css';
import Script from 'next/script';

export const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Aulora Pants Indonesia',
  description: 'Distributor Resmi Aulora Pants di Indonesia',
};

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
        {/* Tiktok Pixel */}
        <Script
          id="tiktok-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    !function (w, d, t) {
                      w.TiktokAnalyticsObject = t;
                      var ttq = w[t] = w[t] || [];
                      ttq.methods = ["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
                      ttq.setAndDefer = function(obj, method) {
                        obj[method] = function(){ obj.push([method].concat([].slice.call(arguments,0))) }
                      };
                      for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
                      ttq.instance = function(id){
                        var inst = ttq._i[id] || [];
                        for (var n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(inst, ttq.methods[n]);
                        return inst
                      };
                      ttq.load = function(id, opts){
                        var url = "https://analytics.tiktok.com/i18n/pixel/events.js";
                        ttq._i = ttq._i || {}; ttq._i[id] = []; ttq._i[id]._u = url;
                        ttq._t = ttq._t || {}; ttq._t[id] = +new Date; ttq._o = ttq._o || {}; ttq._o[id] = opts || {};
                        var s = d.createElement("script"); s.type = "text/javascript"; s.async = true;
                        s.src = url + "?sdkid=" + id + "&lib=" + t;
                        var e = d.getElementsByTagName("script")[0]; e.parentNode.insertBefore(s, e);
                      };
                      ttq.load('${process.env.NEXT_PUBLIC_TIKTOK_PIXEL_ID}');
                      ttq.page();
                    }(window, document, 'ttq');`,
          }}
        />

        {/* GTM Tag */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        {/* GA4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-E0RRKTX5YK`}
          strategy="beforeInteractive"
        />
        <Script
          id="ga4-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-E0RRKTX5YK');
            `,
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        {/* GTM Tag */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
