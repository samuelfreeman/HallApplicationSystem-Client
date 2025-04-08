import axios from 'axios';
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import { useNavigate } from 'react-router';

const VerifyCode: React.FC = () => {
    // State to store the entered code
    const [code, setCode] = useState<string>('');
    const navigate = useNavigate();

    // Handle OTP change
    const handleChange = (value: string) => {
        setCode(value);
    };

    // Handle form submission
    const handleSubmit = async () => {
        if (code.length !== 4) {
            alert('Please enter a 4-digit code.');
            return;
        }

        try {
            console.log(typeof code)
            const data = {
                email: localStorage.getItem("email"),
                code: code.toString()
            }
            
     
            const response = await axios.post('https://hallapplicationsystem.onrender.com/student/verify-code', data);
            console.log(response.data);
            alert('Verification Successful');
            navigate('/reset-password'); // Redirect to home
        } catch (error) {
            console.error(error);
            alert('Verification failed.');
        }
    };
    const inputStyles: React.CSSProperties = {
        width: '3rem', // Width of each input box
        height: '3rem', // Height of each input box
        fontSize: '1.25rem', // Font size for text
        textAlign: 'center', // Center the text inside each box
        border: '1px solid #D1D5DB', // Matches Tailwind's border-gray-300
        borderRadius: '0.375rem', // Rounded corners (matches Tailwind's rounded-md)
        color: '#000', // Text color
        backgroundColor: '#fff', // Background color
        margin: '0.25rem', // Space between input boxes
      };

    return (
        <div className="flex  flex-col items-center justify-center h-screen">
            <h2 className="text-xl font-bold mb-4 text-white ">Verify Code</h2>
            <OtpInput
                value={code}
                onChange={handleChange}
                numInputs={4}
                renderInput={(props) => (
                    <input
                        {...props}
                        className="w-12 h-12 text-black bg-white border rounded text-center text-lg"
                    />
                )}
                shouldAutoFocus
                inputStyle={inputStyles}
            />
            <button
                onClick={handleSubmit}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                aria-label="Verify the entered code"
            >
                Verify
            </button>
        </div>
    );
};

export default VerifyCode;
