import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../block-contents/HeroFooterSerializer';

const useStyles = makeStyles((theme) => ({
  footer: {
    [theme.breakpoints.down('sm')]: {
      marginTop: 16,
    },
  },
}));
function StructuredSectionFooter({ footer, footerColor, align, hasSectionFooter }) {
  const classes = useStyles();
  return (
    <>
      {!hasSectionFooter && footer && (
        <Box
          className={classes.footer}
          component={hasSectionFooter ? 'div' : 'footer'}
          color={footerColor}
          mt={4}
          textAlign={align}
        >
          <Footer blocks={footer} />
        </Box>
      )}
    </>
  );
}
export default StructuredSectionFooter;
