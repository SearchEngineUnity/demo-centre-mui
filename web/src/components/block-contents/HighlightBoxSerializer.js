import BaseBlockContent from '@sanity/block-content-to-react';
import React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { Typography } from '@material-ui/core';
import JumpLink from '../link/JumpLink';
import ExternalLink from '../link/LinkExternal';
import InternalGlobal from '../link/LinkInternalGlobal';
import InternalLocal from '../link/LinkInternalLocal';

const serializers = {
  types: {
    block(props) {
      const { children } = props;
      return (
        <Typography component="p" variant="body1" gutterBottom>
          {children}
        </Typography>
      );
    },
  },
  marks: {
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
  },
};

const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />;

export default BlockContent;
