import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ProfileMenuUI } from '@ui';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../../src/services/thunks';
import { AppDispatch } from '../../../src/services/store';

export const ProfileMenu: FC = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const handleLogout = () => {
    dispatch(logoutUser());
  }

  return <ProfileMenuUI handleLogout={handleLogout} pathname={pathname} />;
};
