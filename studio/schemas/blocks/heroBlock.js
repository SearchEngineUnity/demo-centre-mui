import { BsCardText } from 'react-icons/bs';

export default {
  name: 'heroBlock',
  title: 'Hero Block',
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
      type: 'heroHeader',
    },
    {
      name: 'text',
      title: 'Text',
      type: 'heroBlockContent',
    },
    {
      name: 'footer',
      title: 'Footer',
      type: 'heroFooterBlockContent',
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
      title: 'header.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Hero Block',
      };
    },
  },
};
