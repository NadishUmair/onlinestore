// components/CustomHead.js
import Head from 'next/head';


const CustomHead = () => {
  return (
    <Head>
      <meta name="google-site-verification" content="nJT7rzCm5FSnpLJtTdewiJcRrLEcPkrr73K1ZF5VHxo" />
      <link rel="icon" href="/favicon.ico" />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=8508189072608302&ev=PageView&noscript=1"
        />
      </noscript>
    </Head>
  );
};

export default CustomHead;
