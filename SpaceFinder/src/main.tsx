import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProfileType from './screens/Home/ProfileType';
import SignInAdm from './screens/Home/SignIn/signInAdm';
import SignInStudent from './screens/Home/SignIn/signInStudent';
import SignInTeacher from './screens/Home/SignIn/signInTeacher';
import Classroom from './screens/Adm/Classrooms';
import Login from './screens/Home/Login';
/*
import RecPassword from './screens/Home/RecPassword/index';
import CodPassword from './screens/Home/RecPassword/codPassword';
import NewPassword from './screens/Home/RecPassword/newPassword';*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfileType/>,
  },

  {
    path: "/signInAdm",
    element: <SignInAdm/>,
  },
  {
    path: "/signInStudent",
    element: <SignInStudent/>
  },
  {
    path: "/signInTeacher",
    element: <SignInTeacher/>
  },

  {
    path: "/classroom",
    element: <Classroom/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  /*
  {
    path: "/recPassword",
    element: <RecPassword/>
  },
  {
    path: '/codPassword',
    element: <CodPassword/>
  },
  {
    path: '/newPassword',
    element: <NewPassword/>
  }*/
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
