/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'gatsby-theme-material-ui';

function InternalLocal({ href, children, newTab }) {
  return (
    <Link target={newTab ? '_blank' : ''} rel={newTab ? 'noopener' : ''} to={href}>
      {children}
    </Link>
  );
}

export default InternalLocal;
