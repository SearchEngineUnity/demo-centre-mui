import { HiOutlineColorSwatch } from 'react-icons/hi';

export default {
  name: 'formStyle',
  type: 'document',
  icon: HiOutlineColorSwatch,
  title: 'formStyle',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'This is for label purpose in studio only.',
    },
    {
      name: 'fieldVariant',
      title: 'Form Field Variant',
      type: 'string',
      description:
        'This determines the field variant that is used for Input, Textarea, and Select.',
      options: {
        list: [
          { title: 'Underline', value: 'standard' },
          { title: 'Filled', value: 'filled' },
          { title: 'Outlined', value: 'outlined' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'outlined',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'borderRadius',
      title: 'border Radius',
      type: 'string',
      initialValues: '4px',
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'focusedColor',
      title: 'Focused Border Color',
      description:
        'Sets the color of borders, the checkbox label, the select label and the radio label color when one clicks into the field/fieldset.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'backgroundColor',
      title: 'Background Color',
      description: 'Sets the background color for filled variant and outlined variant.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'fieldBgHoverColor',
      title: 'Background Hover Color',
      description:
        'Sets the background color for filled variant and outlined variant on hover AND the background color for filled variant when one clicks into the filed/fieldset.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'labelColor',
      title: 'Label Color',
      description:
        'Sets the label text color, helper text color and the outline color of checkbox and radio icons.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'inputColor',
      title: 'Input Color',
      type: 'reference',
      description:
        'Sets the input text color, placeholder text color, and the border color on hover.',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'selectorColor',
      title: 'Selector Color',
      description: 'This would apply to the radio button and the checkbox.',
      type: 'reference',
      to: [{ type: 'colorOption' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
    {
      name: 'btnStyle',
      title: 'Button Style',
      type: 'reference',
      to: [{ type: 'btnDesignMui' }],
      validation: (Rule) => [Rule.required().error('Field is required')],
    },
  ],
  preview: {
    select: {
      name: 'name',
      variant: 'fieldVariant',
    },
    prepare({ name, variant }) {
      return {
        title: name,
        subtitle: `Variant: ${variant}`,
      };
    },
  },
};
