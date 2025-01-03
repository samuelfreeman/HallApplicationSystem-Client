import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { login } from "../api/student/thunk";
import { useNavigate } from "react-router-dom";
import { LoginInput, loginSchema } from "../validations/authValidation";
import toast, { Toaster } from "react-hot-toast";

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
        // Dispatch the login action and use toast.promise for success/error feedback
        const mypromise = dispatch(login(data))
        const result = await toast.promise(

            mypromise, // The promise returned by dispatch(login(data))
            {
                loading: 'Logging in...',
                success: <b>Logged in successfully!</b>,
                error: <b>Login failed. Please try again.</b>,


            },


        )
        if (result.meta.requestStatus === "fulfilled") {

            navigate("/"); // Redirect to the home page upon success
        } else {
            toast.error("Failed to log in. Please try again.");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form-container prose bg-white border-2 lg:border-black rounded-md grid grid-cols-1 gap-6 w-[410px] h-auto p-10">
                <h1 className="text-center pb-3 text-5xl font-sans">Login</h1>

                {error && <p className="error text-red-600">{error}</p>}

                <div className="block mt-4">
                    <label htmlFor="studentId" className="text-gray-700">StudentID:</label>
                    <input
                        id="studentId"
                        className="mt-1 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register("studentId")}
                        type="text"
                    />
                    {errors.studentId && <p className="text-red-600 text-sm">{errors.studentId.message}</p>}
                </div>

                <div className="block mt-4">
                    <label htmlFor="password" className="text-gray-700">Password:</label>
                    <input
                        id="password"
                        className="mt-1 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
                        {...register("password")}
                        type="password"
                    />
                    {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
                </div>

                <p>Do not have an account? <a className="underline underline-offset-1" href="/signup">SignUp</a></p>
                <p className="text-right underline"><a href="/forgot-password">Forgot password?</a></p>

                <button type="submit" disabled={loading} className="p-2 bg-[#740938] text-white rounded-md hover:bg-white hover:text-black border-2  lg:border-black mb-2">
                    {loading ? "Logging in..." : "Login"}
                </button>
            </form>

            <Toaster />    {/* This ensures toasts appear in your app */}
        </>
    );
};

export default LoginForm;
