import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography, Box } from '@material-ui/core';
import styled from 'styled-components';
import VideoEmbed from './VideoEmbed';
import BasicTable from './BasicTable';
import Illustration from './Illustration';
import InlineImage from './InlineImage';
import HighlightBox from './HightlightBox/HighlightBox';
import SmartTable from './SmartTable';
import JumpLink from '../link/JumpLink';
import ExternalLink from '../link/LinkExternal';
import InternalGlobal from '../link/LinkInternalGlobal';
import InternalLocal from '../link/LinkInternalLocal';
import ButtonExternal from '../buttons/ButtonExternal';
import ButtonInternalGlobal from '../buttons/ButtonInternalGlobal';
import ButtonInternalLocal from '../buttons/ButtonInternalLocal';
import ButtonJumpLInk from '../buttons/ButtonJumpLink';
import { mapMuiBtnToProps } from '../../lib/mapToProps';

// import CopyLink from './CopyLink';

const NoIndentUl = styled.ul`
  margin-left: 1.4rem;
  padding-left: 0;

  & > li {
    position: relative;
  }
`;

const NoIndentOl = styled.ol`
  list-style-type: decimal;
  margin-left: 1.4rem;
  padding-left: 0;

  & > li {
    position: relative;
  }
`;

const StyledTypography = styled(Typography)`
  margin-top: 1.35em;
`;

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h2':
          return (
            <StyledTypography
              gutterBottom
              variant="h2"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
              {/* <CopyLink
                id={
                  props.node.markDefs.length !== 0
                    ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                    : undefined
                }
              /> */}
            </StyledTypography>
          );

        case 'h3':
          return (
            <StyledTypography
              gutterBottom
              variant="h3"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          );

        case 'h4':
          return (
            <StyledTypography
              gutterBottom
              variant="h4"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          );

        case 'h5':
          return (
            <StyledTypography
              gutterBottom
              variant="h5"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          );

        case 'h6':
          return (
            <StyledTypography
              gutterBottom
              variant="h6"
              id={
                props.node.markDefs.length !== 0
                  ? props.node.markDefs.filter((x) => x._type === 'hashId')[0]?.idTag
                  : undefined
              }
            >
              {props.children}
            </StyledTypography>
          );

        case 'blockquote':
          return (
            <Box
              component="blockquote"
              fontSize="h3.fontSize"
              fontWeight={100}
              borderColor="primary.main"
              pl={4}
              py={1}
              borderLeft={4}
            >
              &#8220; {props.children} &#8221;
            </Box>
          );

        default:
          return props.children[0] ? (
            <Typography gutterBottom variant="body1">
              {props.children}
            </Typography>
          ) : (
            <br />
          );
      }
    },
    illustration({ node }) {
      return <Illustration illustration={node} />;
    },
    basicTable({ node }) {
      return <BasicTable basicTable={node} />;
    },
    highlightBox({ node }) {
      return <HighlightBox box={node} />;
    },
    smartTable({ node }) {
      return <SmartTable smartTable={node} />;
    },
    instagram({ node }) {
      return <p>Work in progress</p>;
    },
    videoEmbed({ node }) {
      return <VideoEmbed url={node.url} ratio={node.ratio} />;
    },
    btnBlockMui({ node }) {
      switch (node.link[0]._type) {
        case 'jumpLink':
          return <ButtonJumpLInk {...mapMuiBtnToProps(node)} />;
        case 'internalLocal':
          return <ButtonInternalLocal {...mapMuiBtnToProps(node)} />;
        case 'internalGlobal':
          return <ButtonInternalGlobal {...mapMuiBtnToProps(node)} />;
        case 'externalLink':
          return <ButtonExternal {...mapMuiBtnToProps(node)} />;
        default:
          return <p>under development</p>;
      }
    },
  },
  marks: {
    hashId: ({ children }) => children,
    internalLocal: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const { newTab, hashId, parameter } = mark;
      const baseSlug = slug.current === '/' ? `/` : `/${slug.current}`;
      const href = `${baseSlug}${hashId ? `#${hashId}` : ''}${parameter ? `?${parameter}` : ''}`;
      return (
        <InternalLocal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalLocal>
      );
    },
    internalGlobal: ({ mark, children }) => {
      const { href, newTab } = mark;
      return (
        <InternalGlobal href={href} newTab={newTab} className="pt-link">
          {children}
        </InternalGlobal>
      );
    },
    externalLink: ({ mark, children }) => {
      const { href, noreferrer, newTab } = mark;
      return (
        <ExternalLink href={href} noreferrer={noreferrer} newTab={newTab} className="pt-link">
          {children}
        </ExternalLink>
      );
    },
    jumpLink: ({ mark, children }) => {
      const { hashId } = mark;
      return (
        <JumpLink hash={hashId} className="pt-link">
          {children}
        </JumpLink>
      );
    },
    inlineImage: ({ mark, children }) => {
      switch (mark._type) {
        case 'inlineImage':
          if (mark.asset) {
            return <InlineImage image={mark} alt={children[0]} />;
          }
          return null;

        default:
          return <p>doesn't work</p>; // eslint-disable-line
      }
    },
  },
  list: ({ children }) => {
    switch (children[0].props.node.listItem) {
      case 'bullet':
        return <NoIndentUl>{children}</NoIndentUl>;
      default:
        return <NoIndentOl>{children}</NoIndentOl>;
    }
  },
  listItem: ({ children }) => (
    <Typography variant="body1" component="li">
      {children}
    </Typography>
  ),
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
