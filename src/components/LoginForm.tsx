import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const loginSchema = z.object({
    studentId: z.string().min(10, "Student's Id must be 10 characters long"),
    password: z.string().min(8, "Password must be atleast 8 characters long"),
})


type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginForm: React.FC = () => {


    const navigate = useNavigate()
    const {
        register, handleSubmit, formState: { errors }
    } = useForm<LoginFormInputs>({ resolver: zodResolver(loginSchema) })

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/auth/student/login', data)
            console.log(response.data)
            localStorage.setItem('token', response.data)
            alert("Login Successful")
            navigate("/")
        } catch (error) {
            console.error(error);
            alert("Login failed");
        }
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='prose border-2 border-black  rounded-md grid grid-cols-1 gap-6  w-[410px] h-auto p-10'>

            <h1 className='text-center pb-3 text-2xl'>Login Form</h1>

            <div className=' block '>

                <label htmlFor="studentId" className='text-gray-700'>StudentID:</label>
                <input id='studentId' type="text" className=" mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black form-input " {...register('studentId')} />
                {errors.studentId && <p className='-mb-5 text-red-600 text-sm'>{errors.studentId.message}</p>}


            </div>


            <div className='block mt-4'>

                <label htmlFor="password" className='text-gray-700'>Password:</label>
                <input id='password' className='mt-1 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black   ' {...register('password')} type="password" />
                {errors.password && <p className='-mb-5  text-red-600 text-sm'>{errors.password.message}</p>}
            </div>
            <p>Do not have an account ? <a className='underline underline-offset-1' href="/signup">SignUp</a></p>
            <p className='text-right underline'><a href="/forgot-password">Forgot password?</a></p>

            <button type="submit" className='p-2  bg-black text-white rounded-md hover:bg-white hover:text-black  border-2 border-black mb-2 '>Login</button>
        </form>
    )
}

export default LoginForm;
