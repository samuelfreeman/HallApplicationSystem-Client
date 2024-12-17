import React from "react";
import SignUpForm from "../components/SignupForm";

const SignupPage: React.FC = ()=>{

    return (
        <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
            
            <SignUpForm />
        </div>
    )
}



export default SignupPage;