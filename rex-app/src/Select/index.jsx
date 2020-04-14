import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Select', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default'))
    },
  ]);
}
