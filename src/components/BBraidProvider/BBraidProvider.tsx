import 'braid-design-system/reset';
import React, { FC, ReactNode } from 'react'
import apacTheme from 'braid-design-system/themes/apac';
import { BraidProvider } from 'braid-design-system';

interface Props{
  styleBody?: boolean;
  children: ReactNode | ReactNode[]
}

const BBraidProvider:FC<Props> = ({styleBody, children}) => (
  <BraidProvider theme={apacTheme} styleBody={styleBody}>
    {children}
  </BraidProvider>
);

export default BBraidProvider;
