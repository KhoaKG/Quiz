import LayoutDefault from "../layout/LayoutDefault";
import Home from "../pages/Home";
import Register from "../pages/Register";
import PrivateRoute from '../components/PrivateRoute'
import Quiz from "../pages/Quiz"
import Result from "../pages/Result"
import Login from "../pages/Login";
import Topic from "../pages/Topic";
import Answers from "../pages/Answers";
import Logout from "../pages/Logout";
import Setting from "../pages/Setting";




export const routes = [
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                element: <PrivateRoute />,
                children: [
                    {
                        path: '/topic',
                        element: <Topic />
                    },
                    {
                        path: '/quiz/:id',
                        element: <Quiz />
                    },
                    {
                        path: '/result/:id',
                        element: <Result />
                    },
                    {
                        path: '/answers',
                        element: <Answers />
                    },
                    {
                        path: '/logout',
                        element: <Logout />
                    },
                ]
            },
        ]
    }
]

