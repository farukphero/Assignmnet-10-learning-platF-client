import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Blog from './shared/Blog/Blog';
import FAQ from './shared/FAQ/FAQ';
import Courses from './shared/Courses/Courses';
import Header from './shared/Header/Header';
import Login from './shared/Login/Login';
import Register from './shared/Register/Register';
import CourseDetails from './shared/CourseDetails/CourseDetails';
import PrivateRoute from './routes/PrivateRoute';
import PremiumPage from './pages/PremiumPage/PremiumPage';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Header></Header>,
        },
        {
          path: "/courses",
          element: <Courses></Courses> ,
        },
        {
          path: "/blog",
        element:<PrivateRoute> <Blog></Blog></PrivateRoute>,
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        
      ],
    },
    {
      path: "/coursedetails/:courseId",
      element: <CourseDetails></CourseDetails>,
      loader: ({params})=> fetch(`https://learning-platform-server-wine.vercel.app/coursedetails/${params.courseId}`)
    },
    {
      path:"premiumpage/:courseId",
      element:<PrivateRoute><PremiumPage></PremiumPage></PrivateRoute>,
      loader: ({params})=> fetch(`https://learning-platform-server-wine.vercel.app/coursedetails/${params.courseId}`)
    },
    {
      path: "*",
      element: <h1 className='text-2xl text-center text-blue-500'><b>404 Page Not Found</b> </h1>,
    },
  ]);
  return (
    <div className="text-white relative">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
