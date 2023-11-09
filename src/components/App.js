import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/authSlice';
import { PrivateRoute } from './PrivateRoute';
import { RestictedRoute } from './RestictedRoute';



const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LoginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk())
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/register' element={
          <RestictedRoute>
            <RegisterPage />
          </RestictedRoute>} />
        <Route path='/login' element={
          <RestictedRoute>
            <LoginPage />
          </RestictedRoute>} />
        <Route path='/contacts' element={
          <PrivateRoute>
            <ContactsPage />
          </PrivateRoute>} />
      </Route>

    </Routes>
    
  )
};

