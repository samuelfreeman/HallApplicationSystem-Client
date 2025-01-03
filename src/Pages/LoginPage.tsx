import React from 'react';
import LoginForm from '../component/LoginForm';


const LoginPage: React.FC = () => {


    return (
        <div className='flex min-h-svh w-full items-center bg-cover  justify-center p-6 md:p-10 'style={{ backgroundImage: "url('/cutout.svg')"}}>




            <LoginForm />

        </div>
    );
}


export default LoginPage;
