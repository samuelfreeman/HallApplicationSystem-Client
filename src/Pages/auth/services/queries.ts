import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import {
  studentAuth,
  studentLogin,
  studentSignUp,
  initializePaystack
} from "./api";
import { toast } from "@/hooks/use-toast";
import { useAuthTokenStore, useStudentName, useVerifyUser } from "@/store/use-auth-store";

export const usePayWithCard = () => {
  return useMutation({
    mutationFn: initializePaystack,
    onSuccess: (data) => {
      const { authorization_url } = data;

      if (authorization_url) {
        window.location.href = authorization_url;
        toast({
          title: "Redirecting to Paystack",
          description: "You are being redirected to complete your payment.",
          duration: 4000,
        });
      } else {
        toast({
          title: "Failed to initialize payment",
          description: "Paystack didn't return a valid URL.",
          variant: "destructive",
          duration: 4000,
        });
      }
    },
    onError: (error: any) => {
      console.error("Init error:", error);
      toast({
        title: "Payment initialization failed",
        description: "Unable to start the payment process.",
        variant: "destructive",
        duration: 4000,
      });
    },
  });
};
export const useLoginUser = () => {
  const navigate = useNavigate();
  const { setId } = useVerifyUser();
  const { setToken } = useAuthTokenStore()
  return useMutation({
    mutationFn: async ({ data }: { data: LoginStudent }) => {
      try {
        const response = await studentLogin(data);
        console.log(response)
        setId(response.result.id);
        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: (data) => {
      console.log("onsuccess Data :",data)
      const { token } = data
      setToken(token)
      toast({
        title: "Login successful",
        description: "Student sucessfully logged in!",
        duration: 5000,
      });
      navigate(`/reservation`);
    },
    onError: (error: Errors) => {
      console.log(error)
      const { message, status } = error.response.data;
      toast({
        title: status?.toString() || "400",
        description: message,
      });
    },
  });
};

export const useSignupUser = () => {
  const navigate = useNavigate();
  const { setToken } = useAuthTokenStore()
  const { setId } = useVerifyUser();
  return useMutation({
    mutationFn: async ({ data }: { data: CreateStudent }) => {
      try {
        const response = await studentSignUp(data);
        console.log(response)
        setId(response.result.id || "null");

        return response;
      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: (data) => {
      const { token } = data
      setToken(token)
      toast({
        title: "Signup successful",
        description: "Student sucessfully signed up!",
        duration: 5000,
      });
      navigate(`/reservation`);
    },
    onError: (error: Errors) => {
      const { message, status } = error.response.data;
console.log(error.response)

      console.log(error.response)
      toast({
        title: status?.toString() || "400",
        description: message,
      });
    },
  });
};

export const useStudentAuth = () => {
  const { setName } = useStudentName();

  return useMutation({
    mutationFn: async ({ data }: { data: FindStudent }) => {
      try {
        const response = await studentAuth(data);
        return response;

      } catch (error) {
        throw error as Error;
      }
    },
    onSuccess: data => {
      const { fullName } = data
    localStorage.setItem("student", JSON.stringify(data));
      setName(fullName)
    },
    onError: (error: Errors) => {
      const { message, status } = error.response.data;


      console.log(error.response)
      toast({
        title: status?.toString() || "400",
        description: message,
      });
    },
  }
  )
};





// export const useVerifyLogin = () => {
//   const navigate = useNavigate();
//   // const { clearEmail } = useVerifyUser();
//   const { setToken } = useAuthTokenStore();
//   return useMutation({
//     mutationFn: async (data: { email: string; otp: string }) => {
//       try {
//         const response = await verifyAdminLogin(data);
//         return response;
//       } catch (error) {
//         throw error as Error;
//       }
//     },
//     onSuccess: (data) => {
//       const { token } = data;
//       setToken(token);
//       toast({
//         title: "Login successful",
//         description: "Welcome to the admin dashboard",
//         duration: 5000,
//       });
//       navigate(`/admin`);
//     },
//     onError: (error: Errors) => {
//       const { message, status } = error.response.data;
//       toast({
//         title: status.toString(),
//         description: message,
//       });
//     },
//   });
// };

// export const useForgotPassword = () => {
//   const navigate = useNavigate();
//   // const { setEmail } = useForgotAuthStore();
//   return useMutation({
//     mutationFn: async (data: ForgotPassword) => {
//       // setEmail(data.email);
//       try {
//         const response = await forgotPassword(data.email);
//         return response;
//       } catch (error) {
//         throw error as Error;
//       }
//     },
//     onSuccess: () => {
//       toast({
//         title: "OTP sent successfully. ",
//         description: "Please check your email",
//         duration: 5000,
//       });
//       navigate("/reset-password");
//     },
//     onError: (error: Errors) => {
//       const { message, status } = error.response.data;
//       toast({
//         title: status.toString(),
//         description: message,
//       });
//     },
//   });
// };

// export const useResetPassword = () => {
//   const navigate = useNavigate();
//   return useMutation({
//     mutationFn: async (data: ResetPassword) => {
//       try {
//         const response = await resetPassword(data);
//         return response;
//       } catch (error) {
//         throw error as Error;
//       }
//     },
//     onSuccess: () => {
//       toast({
//         title: "Password reset successful. ",
//         description: "Please login to continue",
//         duration: 5000,
//       });
//       navigate("/login");
//     },
//     onError: (error: Errors) => {
//       const { message, status } = error.response.data;
//       toast({
//         title: status.toString(),
//         description: message,
//       });
//     },
//   });
// };