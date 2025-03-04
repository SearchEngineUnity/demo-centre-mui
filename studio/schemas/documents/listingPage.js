import { MdWeb } from 'react-icons/md';
import * as sections from '../sections';

export default {
  name: 'listingPage',
  type: 'document',
  title: 'Listing Page',
  icon: MdWeb,
  fieldsets: [
    {
      name: 'general',
      title: 'SEO and General Fields',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'social',
      title: 'Social Sharing',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
    {
      name: 'sections',
      title: 'Sections',
      options: {
        collapsible: true,
        collapsed: false,
      },
    },
    {
      name: 'indexing',
      title: 'Indexing',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'shortName',
      title: 'Short Name',
      type: 'string',
      fieldset: 'general',
      validation: (Rule) => [
        Rule.required().error('Field is required'),
        // add a custom rule for isUnique
      ],
    },
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
      description: 'Optimal length under 60 characters for Google SERP',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      description: 'Optimal length is under 160 characters for Google SERP',
      fieldset: 'general',
      validation: (Rule) => [Rule.required().error('Field is require.')],
    },
    {
      name: 'metaFacebook',
      title: 'Facebook Open Graph (Meta Tags)',
      type: 'metaFacebook',
      fieldset: 'social',
    },
    {
      name: 'metaTwitter',
      title: 'Twitter Open Graph (Meta Tags)',
      type: 'metaTwitter',
      fieldset: 'social',
    },
    {
      name: 'sections',
      type: 'array',
      fieldset: 'sections',
      title: 'Sections',
      of: [
        ...Object.values(sections).map(({ name, title }) => ({
          type: name,
          title,
        })),
      ],
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'This page URL will show as domain.com/slug',
      fieldset: 'indexing',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'noindex',
      title: 'Noindex',
      type: 'boolean',
      fieldset: 'indexing',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'nofollow',
      title: 'Nofollow',
      type: 'boolean',
      fieldset: 'indexing',
      initialValue: false,
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'canonical',
      title: 'Canonical URL',
      type: 'url',
      fieldset: 'indexing',
      description: 'Use this field to replace self canonical URL.',
    },
  ],
  preview: {
    select: {
      shortName: 'shortName',
      pageSections: 'sections',
      slug: 'slug.current',
      fbImg: 'metaFacebook.image',
      twitterImg: 'metaTwitter.image',
    },
    prepare({ shortName, pageSections, slug, fbImg, twitterImg }) {
      const currentSlug = slug === '/' ? '/' : `/${slug}`;
      return {
        title:
          pageSections[0]?.header?.heading ||
          pageSections[0]?.blocks[0]?.header?.heading ||
          pageSections[0]?.blocks[1]?.header?.heading ||
          `Short name: ${shortName}`,
        subtitle: currentSlug,
        media: fbImg || twitterImg,
      };
    },
  },
};
