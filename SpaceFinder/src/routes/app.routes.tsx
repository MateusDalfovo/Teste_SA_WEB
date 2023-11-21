import { Routes, Route } from 'react-router-dom';

import SignInAdm from '../screens/Home/SignIn/signInAdm.tsx';
import SignInStudent from '../screens/Home/SignIn/signInStudent.tsx';
import SignInTeacher from '../screens/Home/SignIn/signInTeacher.tsx'; 
import ProfileType from '../screens/Home/ProfileType/index.tsx';
import Classrooms from '../screens/Adm/Classrooms/index.tsx';
import Login from '../screens/Home/Login';

/*
import RecPassword from '../screens/Home/RecPassword/index';
import CodPassword from '../screens/Home/RecPassword/codPassword';
import NewPassword from '../screens/Home/RecPassword/newPassword';
*/

export function AppRoutes(){
    return(
        <Routes>
            <Route path='/' element={<ProfileType/>} />
            <Route path='/SignInAdm' element={<SignInAdm/>} />
            <Route path='/SignInStudent' element={<SignInStudent/>} />
            <Route path='/SignInTeacher' element={<SignInTeacher/>} />
            <Route path='/Classrooms' element={<Classrooms/>} />
            <Route path='/Login' element={<Login/>} />
            {/* 
            <Route path='/RecPassword' element={<RecPassword/>} />
            <Route path='/CodPassword' element={<CodPassword/>} />
            <Route path='/NewPassword' element={<NewPassword/>} />*/}
        </Routes>
    )
}



