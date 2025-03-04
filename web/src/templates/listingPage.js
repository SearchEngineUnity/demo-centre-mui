import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../containers/layout';
import Seo from '../components/Seo';
import LrHero from '../components/sections/LrFlexHero';
import LrFlex from '../components/sections/StructuredLrFlex';
import StackFlex from '../components/sections/StackFlex';
import ListingSection from '../components/sections/ListingSection';
import ListingSectionH1 from '../components/sections/ListingSectionH1';
import { useSpGuides } from '../hooks/useSpGuides';
import {
  mapLrHeroToProps,
  mapSeoToProps,
  mapLrFlexToProps,
  mapStackFlexToProps,
  mapListingSectionToProps,
} from '../lib/mapToProps';

// eslint-disable-next-line import/prefer-default-export
export const query = graphql`
  query ListPageTemplate($slug: String) {
    page: sanityListingPage(slug: { current: { eq: $slug } }) {
      slug {
        current
      }
      sections {
        ... on SanityLrHero {
          _key
          _type
          blocks {
            ... on SanityGridFlex {
              _key
              _type
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySpGuide {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                  caption
                  maxHeight
                  maxWidth
                  caption
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              idTag
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySpGuide {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      _rawRgb
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      _rawRgb
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      _rawRgb
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              caption
            }
            ... on SanityHeroBlock {
              _key
              _type
              _rawFooter(resolveReferences: { maxDepth: 10 })
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                heading
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
              }
              headerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              title
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
          }
          idTag
          layout
          reverseOrder
          colorSettings {
            background {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            footer {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            foreground {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            heading {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            link {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            subtitle {
              color {
                alpha
                hex
                _rawRgb
              }
            }
          }
          _rawFooter(resolveReferences: { maxDepth: 10 })
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          blockAlignment
          footerAlignment
          headerAlignment
        }
        ... on SanityLrFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockAlignment
          headerAlignment
          footerAlignment
          blocks {
            ... on SanityGridFlex {
              _key
              _type
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySpGuide {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                  caption
                  maxHeight
                  maxWidth
                  caption
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              caption
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySpGuide {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      _rawRgb
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      _rawRgb
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      _rawRgb
                    }
                  }
                }
              }
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              title
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
          }
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
          idTag
          layout
          reverseOrder
          colorSettings {
            background {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            footer {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            foreground {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            heading {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            link {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            subtitle {
              color {
                alpha
                hex
                _rawRgb
              }
            }
          }
        }
        ... on SanityStackFlex {
          _key
          _type
          _rawFooter(resolveReferences: { maxDepth: 10 })
          blockWidth
          footerAlignment
          headerAlignment
          idTag
          blocks {
            ... on SanityGridFlex {
              _key
              _type
              layout
              tileOption
              tiles {
                _key
                link {
                  ... on SanityExternalLink {
                    _key
                    _type
                    href
                    noreferrer
                    newTab
                  }
                  ... on SanityJumpLink {
                    _key
                    _type
                    hashId
                  }
                  ... on SanityInternalGlobal {
                    _key
                    _type
                    href
                    newTab
                  }
                  ... on SanityInternalLocal {
                    _key
                    _type
                    newTab
                    hashId
                    parameter
                    reference {
                      ... on SanityListingPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanityPage {
                        id
                        slug {
                          current
                        }
                      }
                      ... on SanitySpGuide {
                        id
                        slug {
                          current
                        }
                      }
                    }
                  }
                }
                text
                title
                tileImage {
                  alt
                  _rawAsset(resolveReferences: { maxDepth: 10 })
                  caption
                  maxHeight
                  maxWidth
                  caption
                }
              }
            }
            ... on SanityBtnBlockMui {
              _key
              _type
              btnAlignment
              link {
                ... on SanityJumpLink {
                  _key
                  _type
                  hashId
                }
                ... on SanityExternalLink {
                  _key
                  _type
                  href
                  newTab
                  noreferrer
                }
                ... on SanityInternalGlobal {
                  _key
                  _type
                  href
                  newTab
                }
                ... on SanityInternalLocal {
                  _key
                  _type
                  newTab
                  hashId
                  parameter
                  reference {
                    ... on SanityListingPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanityPage {
                      id
                      slug {
                        current
                      }
                    }
                    ... on SanitySpGuide {
                      id
                      slug {
                        current
                      }
                    }
                  }
                }
              }
              text
              design {
                typography {
                  fontFamily
                  fontWeight
                  fontSize
                  lineHeight
                  letterSpacing
                }
                settings {
                  disableElevation
                  disableFocusRipple
                  disableRipple
                  fullWidth
                  variant
                  padding
                  borderRadius
                }
                colors {
                  contrastText {
                    color {
                      hex
                      alpha
                      _rawRgb
                    }
                  }
                  dark {
                    color {
                      alpha
                      hex
                      _rawRgb
                    }
                  }
                  main {
                    color {
                      alpha
                      hex
                      _rawRgb
                    }
                  }
                }
              }
            }
            ... on SanityImageBlock {
              _key
              _type
              alt
              _rawAsset(resolveReferences: { maxDepth: 10 })
              maxHeight
              maxWidth
              caption
            }
            ... on SanitySectionBlock {
              _key
              _type
              _rawText(resolveReferences: { maxDepth: 10 })
              header {
                _rawSubtitle(resolveReferences: { maxDepth: 10 })
                heading
              }
              _rawFooter(resolveReferences: { maxDepth: 10 })
              headerAlignment
              footerAlignment
            }
            ... on SanityVideoBlock {
              _key
              _type
              url
              ratio
            }
            ... on SanityBlockFormNetlify {
              _key
              _type
              _rawFormNetlify(resolveReferences: { maxDepth: 10 })
              title
              titleAlignment
              _rawFormStyle(resolveReferences: { maxDepth: 10 })
            }
          }
          colorSettings {
            background {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            footer {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            foreground {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            heading {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            link {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            subtitle {
              color {
                alpha
                hex
                _rawRgb
              }
            }
          }
          header {
            heading
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
          }
        }
        ... on SanityListingSection {
          _key
          _type
          listType
          _rawFooter(resolveReferences: { maxDepth: 10 })
          count
          footerAlignment
          header {
            _rawSubtitle(resolveReferences: { maxDepth: 10 })
            heading
          }
          headerAlignment
          idTag
          colorSettings {
            background {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            footer {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            foreground {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            heading {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            link {
              color {
                hex
                alpha
                _rawRgb
              }
            }
            subtitle {
              color {
                alpha
                hex
                _rawRgb
              }
            }
          }
        }
      }
      canonical
      slug {
        current
      }
      title
      description
      metaTwitter {
        image {
          asset {
            url
          }
        }
        description
        title
      }
      nofollow
      noindex
      metaFacebook {
        description
        image {
          asset {
            url
          }
        }
        title
      }
    }
  }
`;

