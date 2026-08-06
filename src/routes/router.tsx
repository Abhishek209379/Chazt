import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../components/layout/HomeLayout';
import Home from '../pages/Home';
import { ROUTES } from '../constants/routes';


const router = createBrowserRouter([ 
    { 
        path: '/',
        element: <HomeLayout />,
        children: [
            { path: ROUTES.HOME, element: <Home /> },
        ]
    },
    // { 
    //     path: '/about',
    //     element: <About />
    // },
    // { 
    //     path: '*',
    //     element: <NotFound />
    // },
]);

export default router