import { RootLayout } from '@app/layouts';
import { MainLayout } from '@app/layouts/mainLayout';
import { PathNames } from '@shared/config';
import { RouteObject } from 'react-router-dom';

export const router: RouteObject[] = [
  {
    path: PathNames.root,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MainLayout />,
      },
    ],
  },
  //? 404 page ↓
  {
    path: '*',
    element: <p>Not found page</p>,
  },
];
