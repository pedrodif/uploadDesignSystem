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
  argTypes: {},
} as Meta<ITextInputRootProps>

export const Default: StoryObj<ITextInputRootProps> = {
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
}

