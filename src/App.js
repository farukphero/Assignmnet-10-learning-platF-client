import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './shared/Home/Home';
import Blog from './shared/Blog/Blog';
import FAQ from './shared/FAQ/FAQ';
import Theme from './shared/Theme/Theme';
import Courses from './shared/Courses/Courses';
import Header from './shared/Header/Header';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/courses",
          element: <Courses></Courses>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>,
        },
        {
          path: "/theme",
          element: <Theme></Theme>,
        },
      ],
    },
  ]);
  return (
    <div className="text-white relative">
       <RouterProvider router={router} />
       <Header></Header>
    </div>
  );
}

export default App;
