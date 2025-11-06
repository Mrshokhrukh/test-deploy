import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './components/protectedRoute/ProtectedRoute.jsx';
import LoginPage from './components/auth/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
  },
  {
    path: 'login',
    element: <LoginPage />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
