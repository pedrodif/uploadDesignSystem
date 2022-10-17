import { InputHTMLAttributes } from 'react';
import { clsx } from 'clsx';

export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement>{
 placeholder?: string;
}

export function TextInput(props: ITextInputProps) {
  return(
    <input
      className={clsx(
        'py-4 px-3 rounded bg-gray-800 w-full text-gray-100 text-xs placeholder:text-gray-400'
      )}
      {...props}
    />
  )
}