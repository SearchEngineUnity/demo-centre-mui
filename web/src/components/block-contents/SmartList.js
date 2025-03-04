/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Typography } from '@material-ui/core';
import ListContent from './serializer/ListSerializer';

function SmartList({ type, listItems }) {
  return (
    <>
      {type === 'ordered' && (
        <ol>
          {listItems.map((li) => (
            <Typography variant="body1" component="li" key={li._key}>
              <ListContent blocks={li.content} />
            </Typography>
          ))}
        </ol>
      )}
      {type === 'unordered' && (
        <ul>
          {listItems.map((li) => (
            <Typography variant="body1" component="li" key={li._key}>
              <ListContent blocks={li.content} />
            </Typography>
          ))}
        </ul>
      )}
    </>
  );
}

export default SmartList;
