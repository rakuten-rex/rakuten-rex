import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('RadioButton', [
    {
      name: 'Default',
      Component: lazy(() => import('./RadioButton'))
    },
  ]);
}
