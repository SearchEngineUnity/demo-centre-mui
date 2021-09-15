import React from 'react';
import { Container, Typography, Grid, Box } from '@material-ui/core';
import ImgBlock from '../FluidImgBlock';
import Subtitle from '../block-contents/HeroSubtitleSerializer';
import ProgressBar from '../ScrollProgressBar';
import { mapFluidImgBlockToProps } from '../../lib/mapToProps';
import { useSpGuideHero } from '../../hooks/useSpGuideHero';

function GuideHero({ h1, subtitle, date, image }) {
  const lastUpdatedDate = date ? new Date(date.replace(/-/g, '/')) : null;
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const heroAlignment = useSpGuideHero();

  return (
    <>
      <Box bgcolor="primary.main" color="primary.contrastText" id="hero" component="section" py={8}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justify="center"
            alignItems={heroAlignment.heroLrAlignment}
            spacing={8}
          >
            <Grid item md={6} xs={12}>
              <Typography variant="h1" gutterBottom>
                {h1}
              </Typography>
              <Subtitle blocks={subtitle} />
              <br />
              {lastUpdatedDate && (
                <Box fontSize="0.775rem" fontWeight={600} component="p">
                  Last updated: {lastUpdatedDate.toLocaleDateString('en-US', options)}
                </Box>
              )}
            </Grid>
            <Grid item md={6} xs={12}>
              <div justify={heroAlignment.heroImgAlignment}>
                <ImgBlock {...mapFluidImgBlockToProps(image)} loading="eager" height={400} />
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ProgressBar />
    </>
  );
}

export default GuideHero;
