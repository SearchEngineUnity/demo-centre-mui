/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import Link from '@material-ui/core/Link';

function InternalGlobal({ href, children, newTab, className }) {
  return (
    <Link
      target={newTab ? '_blank' : ''}
      rel={`${newTab ? 'noopener' : ''}`}
      href={href}
      className={className}
    >
      {children}
    </Link>
  );
}

export default InternalGlobal;
