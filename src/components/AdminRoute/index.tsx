import React from 'react'

import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'
import { selectIsAuth } from '../../redux/slices/auth';

export default function AdminRoute(props: any) : React.ReactElement | null {

  const isAdmin = useSelector(selectIsAuth);

    if (!isAdmin) {
        return  < Navigate to="/profile"/>   
    }

  return (
    <Outlet />
  )
}
