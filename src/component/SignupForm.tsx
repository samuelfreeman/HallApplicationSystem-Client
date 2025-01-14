import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../state/hooks";
import { signUp } from "../api/student/thunk";
import { NavLink, useNavigate } from "react-router";
import { SignUpInput, signUpSchema } from "../validations/authValidation";
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
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useToast } from "@/hooks/use-toast"


const SignUpForm: React.FC = () => {

    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 1024px)").matches);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);

        // Add the event listener
        mediaQuery.addEventListener("change", handler);

        // Cleanup on unmount
        return () => mediaQuery.removeEventListener("change", handler);
    }, []); // Check if large screen

    const dispatch = useAppDispatch();
    const { toast } = useToast()
    const navigate = useNavigate();
    const { loading, error } = useAppSelector((state) => state.student);




    const form = useForm<SignUpInput>({
        resolver: zodResolver(signUpSchema),

        mode: "onTouched"
    })
    async function onSubmit(values: SignUpInput) {
        const result = await dispatch(signUp(values));
        console.log(result)
        if (signUp.fulfilled.match(result)) {
            toast({
                description: "Student sucessfully signed up",
                duration: 2000
            })
            navigate("/");
        } else {
            console.log(error)
            toast({
                variant: "destructive",
                description: error,
            })
        }
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }

    // const onSubmit: SubmitHandler<SignUpInput> = async (data) => {
    //     const result = await dispatch(signUp(data));
    //     console.log(result)
    //     if (signUp.fulfilled.match(result)) {

    //         navigate("/");
    //     }
    // };
    const { handleSubmit, control } = form;
    // Navigation handlers



    return (
        <>
            {isLargeScreen ? (
                <Form {...form}  >

                    <form onSubmit={handleSubmit(onSubmit)} className=" bg-[#740938] grid grid-cols-2 shadow-lg text-white rounded-lg m-5   ">
                        <FormLabel className="flex  flex-col  items-center justify-center text-5xl ">
                            <img src="/fav-3078db09.png" className="w-56 h-50" alt="" />
                            <h1 className="pt-5 font-bold">Sign Up</h1></FormLabel>
                        <div className=" grid grid-cols-2  p-10 gap-7 gap-x-10 ">


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
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter a your fullname" {...field} />
                                        </FormControl>
                                        <FormDescription className="text-gray-300">
                                            This is your public display name.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your Valid Email" {...field} />
                                        </FormControl>
                                        <FormDescription className="w-72 text-gray-300">
                                            Make sure your email is a valid email (eg:test@gmail.com)
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
                                        <FormDescription className="w-72 text-gray-300">
                                            Make sure Your password is Strong and Contains At least 6 Characters(eg:Pass123@)
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={control}
                                name="telephone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>PhoneNumber:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your valid Tel" {...field} type="tel" />
                                        </FormControl>
                                        <FormDescription className="text-gray-300">
                                            (eg:0512345678)
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem className="space-y-3">
                                        <FormLabel>Gender</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                defaultValue={field.value}
                                                className="flex flex-col space-y-1"
                                            >
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="male" className="bg-white" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Male
                                                    </FormLabel>
                                                </FormItem>
                                                <FormItem className="flex items-center space-x-3 space-y-0">
                                                    <FormControl>
                                                        <RadioGroupItem value="female" className="bg-white" />
                                                    </FormControl>
                                                    <FormLabel className="font-normal">
                                                        Female
                                                    </FormLabel>
                                                </FormItem>

                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Controller
                                control={control}
                                name="level"

                                render={({ field: { value, onChange } }) => (
                                    <FormItem>
                                        <FormLabel>Level:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your level" type="number"
                                                value={value}
                                                onChange={(e) => onChange(Number(e.target.value))}
                                            />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={control}
                                name="department"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Department:</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Enter your department name " {...field} type="text" />
                                        </FormControl>
                                        <FormDescription className="text-gray-300">
                                            Deparment name can be in full or short form
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="col-span-2 bg-white text-black hover:text-white">
                                {loading ? "Signing up..." : "Signup"}
                            </Button>
                        </div>
                    </form>
                </Form>



            ) : (




                <Form {...form}  >
                    <form onSubmit={handleSubmit(onSubmit)} className=" bg-[#740938]  shadow-lg text-white rounded-lg m-5   ">
                        <FormLabel className="flex  flex-col  items-center justify-center text-5xl ">
                            <img src="/fav-3078db09.png" className="w-40 h-32" alt="" />
                            <h1 className="pt-5 font-bold">Sign Up</h1></FormLabel>
                        <div className="   py-10 px-5 gap-7 gap-x-10 ">



                            
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
                                    name="fullName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter a your fullname" {...field} />
                                            </FormControl>
                                            <FormDescription className="text-gray-300">
                                                This is your public display name.
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your Valid Email" {...field} />
                                            </FormControl>
                                            <FormDescription className="lg:w-72 text-gray-300">
                                                Make sure your email is a valid email (eg:test@gmail.com)
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





                                {/* Telephone */}

                                <FormField
                                    control={control}
                                    name="telephone"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>PhoneNumber:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your valid Tel" {...field} type="tel" />
                                            </FormControl>
                                            <FormDescription className="text-gray-300">
                                                (eg:0512345678)
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* level */}


                                {/* Gender */}

                                <FormField
                                    control={control}
                                    name="gender"
                                    render={({ field }) => (
                                        <FormItem className="space-y-3">
                                            <FormLabel>Gender</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                    className="flex   space-y-1 "
                                                >
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="male" className="bg-white" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Male
                                                        </FormLabel>
                                                    </FormItem>
                                                    <FormItem className="flex items-center space-x-3 space-y-0">
                                                        <FormControl>
                                                            <RadioGroupItem value="female" className="bg-white" />
                                                        </FormControl>
                                                        <FormLabel className="font-normal">
                                                            Female
                                                        </FormLabel>
                                                    </FormItem>

                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                {/* level */}
                                <Controller
                                    control={control}
                                    name="level"

                                    render={({ field: { value, onChange } }) => (
                                        <FormItem className="pt-4">
                                            <FormLabel>Level:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your level" type="number"
                                                    value={value}
                                                    onChange={(e) => onChange(Number(e.target.value))}
                                                />
                                            </FormControl>

                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={control}
                                    name="department"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Department:</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Enter your department name " {...field} type="text" />
                                            </FormControl>
                                            <FormDescription className="text-gray-300 w-64 lg:w-72">
                                                Deparment name can be in full or short form
                                            </FormDescription>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <p className="block  ">Already have an account ? <NavLink className='underline underline-offset-1 ' to="/login">login</NavLink></p>
                                <div className="flex justify-between">


                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="px-4 py-2 mt-6 w-full bg-white text-black rounded-md hover:bg-[#740938] hover:text-white border-2 "
                                    >
                                        {loading ? "Signing up..." : "Submit"}
                                    </Button>
                                </div>
                            


                        </div>

                    </form>

                </Form>

            )}

            {/* and this to hide for large screens */}





        </>
    )
}

export default SignUpForm;
