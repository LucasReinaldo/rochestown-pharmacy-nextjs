import React, { useEffect, useState, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

import { Container } from '../../styles/components/Input';
import { IconBaseProps } from 'react-icons';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input = ({ name, type = 'text', placeholder, ...rest }: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <Container isFocused={isFocused}>
      <input
        type={type}
        placeholder={placeholder}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef}
        {...rest}
      />
    </Container>
  );
};

export default Input;
