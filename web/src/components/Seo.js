/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const Seo = ({
  data,
  type,
  title,
  description,
  metaFacebook,
  metaTwitter,
  slug,
  noindex,
  nofollow,
  canonical,
}) => {
  let metaURL = data.sanityCompanyInfo.siteDomain;
  let ogType = '';
  const robots = `${nofollow ? 'nofollow' : ''} ${noindex ? 'noindex' : ''}`;

  switch (type) {
    case 'page':
      metaURL = slug === '/' ? metaURL : `${metaURL}/${slug}`;
      ogType = 'website';
      break;
    case 'guide':
      metaURL = `${metaURL}/${slug}`;
      ogType = 'article';
      break;
    default:
      break;
  }

  const ogTitle = metaFacebook?.title || title;
  const ogDescription = metaFacebook?.description || description;
  const ogImage = metaFacebook.image.asset.url;

  const twitterTitle = metaTwitter?.title || ogTitle || title;
  const twitterImage = metaTwitter.image.asset.url;
  const twitterDescription = metaTwitter?.description || ogDescription || description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={metaURL} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={twitterImage} />
      {(noindex || nofollow) && <meta name="robots" content={robots} />}
      {canonical ? (
        <link rel="canonical" href={canonical} />
      ) : (
        <link rel="canonical" href={metaURL} />
      )}
    </Helmet>
  );
};

export default function MySeo(props) {
  return (
    <StaticQuery
      query={graphql`
        {
          sanityCompanyInfo {
            homePage
            siteDomain
          }
        }
      `}
      render={(data) => <Seo data={data} {...props} />}
    />
  );
}
