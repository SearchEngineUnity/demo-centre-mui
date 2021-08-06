export default {
  name: 'jumpLink',
  type: 'object',
  title: 'Page Jump Link',
  fields: [
    {
      name: 'hashId',
      title: 'Hash Id',
      type: 'string',
      description: 'Please enter the ID of the segment you would like to jump to',
    },
  ],
  preview: {
    select: {
      id: 'hashId',
    },
    prepare({ id }) {
      return {
        title: `#${id}`,
      };
    },
  },
};
