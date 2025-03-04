import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import HeroSectionFooter from './HeroSectionFooter';
import HeroSectionHeader from './HeroSectionHeader';
import { determineColor } from '../../lib/helperFunctions';
import TileImageLeft from '../listingTile/TileSpgImageLeft';
import Pagination from '../ListingPagination';

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

function ListingSectionH1({
  idTag,
  heading,
  subtitle,
  footer,
  layout,
  headerAlignment,
  footerAlignment,
  colorSettings,
  currentpage,
  numPages,
  slug,
  listingItems,
}) {
  // number of tiles desktop/table/mobile: '6/4/2' -> {lg: 2, md: 3, xs: 6}
  const colCalculate = (value) => {
    const valueArrStr = value.split('/');
    const valueArrNum = valueArrStr.map((el) => parseInt(el, 10));
    const colObj = { lg: 12 / valueArrNum[0], md: 12 / valueArrNum[1], xs: 12 / valueArrNum[2] };
    return colObj;
  };

  const col = colCalculate(layout);
  const backgroundColor = determineColor(colorSettings?.background?.color) || 'transparent';
  const foregroundColor = determineColor(colorSettings?.foreground?.color) || 'text.primary';
  const linkColor = determineColor(colorSettings?.link?.color) || 'initial';
  const headingColor = determineColor(colorSettings?.heading?.color) || 'inherit';
  const subtitleColor = determineColor(colorSettings?.subtitle?.color) || 'inherit';
  const footerColor = determineColor(colorSettings?.footer?.color) || 'inherit';
  const classes = useStyles({ linkColor, foregroundColor });
  const paginationColor = colorSettings?.foreground?.color;

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
        <HeroSectionHeader
          heading={heading}
          subtitle={subtitle}
          headingColor={headingColor}
          subtitleColor={subtitleColor}
          align={headerAlignment}
        />
        <Grid container spacing={3}>
          {listingItems.map((item) => (
            <Grid item key={item._key} {...col}>
              <TileImageLeft {...item} />
            </Grid>
          ))}
        </Grid>
        {numPages > 1 && (
          <Pagination
            currentpage={currentpage}
            numPages={numPages}
            slug={slug}
            color={paginationColor}
          />
        )}
        <HeroSectionFooter footer={footer} footerColor={footerColor} align={footerAlignment} />
      </Container>
    </Box>
  );
}

export default ListingSectionH1;
