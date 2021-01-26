import React, { ReactNode } from 'react';

import { Container } from '../../styles/components/Button';

interface ButtonProps {
  bgColor: string;
  children: ReactNode;
}

const Button = ({ children, bgColor, ...rest }: ButtonProps) => {
  return (
    <Container type="submit" bgColor={bgColor} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
