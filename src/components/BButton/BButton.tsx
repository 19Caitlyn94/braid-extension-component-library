import React, { FC,  ButtonHTMLAttributes  } from 'react';
import { Button } from 'braid-design-system';

const BButton:FC<ButtonHTMLAttributes<HTMLButtonElement>>  = (props) => {
  return (
    <Button {...props} />
  );
};

export default BButton;
  







