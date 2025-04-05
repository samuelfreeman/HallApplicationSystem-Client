import React from "react";
import SignUpForm from "../../component/SignupForm";

const SignupPage: React.FC = () => {

    return (
        <div className='flex min-h-svh w-full items-center  bg-cover bg-center  justify-center p-3  md:p-10' style={{ backgroundImage: "url('/cutout.svg')"}}>

            <SignUpForm />
        </div>
    )
}



export default SignupPage;