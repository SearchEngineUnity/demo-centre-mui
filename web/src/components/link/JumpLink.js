import React from 'react';
import Link from '@material-ui/core/Link';

function JumpLink({ hash, children }) {
  return <Link href={`#${hash}`}>{children}</Link>;
}

export default JumpLink;
