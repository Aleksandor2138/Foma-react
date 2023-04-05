import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from './Loader/Loader';

import { Header } from './Header';
import { Footer } from './Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header/>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer/>
    </>
  );
};