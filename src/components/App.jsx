import React, { lazy } from 'react';
// import { useDispatch} from 'react-redux';
// import { fetchAll } from 'redux/contacts/requestAPI';
// import { selectIsLoading, selectError } from 'redux/contacts/contactsSlise';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
// import { fetchCurrentUser } from 'redux/authorization/requestAPI';
// import {PrivateRoute} from './PrivateRouter/PrivateRouter';
// import { PublicRoute } from './PublicRouter/PublicRouter';
// import { useAuth } from 'hooks';

const PageNotFound = lazy(() => import('../pages/PageNotFound/PageNotFound'));
const Main = lazy(() => import('../pages/main'));
const Charity = lazy(() => import('../pages/charity'));
const Coworking = lazy(() => import('../pages/coworking'));

const App = () => {
  return (
    <Routes>
      <Route path="/" exact element={<SharedLayout />}>
        <Route index element={<Main />} />
        <Route path="charity" element={<Charity />} />
        <Route path="coworking" element={<Coworking />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};
export default App;
