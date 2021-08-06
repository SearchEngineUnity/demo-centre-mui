/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from '@material-ui/core/Link';

function InternalGlobal({ href, children, newTab }) {
  return (
    <Link target={newTab ? '_blank' : ''} rel={`${newTab ? 'noopener' : ''}`} href={href}>
      {children}
    </Link>
  );
}

export default InternalGlobal;
