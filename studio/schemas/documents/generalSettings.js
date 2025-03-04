// this is currently not in use but is kept should we ever work on this feature

import { FaBullseye } from 'react-icons/fa';

export default {
  name: 'generalSettings',
  type: 'document',
  title: 'General Settings',
  __experimental_actions: ['create', 'update', 'publish'],
  icon: FaBullseye,
  fields: [
    {
      name: 'recaptcha',
      title: 'reCaptcha Site Key',
      type: 'string',
    },
  ],
  preview: {
    select: {},
    prepare() {
      return {
        title: `General Settings`,
      };
    },
  },
};