const StructuredPage = ({ data, location, pageContext }) => {
  let allListItems;
  const spGuides = useSpGuides();

  switch (pageContext.listType) {
    case 'SPG':
      allListItems = spGuides;
      break;

    default:
      break;
  }

  const type = 'page';

  const { currentpage, limit } = pageContext;

  const listingItems = allListItems.slice((currentpage - 1) * limit, currentpage * limit);

  return (
    <Layout location={location}>
      <Seo {...mapSeoToProps(data.page, type)} />
      <main>
        {data.page.sections.map((section) => {
          const { _type } = section;
          switch (_type) {
            case 'lrHero':
              return currentpage === 1 ? (
                <LrHero key={section._key} {...mapLrHeroToProps(section)} />
              ) : null;

            case 'lrFlex':
              return <LrFlex key={section._key} {...mapLrFlexToProps(section)} />;

            case 'stackFlex':
              return <StackFlex key={section._key} {...mapStackFlexToProps(section)} />;

            case 'listingSection':
              return currentpage === 1 ? (
                <ListingSection
                  key={section._key}
                  {...mapListingSectionToProps(section)}
                  {...pageContext}
                  listingItems={listingItems}
                />
              ) : (
                <ListingSectionH1
                  key={section._key}
                  {...mapListingSectionToProps(section)}
                  {...pageContext}
                  listingItems={listingItems}
                />
              );

            default:
              return <div>Still under development</div>;
          }
        })}
      </main>
    </Layout>
  );
};

export default StructuredPage;
