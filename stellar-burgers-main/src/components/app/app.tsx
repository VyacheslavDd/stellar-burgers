import { ConstructorPage, Feed, ForgotPassword, Login, NotFound404, Profile, ProfileOrders, Register, ResetPassword } from '@pages';
import '../../index.css';
import styles from './app.module.css';

import { AppHeader, IngredientDetails, Modal, OrderInfo } from '@components';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ProtectedRoute from '../protected-route/protected-route';

const App = () => {

  const location = useLocation();
  const backgroundLocation = location.state?.backgroundLocation;

  return (<div className={styles.app}>
    <AppHeader />
      <Routes location={backgroundLocation || location}>
        <Route path='/' element={<ConstructorPage />}/>
        <Route path='/ingredients/:id' element={<IngredientDetails/>}/>
        <Route path='/feed' element={<Feed />}/>
        <Route path='/feed/:number' element={<OrderInfo/>}/>
        <Route path='/profile/orders' element={<ProtectedRoute redirectToLogin><ProfileOrders /></ProtectedRoute>}/>
        <Route path='/prolife/orders/:number' element={<ProtectedRoute redirectToLogin><OrderInfo/></ProtectedRoute>}/>
        <Route path='/login' element={<ProtectedRoute><Login /></ProtectedRoute>}/>
        <Route path='/register' element={<ProtectedRoute><Register /></ProtectedRoute>}/> 
        <Route path='/forgot-password' element={<ProtectedRoute><ForgotPassword /></ProtectedRoute>}/>
        <Route path='/reset-password' element={<ProtectedRoute><ResetPassword /></ProtectedRoute>}/>
        <Route path='/profile' element={<ProtectedRoute redirectToLogin><Profile /></ProtectedRoute>}/>
        <Route path='*' element={<NotFound404/>}/>
      </Routes>

      {backgroundLocation &&
      <Routes>
        <Route path='/feed/:number' element={<Modal title='Детали заказа' onClose={() => {}}><OrderInfo/></Modal>}/>
        <Route path='/ingredients/:id' element={<Modal title='Детали ингредиента' onClose={() => {}}><IngredientDetails/></Modal>}/>
        <Route path='/prolife/orders/:number' element={<Modal title='Детали заказа' onClose={() => {}}><OrderInfo/></Modal>}/>
      </Routes>}
  </div>)
};

export default App;
