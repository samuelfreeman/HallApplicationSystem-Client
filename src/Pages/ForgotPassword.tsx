import React from 'react';
import ForgotPassword from '../component/ForgotPassword';


const ForgetPassword: React.FC = () => {


    return (
        <div className='flex min-h-svh w-full items-center justify-centern bg-cover bg-center p-6 md:p-10' style={{ backgroundImage: "url('/cutout.svg')"}}>



            <ForgotPassword />

        </div>
    );
}


export default ForgetPassword;
