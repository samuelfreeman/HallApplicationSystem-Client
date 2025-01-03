import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Schema = z.object({
    email: z.string().email("Must be a valid email")

})


type ForgotPasswordInputs = z.infer<typeof Schema>;

const ForgotPassword: React.FC = () => {


    const navigate = useNavigate()
    const {
        register, handleSubmit, formState: { errors }
    } = useForm<ForgotPasswordInputs>({ resolver: zodResolver(Schema) })

    const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data) => {
        try {
            const response = await axios.post('https://hallapplicationsystem.onrender.com/student/forgot-password', data)
            console.log(response.data.accepted[0])
            localStorage.setItem('email',response.data.accepted[0])

            alert("Email sent Successful")
            navigate("/verify-code")
        } catch (error) {
            console.error(error);
            alert("Failed to send email!");
        }
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} className='prose border-2  bg-white rounded-md grid grid-cols-1 gap-6  w-[410px] h-auto p-10'>

            <h1 className='text-center pb-3 text-2xl'>Verify Your Email </h1>

            <div className=' block '>

                <label htmlFor="email" className='text-gray-700'>Email:</label>
                <input id='email' type="email" className=" mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black form-input " {...register('email')} />
                {errors.email && <p className='-mb-5 text-red-600 text-sm'>{errors.email.message}</p>}


            </div>



            <p>Back to login? <a className='underline underline-offset-1' href="/login">Login</a></p>


            <button type="submit" className='p-2  bg-[#740938] text-white rounded-md hover:bg-white hover:text-black  border-2 hover:border-black mb-2 '>Verify</button>
        </form>
    )
}

export default ForgotPassword;
