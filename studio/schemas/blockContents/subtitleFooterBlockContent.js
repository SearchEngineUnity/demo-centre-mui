import { FaExternalLinkAlt, FaLink } from 'react-icons/fa';
import { GiLinkedRings } from 'react-icons/gi';
import { MdLink } from 'react-icons/md';
import ExternalLinkRenderer from '../components/ExternalLinkRenderer';
import InternalLocalRenderer from '../components/InternalLocalRenderer';
import InternalGlobalRenderer from '../components/InternalGlobalRenderer';
import JumpLinkRenderer from '../components/JumpLinkRenderer';

export default {
  name: 'subtitleFooterBlockContent',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [],
      lists: [],
      marks: {
        annotations: [
          {
            name: 'jumpLink',
            type: 'object',
            title: 'Page Jump Link',
            blockEditor: {
              icon: MdLink,
              render: JumpLinkRenderer,
            },
            fields: [
              {
                name: 'hashId',
                title: 'Hash Id',
                type: 'string',
                description: 'Please enter the ID of the segment you would like to jump to',
              },
            ],
          },
          {
            name: 'internalLocal',
            type: 'object',
            title: 'Internal Local Link',
            blockEditor: {
              icon: FaLink,
              render: InternalLocalRenderer,
            },
            fields: [
              {
                name: 'reference',
                type: 'reference',
                title: 'Reference',
                to: [{ type: 'page' }, { type: 'spGuide' }, { type: 'listingPage' }],
              },
              {
                name: 'hashId',
                title: 'Hash Id',
                type: 'string',
                description: 'Please enter the ID of the segment you would like to jump to',
              },
              {
                name: 'parameter',
                title: 'Parameter(s)',
                type: 'string',
                description: 'Please enter all needed parameters for the link',
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
          {
            name: 'internalGlobal',
            type: 'object',
            title: 'Internal Global Link',
            blockEditor: {
              icon: GiLinkedRings,
              render: InternalGlobalRenderer,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http'],
                  }),
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
          {
            title: 'External Link',
            name: 'externalLink',
            type: 'object',
            blockEditor: {
              icon: FaExternalLinkAlt,
              render: ExternalLinkRenderer,
            },
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: (Rule) =>
                  Rule.uri({
                    allowRelative: false,
                    scheme: ['https', 'http', 'mailto', 'tel'],
                  }),
              },
              {
                title: 'Open in new tab?',
                name: 'newTab',
                type: 'boolean',
                initialValue: true,
              },
              {
                title: 'rel=noreferrer?',
                name: 'noreferrer',
                type: 'boolean',
                initialValue: false,
              },
            ],
          },
        ],
      },
    },
  ],
};
