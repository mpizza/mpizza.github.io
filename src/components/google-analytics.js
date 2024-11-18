import Script from 'next/script';

const GID = "G-4Y065269JN";
const GoogleAnalytics = () => (
  <>
    <Script
      strategy="lazyOnload"
      src={`https://www.googletagmanager.com/gtag/js?id=${GID}`}
    />
    <Script id="google-analytics" strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GID}', {
          page_path: window.location.pathname,
        });
      `}
    </Script>
  </>
);

export default GoogleAnalytics;