import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Typography } from '@material-ui/core';
import JumpLink from '../link/JumpLink';
import ExternalLink from '../link/LinkExternal';
import InternalGlobal from '../link/LinkInternalGlobal';
import InternalLocal from '../link/LinkInternalLocal';

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return (
            <Typography variant="h1" gutterBottom>
              {props.children}
            </Typography>
          );
        case 'h2':
          return (
            <Typography variant="h2" gutterBottom>
              {props.children}
            </Typography>
          );
        case 'h3':
          return (
            <Typography variant="h3" gutterBottom>
              {props.children}
            </Typography>
          );
        case 'h4':
          return (
            <Typography variant="h4" gutterBottom>
              {props.children}
            </Typography>
          );
        case 'h5':
          return (
            <Typography variant="h5" gutterBottom>
              {props.children}
            </Typography>
          );
        case 'h6':
          return (
            <Typography variant="h6" gutterBottom>
              {props.children}
            </Typography>
          );
        case 'blockquote':
          return <blockquote>{props.children}</blockquote>;
        default:
          return (
            <Typography component="p" variant="body1" gutterBottom>
              {props.children}
            </Typography>
          );
      }
    },
  },
  marks: {
    internalLocal: ({ mark, children }) => {
      const { slug = {} } = mark.reference;
      const { newTab, hashId, parameter } = mark;
      const baseSlug = slug.current === '/' ? `/` : `/${slug.current}`;
      const href = `${baseSlug}${hashId ? `#${hashId}` : ''}${parameter ? `?${parameter}` : ''}`;
      return (
        <InternalLocal href={href} newTab={newTab}>
          {children}
        </InternalLocal>
      );
    },
    internalGlobal: ({ mark, children }) => {
      const { href, newTab } = mark;
      return (
        <InternalGlobal href={href} newTab={newTab}>
          {children}
        </InternalGlobal>
      );
    },
    externalLink: ({ mark, children }) => {
      const { href, noreferrer, newTab } = mark;
      return (
        <ExternalLink href={href} noreferrer={noreferrer} newTab={newTab}>
          {children}
        </ExternalLink>
      );
    },
    jumpLink: ({ mark, children }) => {
      const { hashId } = mark;
      return <JumpLink hash={hashId}>{children}</JumpLink>;
    },
  },
};
const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;
export default BlockContent;
