import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Library from './pages/Library.jsx'
import Feed from './pages/Feed.jsx'
import Trending from './pages/Trending.jsx'
import Player from './pages/Player.jsx'
import Favourite from './pages/Favourites.jsx'
import NotFound from './pages/NotFound.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import MainPage from './pages/MainPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path:"/", element: <MainPage/>,
        children: [
          { index:true, element: <Library /> },
          { path: "feed", element: <Feed /> },
          { path: "treding", element: <Trending /> },
          { path: "player", element: <Player /> },
          { path: "favourites", element: <Favourite /> },
        ]
      }

    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
