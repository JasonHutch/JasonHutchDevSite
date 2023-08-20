import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ProjectDetail from './pages/projectDetail/projectDetail.tsx';
import AboutPageAlt from './pages/aboutAlt/aboutPageAlt.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutPageAlt/>,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetail/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
