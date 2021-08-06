/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'gatsby-theme-material-ui';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    position: 'sticky',
    top: 0,
  },
  activeLink: {
    color: theme.palette.primary.dark,
    fontWeight: 'bold',
  },
}));
// Used to calculate each heading's offset from the top of the page.
// This will be compared to window.scrollY to determine which heading
// is currently active.
const accumulateOffsetTop = (el, totalOffset = 0) => {
  while (el) {
    totalOffset += el.offsetTop - el.scrollTop + el.clientTop;
    el = el.offsetParent;
  }
  return totalOffset;
};
function Toc({ toc }) {
  const classes = useStyles();
  const [headings, setHeadings] = useState({
    titles: [],
    nodes: [],
  });
  // Controls which heading is currently highlighted as active.
  const [active, setActive] = useState(null);
  // Read heading titles, depths and nodes from the DOM.
  useEffect(() => {
    // Fallback to sensible defaults for headingSelector, getTitle and getDepth
    // inside useEffect rather than specifying them as Toc default props to avoid
    // the need for useMemo and useCallback, resp.
    // Otherwise, these would change on every render and since this effect calls
    // setHeadings which triggers a rerender, it would cause an infinite loop.
    // The default selector targets all headings (h1, h2, ..., h6) inside
    // a main element. You can pass in whatever string or array of strings
    // targets all the headings you want to appear in the ToC.
    console.log('use effect for setting headings');

    const nodes = Array.from(document.querySelectorAll('h2'));
    const titles = nodes.map((node, index) => ({
      title: toc[index].title,
      id: node.id,
    }));
    setHeadings({ titles, nodes });
  }, [toc]);
  // Add scroll event listener to update currently active heading.
  useEffect(() => {
    console.log('adds scroll listener. use effect triggered when headings is updated.');
    const scrollHandler = () => {
      const { titles, nodes } = headings;
      // Offsets need to be recomputed inside scrollHandler because
      // lazily-loaded content increases offsets as user scrolls down.
      const offsets = nodes.map((el) => accumulateOffsetTop(el));
      // need to test if offset is calculated to be identical when you navigate vs scrolling on page
      // console.log(offsets)
      // console.log(window.scrollY)
      const activeIndex = offsets.findIndex((offset) => offset > window.scrollY + 45);
      // console.log(`calculated activeIndex ${activeIndex}`);
      setActive(activeIndex === -1 ? titles.length - 1 : activeIndex - 1);
    };
    window.addEventListener(`scroll`, scrollHandler);
    return () => window.removeEventListener(`scroll`, scrollHandler);
  }, [headings]);
  // add hash on scroll based on current active heading
  useEffect(() => {
    console.log('changes address bar. this should fire when active or headings state chagnes');
    const { origin, pathname } = window.location;
    let { hash } = window.location;
    if (active === -1 || active === null) {
      console.log(hash);
      if (active === -1) {
        hash = '';
      }
      console.log(`hash in use effect ${hash}`);
      window.history.replaceState(null, null, `${origin + pathname + hash}`);
    } else {
      window.history.replaceState(null, null, `${origin + pathname}#${headings.titles[active].id}`);
    }
  }, [active, headings]);

  return (
    <Box p={3} className={classes.root}>
      <Typography component="p" variant="h4" gutterBottom>
        Table of Contents
      </Typography>
      {headings.titles.map(({ title, id }, index) => (
        <Box mb={1} fontSize="body2.fontSize" display="block" key={id}>
          <Link
            // style={{ lineHeight: 0.5 }}
            to={`#${id}`}
            className={`${active === index ? classes.activeLink : null} ${classes.link}`}
            underline="hover"
            onClick={(e) => {
              e.preventDefault();
              window.history.replaceState(
                null,
                null,
                `${window.location.origin + window.location.pathname}#${id}`,
              );
              headings.nodes[index].scrollIntoView({
                behavior: `smooth`,
                block: `start`,
              });
            }}
          >
            {title}
          </Link>
        </Box>
      ))}
    </Box>
  );
}
export default Toc;
