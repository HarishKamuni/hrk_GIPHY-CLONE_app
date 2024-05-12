import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout/AppLayout';
import Home from './pages/Home';
import Catogery from './pages/Catogery';
import Search from './pages/Search';
import SingleGif from './pages/SingleGif';
import Favorates from './pages/Favorates';

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/:category',
          element: <Catogery />,
        },
        {
          path: '/search/:query',
          element: <Search />,
        },
        {
          path: '/:type/:slug',
          element: <SingleGif />,
        },
        {
          path: '/favorate',
          element: <Favorates />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
