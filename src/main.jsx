import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store.js';
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute.jsx';
import Loading from './components/Loading.jsx';
import ContextDataProvider from './components/ContextData.jsx';
import UserDetails from './components/UserDetails.jsx';
import ErrorPage from './components/ErrorPage.jsx';

const LoginPage = lazy(() => import('./components/auth/LoginPage.jsx'));
const Home = lazy(() => import('./pages/Home.jsx'));
const Users = lazy(() => import('./pages/Users.jsx'));
const Products = lazy(() => import('./pages/Products.jsx'));
const Posts = lazy(() => import('./pages/Posts.jsx'));
const Recipes = lazy(() => import('./pages/Recipes.jsx'));
const Dashboard = lazy(() => import('./components/dashboard/Dashboard.jsx'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/dashboard'} replace={true} />,
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/dashboard',
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/home',
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/users',
        element: (
          <Suspense fallback={<Loading />}>
            <Users />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/users/:id',
        element: (
          <Suspense fallback={<Loading />}>
            <UserDetails />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/products',
        element: (
          <Suspense fallback={<Loading />}>
            <Products />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/posts',
        element: (
          <Suspense fallback={<Loading />}>
            <Posts />
          </Suspense>
        ),
      },
      {
        path: '/dashboard/recipes',
        element: (
          <Suspense fallback={<Loading />}>
            <Recipes />
          </Suspense>
        ),
      },
    ],
  },

  {
    path: 'login',
    element: (
      <Suspense fallback={<Loading />}>
        <LoginPage />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <ContextDataProvider>
        <RouterProvider router={router} />
      </ContextDataProvider>
    </Provider>
  </StrictMode>
);
