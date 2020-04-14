import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Button', [
    {
      name: 'Default',
      Component: lazy(() => import('./Default'))
    },
    {
      name: 'OutlineButton',
      Component: lazy(() => import('./OutlineButton'))
    },
  ]);
}
