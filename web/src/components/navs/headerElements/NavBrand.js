import React from 'react';
import { Box } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

function NavBrand({ url, brandGroup }) {
  return (
    <>
      {brandGroup.map((group) => {
        const { type, brand, _key } = group;
        const height = group.height || 48;

        switch (type) {
          case 'desktop':
            return (
              <Box display={{ xs: 'none', lg: 'block', xl: 'block' }} key={_key} role="none">
                <Link to={`/${url}`} role="menuitem">
                  <img src={brand.logo.asset.url} alt={brand.title} height={height} />
                </Link>
              </Box>
            );
          case 'tablet':
            return (
              <Box
                display={{ xs: 'none', sm: 'none', md: 'block', lg: 'none', xl: 'none' }}
                key={_key}
                role="none"
              >
                <Link to={`/${url}`} role="menuitem">
                  <img src={brand.logo.asset.url} alt={brand.title} height={height} />
                </Link>
              </Box>
            );
          case 'mobile':
            return (
              <Box
                display={{ xs: 'block', sm: 'block', md: 'none', lg: 'none', xl: 'none' }}
                key={_key}
                role="none"
              >
                <Link to={`/${url}`} role="menuitem">
                  <img src={brand.logo.asset.url} alt={brand.title} height={height} />
                </Link>
              </Box>
            );

          default:
            return <div>under construction</div>;
        }
      })}
    </>
  );
}

export default NavBrand;
