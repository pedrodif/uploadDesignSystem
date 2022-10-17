import { Meta, StoryObj } from '@storybook/react';
import { TextInput, ITextInputRootProps } from './TextInput';
import { Envelope } from "phosphor-react";


export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
   children: [
    <TextInput.Icon>
      < Envelope/>
    </TextInput.Icon>,

    <TextInput.Input
      placeholder='Type your email adress'
    />
   ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  },
} as Meta<ITextInputRootProps>

export const Default: StoryObj<ITextInputRootProps> = {}

export const WithouIcon: StoryObj<ITextInputRootProps> = {
  args: {
    children: <TextInput.Input placeholder='Type your email adress' />
  }
}

