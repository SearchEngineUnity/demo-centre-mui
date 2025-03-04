import { BsCardText } from 'react-icons/bs';

export default {
  name: 'sectionBlock',
  title: 'Section Block',
  type: 'object',
  icon: BsCardText,
  fieldsets: [
    {
      name: 'presentation',
      title: 'Presentation Settings',
      options: {
        collapsible: true,
        collapsed: true,
      },
    },
  ],
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'header',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'structuredBlockContent',
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'subtitleFooterBlockContent',
    },
    {
      name: 'headerAlignment',
      title: 'Header Text Alignment',
      type: 'string',
      description: 'This only apply to the header above the text.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'footerAlignment',
      title: 'Footer Text Alignment',
      type: 'string',
      description: 'This only apply to the footer below the text.',
      options: {
        list: ['left', 'center', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      fieldset: 'presentation',
      initialValue: 'left',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      title: 'header.heading',
    },
    prepare({ title }) {
      return {
        title: title || 'Section PT Block',
      };
    },
  },
};
