import React from 'react';
import { Button } from 'gatsby-theme-material-ui';
import { Box } from '@material-ui/core';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { determinColor } from '../../lib/helperFunctions';

const useStyles = makeStyles((theme) => ({
  size: {
    padding: (props) => props.padding,
  },
}));

function ButtonInternalLocal({
  idTag,
  text,
  variant,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  fullWidth,
  borderRadius,
  padding,
  link,
  colors,
  alignment,
  typography,
}) {
  const { main, dark, contrastText } = colors;
  const mainColor = determinColor(main?.color);
  const darkColor = determinColor(dark?.color);
  const contrastTextColor = determinColor(contrastText?.color);

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: mainColor,
        dark: darkColor,
        contrastText: contrastTextColor,
      },
    },
    shape: {
      borderRadius: borderRadius || '4px',
    },
    typography: {
      button: {
        fontFamily: typography?.fontFamily || 'Roboto, Helvetica, Arial, sans-serif',
        fontWeight: typography?.fontWeight || 500,
        fontSize: typography?.fontSize || '0.875rem',
        lineHeight: typography?.lineHeight || 1.75,
        letterSpacing: typography?.letterSpacing || '0.02857em',
        textTransform: 'none',
      },
    },
  });

  const classes = useStyles({ padding });
  const { reference, hashId, parameter, newTab } = link[0];

  return (
    <ThemeProvider theme={theme}>
      <Box textAlign={alignment}>
        <Button
          id={idTag}
          color="primary"
          variant={variant}
          disableElevation={disableElevation}
          disableFocusRipple={disableFocusRipple}
          disableRipple={disableRipple}
          fullWidth={fullWidth}
          className={classes.size}
          target={newTab ? '_blank' : ''}
          rel={newTab ? 'noopener' : ''}
          to={`/${reference.slug.current}${hashId ? `#${hashId}` : ''}${
            parameter ? `?${parameter}` : ''
          }`}
        >
          {text}
        </Button>
      </Box>
    </ThemeProvider>
  );
}
export default ButtonInternalLocal;
