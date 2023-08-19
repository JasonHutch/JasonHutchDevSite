import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/layout/layout.tsx';
import AboutPage from './pages/about/aboutPage.tsx';
import WorkPage from './pages/work/workPage.tsx';
import ProjectsPage from './pages/projects/projectsPage.tsx';
import ProjectDetail from './pages/projectDetail/projectDetail.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/work",
        element: <WorkPage />
      },
      {
        path: "/projects",
        element: <ProjectsPage />
      },
      {
        path: "/projects/:id",
        element: <ProjectDetail />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
