import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { LinearProgress } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'sticky',
    top: 0,
    zIndex: 5,
    height: '0.4rem',
  },
});

export default function ScrollPRogressBar() {
  const classes = useStyles();
  const [progress, setProgress] = useState(0);

  const getDocHeight = () =>
    Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight,
    );

  const calculateScrollDistance = () => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - winHeight;
    const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);

    setProgress(scrollPosition);
  };

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        calculateScrollDistance();
      });
      console.log('scrolling');
    };
    document.addEventListener('scroll', handleScroll);
    return () => document.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    calculateScrollDistance();
  });

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      color="secondary"
      className={classes.root}
    />
  );
}
