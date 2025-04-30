import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


import { NavLink } from "react-router";
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

import { useSignupUser } from "@/Pages/auth/services/queries";

const SignUpForm: React.FC = () => {
    const { mutateAsync: CreateStudent, isLoading } = useSignupUser()

    const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia("(min-width: 1024px)").matches);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 1024px)");
        const handler = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);

        // Add the event listener
        mediaQuery.addEventListener("change", handler);

        // Cleanup on unmount
        return () => mediaQuery.removeEventListener("change", handler);
    }, []); // Check if large screen








    const form = useForm<SignUpInput>({
        resolver: zodResolver(signUpSchema),

        defaultValues: {
            department: "Computer Science",
        },

        mode: "onTouched"
    })
    async function onSubmit(values: SignUpInput) {
        try {
            await CreateStudent({ data: values })
            console.log(values)
        } catch (error) {
            console.error("Form submission error", error);
        } finally {
            form.reset();
        }


    }


    const { handleSubmit, control } = form;
    // Navigation handlers



    return (
        <>
            {isLargeScreen ? (
                <Form {...form}  >

                    <form onSubmit={handleSubmit(onSubmit)} className=" bg-[#740938] grid grid-cols-2 shadow-lg  text-white rounded-lg -mt-5 ">
                        <FormLabel className="flex  flex-col  items-center justify-center text-5xl ">
                            <img src="/fav-3078db09.png" className="w-56 h-50" alt="" />
                            <h1 className="pt-5 font-bold">Sign Up</h1></FormLabel>
                        <div className=" grid grid-cols-2  p-10 gap-7 gap-x-5  gap-y-1">


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
  render={({ field }) => (
    <FormItem>
      <FormLabel className="pt-4">Level:</FormLabel>
      <FormControl>
        <select
          {...field}
          onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
          className="w-full text-white p-2 border rounded-md bg-[#740938] border-white focus:ring focus:ring-white"
        >
          <option value="">Select Your Level</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={400}>400</option>
          <option value={500}>500</option>
          <option value={600}>600</option>
        </select>
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
                                            <select {...field} className="w-full text-white p-2 border rounded-md  bg-[#740938] border-white focus:ring focus:ring-white ">
                                                <option value="" >Select Your Department</option>
                                                <option>Faculty of Applied Sciences</option>
                                                <option>Engineering</option>
                                                <option>Business</option>
                                                <option>Science</option>
                                                <option>Arts</option>
                                            </select>
                                        </FormControl>
                                        <FormDescription className="text-gray-300 w-64 lg:w-72">
                                            Deparment name can be in full or short form
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <p className="block  ">Already have an account ? <NavLink className='underline underline-offset-1 ' to="/login">login</NavLink></p>
                            <Button type="submit" className="col-span-2 bg-white text-black hover:text-white">
                                {isLoading ? "Signing up..." : "Signup"}
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
  render={({ field }) => (
    <FormItem>
      <FormLabel className="pt-4">Level:</FormLabel>
      <FormControl>
        <select
          {...field}
          onChange={(e) => field.onChange(Number(e.target.value))} // Convert to number
          className="w-full text-white p-2 border rounded-md bg-[#740938] border-white focus:ring focus:ring-white"
        >
          <option value="">Select Your Level</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={400}>400</option>
          <option value={500}>500</option>
          <option value={600}>600</option>
        </select>
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
                                            <select {...field} className="w-full text-white p-2 border rounded-md  bg-[#740938] border-white focus:ring focus:ring-white ">
                                                <option value="" >Select Your Department</option>
                                                <option>Faculty of Applied Sciences</option>
                                                <option>Engineering</option>
                                                <option>Business</option>
                                                <option>Science</option>
                                                <option>Arts</option>
                                            </select>
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
                                    disabled={isLoading}
                                    className="px-4 py-2 mt-6 w-full bg-white text-black rounded-md hover:bg-[#740938] hover:text-white border-2 "
                                >
                                    {isLoading ? "Signing up..." : "Submit"}
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
