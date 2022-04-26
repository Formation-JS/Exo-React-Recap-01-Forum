import AboutPage from '../pages/about';
import Error404 from '../pages/errors/404';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';
import SubjectPage from '../pages/subjects';
import SubjectCreatePage from '../pages/subjects/create';
import SubjectShowPage from '../pages/subjects/show';


export const appRoute = [
    { path: '', element: <HomePage /> },
    {
        path: 'subjects',
        children: [
            {
                index: true, element: <SubjectPage />
            },
            {
                path: ':id', element: <SubjectShowPage />
            },
            {
                path: 'create', element: <SubjectCreatePage />
            }
        ]
    },
    {
        path: 'about', element: <AboutPage />
    },
    {
        path: 'register', element: <RegisterPage />
    },
    {
        path: 'login', element: <LoginPage />
    },
    { path: '*', element: <Error404 /> },
];


