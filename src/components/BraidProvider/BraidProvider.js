import 'braid-design-system/reset';
import apacTheme from 'braid-design-system/themes/apac';
import { BraidProvider } from 'braid-design-system';

const BraidProvider = ({linkComponent, styleBody, children}) => (
  <BraidProvider theme={apacTheme} linkComponent={linkComponent} styleBody={styleBody}>
    {children}
  </BraidProvider>
);

export default BraidProvider;
