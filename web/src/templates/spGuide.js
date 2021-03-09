import React from 'react';
import { graphql } from 'gatsby';
import { Container, Grid } from '@material-ui/core';
import Layout from '../containers/layout';
import GuideHero from '../components/GuideHero';
import GuideBody from '../components/block-contents/GuideSerializer';
import ToC from '../components/TableOfContent';
// import SocialSharing from '../components/SocialSharing';
import SEO from '../components/Seo';

import { mapGuideHeroToProps, mapSeoToProps } from '../lib/mapToProps';

export const query = graphql`
  query spGuideTemplate($slug: String) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    guide: sanitySpGuide(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      title
      twitter {
        description
        title
      }
      noindex
      nofollow
      canonical
      id
      h1
      facebook {
        title
        description
        image {
          asset {
            url
          }
        }
      }
      _rawBody(resolveReferences: { maxDepth: 14 })
      toc {
        _key
        header
        title
      }
      description
      heroImage {
        alt
        asset {
          fluid {
            ...GatsbySanityImageFluid_noBase64
          }
          metadata {
            dimensions {
              height
              width
            }
          }
          originalFilename
        }
      }
      _rawSubtitle(resolveReferences: { maxDepth: 10 })
      _createdAt
      _updatedAt
    }
  }
`;

export default ({ data }) => {
  const type = 'guide';
  // const url = `${data.site.siteMetadata.siteUrl}/${data.guide.slug.current}`;

  return (
    // Need code here for if banner return banner
    <Layout>
      <SEO {...mapSeoToProps(data.guide, data.site.siteMetadata.siteUrl, type)} />
      <GuideHero {...mapGuideHeroToProps(data.guide)} />
      <Container maxWidth="lg">
        <Grid container>
          <Grid item>
            <ToC toc={data.guide.toc} />
          </Grid>
          <Grid item>
            <GuideBody blocks={data.guide._rawBody} />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};
