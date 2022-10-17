import { Meta, StoryObj } from '@storybook/react';
import { TextInput, ITextInputProps } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  args: {
    type: 'email',
    placeholder: 'Type your e-mail adress'
  },
  argTypes: {},
} as Meta<ITextInputProps>

export const Default: StoryObj<ITextInputProps> = {}

