/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Router } from '@reach/router';
import sanityConfig from '../../sanityConfig';

import Page from '../templates/structuredPage';
import SpgPage from '../templates/spGuide';
import ListingPage from '../templates/listingPage';

const sanityClient = require('@sanity/client');

const client = sanityClient({
  ...sanityConfig,
  useCdn: false, // `false` if you want to ensure fresh data
  withCredentials: true,
});

const Test = () => {
  console.log('this is a test');
  return <p>this is a test</p>;
};

class PreviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      document: null,
      type: null,
    };
  }

  componentDidMount() {
    const queryDraft = `*[_id == "${this.props.document}"]  {
        ...,
      }`;

    const queryPreviewPage = `*[_id == "${this.props.document}"]  {
        ...,
      }`;

    const queryPreviewProduct = `*[_id == "${this.props.document}"]  {
        ...,
      }`;

    const queryPreviewArticle = `*[_id == "${this.props.document}"]  {
        ...,
      }`;

    client
      .fetch(queryDraft)
      .then((response) => {
        console.log(response[0]._type);
        this.setState({
          type: response[0]._type,
        });
        // switch(response[0]._type) {
        //   case 'page':
        //     client.fetch(queryPreviewPage).then(res => {
        //       this.setState({
        //         document: res[0]
        //       })
        //     })
        //     break
        //   case 'spGuide':
        //     client.fetch(queryPreviewProduct).then(res => {
        //       this.setState({
        //         document: res[0]
        //       })
        //     })
        //     break
        //   case 'listingPage':
        //     client.fetch(queryPreviewArticle).then(res => {
        //       this.setState({
        //         document: res[0]
        //       })
        //     })
        //     break
        //   default:
        //     return
        // }
      })
      .catch((error) => {
        console.log('problem', error);
      });
  }

  renderPreview() {
    if (this.state.document) {
      switch (this.state.type) {
        case 'page':
          return <Page pageContext={this.state.document} />;
        case 'spGuide':
          return <SpgPage pageContext={this.state.document} />;
        case 'listinPage':
          return <ListingPage pageContext={this.state.document} />;
        default:
          break;
      }
    }
    return <p>{this.state.type}</p>;
  }

  render() {
    return <div>{this.renderPreview()}</div>;
  }
}

const Previews = () => (
  <div>
    <Router>
      {/* <PreviewPage path='/previews' /> */}
      <Test path="/testing" />
    </Router>
  </div>
);

export default Previews;
