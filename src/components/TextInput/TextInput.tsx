import * as React from 'react';
import { Input } from '../Input/Input';
import type { InputProps } from '../Input/Input';

// TextInput is an alias for Input component
export type TextInputProps = InputProps;

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  return <Input ref={ref} {...props} />;
});
TextInput.displayName = 'TextInput';

export { TextInput };

