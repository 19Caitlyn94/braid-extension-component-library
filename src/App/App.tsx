import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import { StrictMode } from 'react';

import { NextSteps } from './NextSteps';
// import { Button } from '../library'

interface AppProps {
  environment: 'development' | 'production';
}

export default ({ environment }: AppProps) => (
  <StrictMode>
    <BraidProvider theme={apac}>
      {/* <Button>hgfh</Button> */}
      <NextSteps environment={environment} />
    </BraidProvider>
  </StrictMode>
);
