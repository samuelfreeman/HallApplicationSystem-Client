import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Define validation schema using Zod
const Schema = z
  .object({
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Password must be at least 6 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Passwords don't match",
  });

type ResetPasswordInputs = z.infer<typeof Schema>;

const Resetpass: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordInputs>({ resolver: zodResolver(Schema) });

  const onSubmit: SubmitHandler<ResetPasswordInputs> = async (data) => {
    try {
      const email = localStorage.getItem('email'); // Retrieve the email from localStorage
      if (!email) {
        alert('No email found. Please verify your email first.');
        navigate('/forgot-password');
        return;
      }

      const response = await axios.post('http://localhost:3000/student/reset-password', {
        email,
        password: data.password,
      });
      console.log(response.data);
      localStorage.removeItem('email'); // Remove the email from localStorage
      alert('Password reset successful. You can now log in.');
      navigate('/login'); // Redirect to login page
    } catch (error) {
      console.error(error);
      alert('Failed to reset password.');
    }

  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="prose border-2 border-black rounded-md grid grid-cols-1 gap-6 w-[410px] h-auto p-10"
    >
      <h1 className="text-center pb-3 text-2xl">Reset Your Password</h1>

      <div className="block">
        <label htmlFor="password" className="text-gray-700">
          New Password:
        </label>
        <input
          id="password"
          type="password"
          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black form-input"
          {...register('password')}
        />
        {errors.password && <p className="-mb-5 text-red-600 text-sm">{errors.password.message}</p>}
      </div>

      <div className="block">
        <label htmlFor="confirmPassword" className="text-gray-700">
          Confirm Password:
        </label>
        <input
          id="confirmPassword"
          type="password"
          className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black form-input"
          {...register('confirmPassword')}
        />
        {errors.confirmPassword && (
          <p className="-mb-5 text-red-600 text-sm">{errors.confirmPassword.message}</p>
        )}
      </div>

      <p>
        Back to login?{' '}
        <a className="underline underline-offset-1" href="/login">
          Login
        </a>
      </p>

      <button
        type="submit"
        className="p-2 bg-black text-white rounded-md hover:bg-white hover:text-black border-2 border-black mb-2"
      >
        Reset Password
      </button>
    </form>
  );
};

export default Resetpass;
