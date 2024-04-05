import Head from 'next/head';
import { ReactNode } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  icon?: string;
  url?: string;
  type?: string;
  twitterHandle?: string;
  children?: ReactNode;
  lang?: string;
}

const SEO: React.FC<SEOProps> = ({
  type = 'website',
  title="AGΞNCY ΞXPERTS",
  description="We are a collective venture builder curated from the best talent within Developer DAO. We aim to collectively build products and services for our clients and the web3 space.",
  image="/RRSS_short.png",
  icon="/favicon.ico",
  url="https://agency.developerdao.com",
  twitterHandle="@ddweb3experts",
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
      {image && <meta property="og:image" content={url + image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={url + image} />}
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}
      {twitterHandle && <meta name="twitter:creator" content={twitterHandle} />}
    </Head>
  );
};

export default SEO;

