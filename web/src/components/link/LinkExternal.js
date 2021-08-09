/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from '@material-ui/core/Link';

function ExternalLink({ href, children, noreferrer, newTab, className }) {
  return (
    <Link
      target={newTab ? '_blank' : ''}
      rel={`${newTab ? 'noopener' : ''} ${noreferrer ? 'noreferrer' : ''}`}
      className={className}
      href={href}
    >
      {children}
    </Link>
  );
}

export default ExternalLink;
