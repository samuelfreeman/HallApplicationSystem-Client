import { LoginForm } from '@/component/LoginForm';
import React from 'react';



const LoginPage: React.FC = () => {


    return (
        <div className='flex min-h-svh w-full items-center  bg-cover bg-center  justify-center p-3  md:p-10' style={{ backgroundImage: "url('/cutout.svg')"}}>

            <LoginForm />

        </div>
    );
}


export default LoginPage;
