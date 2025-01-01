import React from "react";
import { useForm, SubmitHandler, } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { signUp } from "../api/student/thunk";
import { useNavigate } from "react-router-dom";
import { SignUpInput, signUpSchema } from "../validations/authValidation";

const SignUpForm: React.FC = () => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { loading, error } = useAppSelector((state) => state.student)



    const {
        register, handleSubmit, formState: { errors }
    } = useForm<SignUpInput>({ resolver: zodResolver(signUpSchema) })



    const onSubmit: SubmitHandler<SignUpInput> = async (data) => {
        const result = await dispatch(signUp(data))
        if (signUp.fulfilled.match(result)) {

            navigate("/")
        }
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='prose border-2 border-black rounded-md w-[700px] p-10 '>

            <h1 className='text-center pb-4 -pt-6 text-2xl'>Sign Up Form</h1>
            {error && <p className="error">{error}</p>}
            <div className="grid  gap-6 gap-x-10">
                {/* Student ID */}
                <div className='block'>
                    <label htmlFor="studentId" className='text-gray-700'>Student ID:</label>
                    <input
                        id="studentId"
                        type="number"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register('studentId')}
                    />
                    {errors.studentId && <p className='text-red-600 text-sm'>{errors.studentId.message}</p>}
                </div>

                {/* Full Name */}
                <div className='block'>
                    <label htmlFor="name" className='text-gray-700'>Full Name:</label>
                    <input
                        id="name"
                        type="text"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register('fullName')}
                    />
                    {errors.fullName && <p className='text-red-600 text-sm'>{errors.fullName.message}</p>}
                </div>

                {/* Email */}
                <div className='block'>
                    <label htmlFor="email" className='text-gray-700'>Email:</label>
                    <input
                        id="email"
                        type="email"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register('email')}
                    />
                    {errors.email && <p className='text-red-600 text-sm'>{errors.email.message}</p>}
                </div>

                {/* Telephone */}
                <div className='block'>
                    <label htmlFor="telephone" className='text-gray-700'>Telephone:</label>
                    <input
                        id="telephone"
                        type="text"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register('telephone')}
                    />
                    {errors.telephone && <p className='text-red-600 text-sm'>{errors.telephone.message}</p>}
                </div>

                {/* Password */}
                <div className='block'>
                    <label htmlFor="password" className='text-gray-700'>Password:</label>
                    <input
                        id="password"
                        type="password"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register('password')}
                    />
                    {errors.password && <p className='text-red-600 text-sm'>{errors.password.message}</p>}
                </div>

                {/* Gender */}
                <div className='block'>
                    <label htmlFor="gender" className='text-gray-700'>Gender:</label>
                    <input
                        id="gender"
                        type="text"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register('gender')}
                    />
                    {errors.gender && <p className='text-red-600 text-sm'>{errors.gender.message}</p>}
                </div>

                {/* Level */}
                <div className='block'>
                    <label htmlFor="level" className='text-gray-700'>Level:</label>
                    <input
                        id="level"
                        type="number"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register('level', { valueAsNumber: true })}
                    />
                    {errors.level && <p className='text-red-600 text-sm'>{errors.level.message}</p>}
                </div>

                {/* Department */}
                <div className='block'>
                    <label htmlFor="department" className='text-gray-700'>Department:</label>
                    <input
                        id="department"
                        type="text"
                        className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register('department')}
                    />
                    {errors.department && <p className='text-red-600 text-sm'>{errors.department.message}</p>}
                </div>

                {/* Disabled Checkbox */}
                <div className='block lg:col-span-2'>
                    <input
                        id="disabled"
                        type="checkbox"
                        className="mr-2"
                        {...register('disabled')}
                    />
                    <label htmlFor="disabled" className='text-gray-700'>Disabled</label>
                </div>
            </div>

            <p className="block  ">Already have an account ? <a className='underline underline-offset-1' href="/login">login</a></p>
            {/* Submit Button */}
            <button
                disabled={loading}
                type="submit"
                className='p-2 mt-6 bg-black text-white rounded-md w-full hover:bg-white hover:text-black border-2 border-black'
            >
                {loading ? "Signing up ..." : "SignUp"}
            </button>
        </form>

    )
}

export default SignUpForm;