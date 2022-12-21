import React from 'react';
import Head from 'next/head';

function buildMetaTitle(title) {
  return title ? (
    <title>{title}</title>
  ) : null;
}

function buildMetaDescription(
  description
) {
  return description ? (
    <meta
      name="description"
      content={description}
    />
  ) : null;
}

const SEO = (props) => {
  let {
    title,
    description,
    rrssImg = 'https://www.agency.developerdao.com/',
  } = props;

  let url =
    'https://www.agency.developerdao.com/';

  const twitterHandler =
    '@d_d_agency_web3';

  return (
    <Head>
      {/* <html lang="en" /> */}
      {props.children}
      <link
        rel="icon"
        href="./icon.svg"
      />
      {title && buildMetaTitle(title)}
      {description &&
        buildMetaDescription(
          description
        )}
      <link
        rel="canonical"
        href={url}
      />
      <link
        rel="icon"
        href="./icon.svg"
      />
      {/* FACEBOOK */}

      <meta
        property="og:url"
        content={url}
      />
      <meta
        property="og:type"
        content="article"
      />
      <meta
        property="og:title"
        content={title}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta
        property="og:image"
        content={rrssImg}
      />
      {/*<meta property="og:image:width"              content="pixels" /> CHANGE AMMOUT*/}
      {/*<meta property="og:image:height"              content="pixels" /> CHANGE AMMOUT*/}
      {/*<meta property="og:image:type" content="image/jpeg | image/gif | image/png" /> CHANGE AMMOUT*/}

      {/*TWITTER*/}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:title"
        content={title}
      />
      <meta
        name="twitter:description"
        content={description}
      />
      <meta
        name="twitter:image"
        content={rrssImg}
      />
      <meta
        name="twitter:site"
        content={url}
      />
      <meta
        name="twitter:creator"
        content={twitterHandler}
      />
    </Head>
  );
};

export default SEO;
