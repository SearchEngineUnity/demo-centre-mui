import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import StructuredSectionFooter from '../StructuredSectionFooter';
import StructuredSectionHeader from '../StructuredSectionHeader';
import Tile1 from '../tiles/TileImage';
import { determinColor } from '../../lib/helperFunctions';
import { mapFluidImgToProps } from '../../lib/mapToProps';

const useStyles = makeStyles((theme) => ({
  mobileGrid: {
    [theme.breakpoints.down('sm')]: {
      margin: -8,
      width: `calc(100% + 16px)`,
      '& > .MuiGrid-item': {
        padding: 8,
      },
    },
  },
  section: {
    [theme.breakpoints.down('sm')]: {
      padding: 16,
    },
    '& .pt-link': {
      color: (props) => props.linkColor,
    },
  },
}));

function GridFlex({
  idTag,
  heading,
  subtitle,
  footer,
  layout,
  headerAlignment,
  footerAlignment,
  colorSettings,
  tiles,
  tileOption,
}) {
  // number of tiles desktop/table/moble: '6/4/2' -> {lg: 2, md: 3, xs: 6}
  const calCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = { lg: 12 / valueArrNum[0], md: 12 / valueArrNum[1], xs: 12 / valueArrNum[2] };
    return colObj;
  };

  // const colCalculator = (value) => {
  //   switch (value) {
  //     case '6/4/2':
  //       return {
  //         xs: 6,
  //         md: 3,
  //         lg: 2,
  //       };
  //     case '4/2/1':
  //       return {
  //         xs: 12,
  //         md: 6,
  //         lg: 3,
  //       };
  //     case '3/2/1':
  //       return {
  //         xs: 12,
  //         md: 6,
  //         lg: 4,
  //       };
  //     case '2/2/1':
  //       return {
  //         xs: 12,
  //         md: 6,
  //         lg: 6,
  //       };
  //     default:
  //       console.log('calculator missing');
  //       return null;
  //   }
  // };

  const col = calCalculate(layout);

  const backgroundColor = determinColor(colorSettings?.background?.color) || 'transparent';
  const foregroundColor = determinColor(colorSettings?.foreground?.color) || 'text.primary';
  const linkColor = determinColor(colorSettings?.link?.color) || 'initial';
  const headingColor = determinColor(colorSettings?.heading?.color) || 'inherit';
  const subtitleColor = determinColor(colorSettings?.subtitle?.color) || 'inherit';
  const footerColor = determinColor(colorSettings?.footer?.color) || 'inherit';
  const classes = useStyles({ linkColor, foregroundColor });
  return (
    <Box
      id={idTag}
      component="section"
      py={8}
      bgcolor={backgroundColor}
      color={foregroundColor}
      className={classes.section}
    >
      <Container maxWidth="lg">
        <StructuredSectionHeader
          heading={heading}
          subtitle={subtitle}
          headingColor={headingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        <Grid container spacing={3}>
          {tiles.map((tile) => {
            console.log(tile);
            return (
              <Grid item key={tile._key} {...col}>
                <Tile1 {...mapFluidImgToProps(tile.tileImage)} />
              </Grid>
            );
          })}
        </Grid>
        <StructuredSectionFooter
          footer={footer}
          footerColor={footerColor}
          align={footerAlignment}
        />
      </Container>
    </Box>
  );
}

export default GridFlex;
