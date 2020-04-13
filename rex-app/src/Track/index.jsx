import { lazy } from 'react';
import Page from '../Page';

export default function Index() {
  return Page('Track', [
    {
      name: 'Default',
      Component: lazy(() => import('./Track'))
    },
  ]);
}