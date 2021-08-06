import React from 'react';
import PropTypes from 'prop-types';
import { GiLinkedRings } from 'react-icons/gi';

const InternalGlobalRenderer = ({ children }) => (
  <span>
    {children}
    <GiLinkedRings style={{ display: 'inline' }} />
  </span>
);

InternalGlobalRenderer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InternalGlobalRenderer;
