import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('TextField', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default'))
    },
  ]);
}
