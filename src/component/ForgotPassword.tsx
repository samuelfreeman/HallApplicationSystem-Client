import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Schema = z.object({
    email: z.string().email("Must be a valid email")

})


type ForgotPasswordInputs = z.infer<typeof Schema>;

const ForgotPassword: React.FC = () => {

    const { toast } = useToast()
    const navigate = useNavigate()
    const {
        register, handleSubmit, formState: { errors }
    } = useForm<ForgotPasswordInputs>({ resolver: zodResolver(Schema) })

    const onSubmit: SubmitHandler<ForgotPasswordInputs> = async (data) => {
        try {
            const response = await axios.post('https://hallapplicationsystem.onrender.com/student/forgot-password', data)
            if (response.data.accepted) {
                console.log(response.data.accepted[0])

                localStorage.setItem('email', response.data.accepted[0])
                toast({
                    title: 'Email sent successfully!',
                    description: 'Check your inbox for the verification code.',

                });
                navigate("/verify-code")
            }


        } catch (error) {
            console.error(error);
            toast({
                title: 'Error!',
                description: 'An error occurred while sending the email. Please try again later.',
                variant: "destructive"
            });
        }
    }



    return (

        <form onSubmit={handleSubmit(onSubmit)} className='prose border-2  bg-[#740938]  rounded-md grid grid-cols-1 gap-6  lg:w-[500px]   w-full h-auto p-10 text-white'>

            <h1 className='text-center pb-3  text-2xl'>Verify Your Email </h1>

            <div className=' block '>

                <label htmlFor="email" className='text-gray-100'>Email:</label>
                <input id='email' type="email" className=" mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 text-black focus:ring-0 focus:border-black form-input " {...register('email')} />
                {errors.email && <p className='-mb-5 text-red-600 text-sm'>{errors.email.message}</p>}


            </div>



            <p>Back to login? <NavLink className='underline underline-offset-1' to="/login">Login</NavLink></p>


            <Button type="submit" className='p-2  bg-white text-black rounded-md hover:bg-[#740938] hover:text-white  border-2 hover:border-black mb-2 '>Verify</Button>
        </form>
    )
}

export default ForgotPassword;
