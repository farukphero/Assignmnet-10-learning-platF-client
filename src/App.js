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
          element: <Blog></Blog>,
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
      loader: ({params})=> fetch(`http://localhost:5000/coursedetails/${params.courseId}`)
    },
    {
      path:"premiumpage/:id",
      element:<PrivateRoute><PremiumPage></PremiumPage></PrivateRoute>,
    }
  ]);
  return (
    <div className="text-white relative">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
