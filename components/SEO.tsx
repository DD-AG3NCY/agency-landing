import Head from 'next/head';
import React from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  icon?: string;
  url?: string;
  type?: string;
  twitterHandle?: string;
  children?: React.ReactNode;
  lang?: string;
}

const SEO: React.FC<SEOProps> = ({
  type = 'website',
  title="Developer DAO",
  description="BUIDL WEB3 WITH __ FRENS. Developer DAO has brought together some of the most talented people on the web to build web3.",
  image="/RRSS_D_D_Image.png",
  icon="/favicon.ico",
  url="https://developerdao.com",
  twitterHandle="@developerdao",
  children,
  lang = 'en',
}) => {
  return (
    <Head>
      {children}
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {url && <link rel="canonical" href={url} />}
      {image && <link rel="icon" href={icon} />}

      {/* Open Graph */}
      {url && <meta property="og:url" content={url} />}
      {type && <meta property="og:type" content={type} />}
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
      {url && <meta name="twitter:site" content={url} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
    </Head>
  );
};

export default SEO;
