
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { login } from "../api/student/thunk";
import { NavLink, useNavigate } from "react-router";
import { LoginInput, loginSchema } from "../validations/authValidation";
import { useToast } from "@/hooks/use-toast"




import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useEffect, useState } from "react";



export function LoginForm() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 1024px)").matches);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);

    // Add the event listener
    mediaQuery.addEventListener("change", handler);

    // Cleanup on unmount
    return () => mediaQuery.removeEventListener("change", handler);
  }, [isLargeScreen]); // Check if large screen
  const { toast } = useToast()
  const dispatch = useAppDispatch()
  const navigate = useNavigate();
  const { loading, error } = useAppSelector((state) => state.student);

  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      studentId: "",
      password: ""
    },
  })
  const { handleSubmit, control } = form;
  // 2. Define a submit handler.
  async function onSubmit(data: LoginInput) {
    const result = await dispatch(login(data))
    console.log(result)
    if (login.fulfilled.match(result)) {
      toast({
        description: "Student sucessfully signed up",
        duration: 2000
      })
      navigate("/");
    } else {
      console.log(error)
      toast({
        variant: "destructive",
        title: "Failed to Login ",

        description: error,
      })
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(data)
  }

  return (
    <>
      {isLargeScreen ? (<Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className=" bg-[#740938] grid grid-cols-2  shadow-lg text-white rounded-lg m-5 gap-x-36   ">
          <FormLabel className="flex  flex-col  items-center justify-center text-5xl ">
            <img src="/fav-3078db09.png" className="w-56 h-50" alt="" />
            <h1 className="pt-5 font-bold">Sign Up</h1></FormLabel>
          <div className=" grid grid-cols-1  p-10 gap-7 gap-x-10 ">


            <FormField
              control={control}
              name="studentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>StudentID:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a your valid studentID"  {...field} />
                  </FormControl>
                  <FormDescription className="w-72 text-gray-300">
                    Make sure your ID is a valid ID(eg:5221040000)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password:</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter a your Password" {...field} />
                  </FormControl>
                  <FormDescription className="w-64 lg:w-72 text-gray-300">
                    Make sure Your password is Strong and Contains At least 6 Characters(eg:Pass123@)
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p>Do not have an account? <NavLink className="underline underline-offset-1" to="/signup">SignUp</NavLink></p>
            <p className="text-right underline"><NavLink to="/forgot-password">Forgot password?</NavLink></p>

            <Button type="submit" disabled={loading} className="p-2 w-full bg-white text-black rounded-md hover:bg-[#740938] hover:text-white border-2  lg:border-black mb-2">
              {loading ? "Logging in..." : "Login"}
            </Button>


          </div>
        </form>
      </Form>) : (
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className=" bg-[#740938] min-w-full  shadow-lg text-white rounded-lg  m-5 ">
            <FormLabel className="flex  flex-col  items-center justify-center text-5xl ">
              <img src="/fav-3078db09.png" className="w-40 h-32" alt="" />
              <h1 className="pt-5 font-bold">Login</h1></FormLabel>
            <div className="py-10 px-5 gap-7 gap-x-20 flex  flex-col ">



              <FormField
                control={control}
                name="studentId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>StudentID:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a your valid studentID"  {...field} />
                    </FormControl>
                    <FormDescription className="lg:w-72 text-gray-300">
                      Make sure your ID is a valid ID(eg:5221040000)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password:</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a your Password" {...field} />
                    </FormControl>
                    <FormDescription className="w-64 lg:w-72 text-gray-300">
                      Make sure Your password is Strong and Contains At least 6 Characters(eg:Pass123@)
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p>Do not have an account? <NavLink className="underline underline-offset-1" to="/signup">SignUp</NavLink></p>
              <p className="text-right underline"><NavLink to="/forgot-password">Forgot password?</NavLink></p>

              <Button type="submit" disabled={loading} className="p-2 w-full bg-white text-black rounded-md hover:bg-[#740938] hover:text-white border-2  lg:border-black mb-2">
                {loading ? "Logging in..." : "Login"}
              </Button>


            </div>
          </form>
        </Form>)}
    </>

  )
}

// const LoginForm: React.FC = () => {
//     const dispatch = useAppDispatch();
//     const navigate = useNavigate();
//     const { loading, error } = useAppSelector((state) => state.student);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

//     const onSubmit: SubmitHandler<LoginInput> = async (data) => {
//         // Dispatch the login action and use toast.promise for success/error feedback
//         const mypromise = dispatch(login(data))
//         const result = await toast.promise(

//             mypromise, // The promise returned by dispatch(login(data))
//             {
//                 loading: 'Logging in...',
//                 success: <b>Logged in successfully!</b>,
//                 error: <b>Login failed. Please try again.</b>,


//             },


//         )
//         if (result.meta.requestStatus === "fulfilled") {

//             navigate("/"); // Redirect to the home page upon success
//         } else {
//             toast.error("Failed to log in. Please try again.");
//         }
//     };

//     return (
//         <>
//          <Form {...form}  >
//             <form onSubmit={handleSubmit(onSubmit)} className="form-container prose bg-white border-2 lg:border-black rounded-md grid grid-cols-1 gap-6 w-[410px] h-auto p-10">
//                 <h1 className="text-center pb-3 text-5xl font-sans">Login</h1>

//                 {error && <p className="error text-red-600">{error}</p>}

//                 <div className="block mt-4">
//                     <label htmlFor="studentId" className="text-gray-700">StudentID:</label>
//                     <input
//                         id="studentId"
//                         className="mt-1 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
//                         {...register("studentId")}
//                         type="text"
//                     />
//                     {errors.studentId && <p className="text-red-600 text-sm">{errors.studentId.message}</p>}
//                 </div>

//                 <div className="block mt-4">
//                     <label htmlFor="password" className="text-gray-700">Password:</label>
//                     <input
//                         id="password"
//                         className="mt-1 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black"
//                         {...register("password")}
//                         type="password"
//                     />
//                     {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
//                 </div>

//                

//             <Toaster />    {/* This ensures toasts appear in your app */}
//             </Form>
//         </>
//     );
// };

// export default LoginForm;
