


import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { login } from "../api/student/thunk";
import { useNavigate } from "react-router-dom";
import { LoginInput, loginSchema } from "../validations/authValidation";




const LoginForm: React.FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { loading, error } = useAppSelector((state) => state.student);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

    const onSubmit: SubmitHandler<LoginInput> = async (data) => {
        const result = await dispatch(login(data));
        if (login.fulfilled.match(result)) {
            navigate("/home");
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form-container prose border-2 border-black  rounded-md grid grid-cols-1 gap-6  w-[410px] h-auto p-10">
            <h1 className='text-center pb-3 text-2xl'>Login</h1>

            {error && <p className="error">{error}</p>}

            <div className='block mt-4'>

                <label htmlFor="studentId" className='text-gray-700'>StudentID:</label>
                <input id='studentId' className='mt-1 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black   ' {...register('studentId')} type="studentId" />
                {errors.studentId && <p className='-mb-5  text-red-600 text-sm'>{errors.studentId.message}</p>}
            </div> 

            <div className='block mt-4'>

                <label htmlFor="password" className='text-gray-700'>Password:</label>
                <input id='password' className='mt-1 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black   ' {...register('password')} type="password" />
                {errors.password && <p className='-mb-5  text-red-600 text-sm'>{errors.password.message}</p>}
            </div>
            <p>Do not have an account ? <a className='underline underline-offset-1' href="/signup">SignUp</a></p>
            <p className='text-right underline'><a href="/forgot-password">Forgot password?</a></p>

            <button type="submit" disabled={loading} className='p-2  bg-black text-white rounded-md hover:bg-white hover:text-black  border-2 border-black mb-2'>
                {loading ? "Logging in..." : "Login"}
            </button>
        </form>
    );
};

export default LoginForm;
