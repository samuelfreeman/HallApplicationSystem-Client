import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
const HomePage = () => {


  const navigate = useNavigate();
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    console.log(storedToken)


    if (storedToken === undefined || storedToken === null) {
      navigate("/login");

    }
  }, [navigate])

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <h1 className="text-white">Hall Management App coming soon!</h1>
    </div>
  );
};

export default HomePage;


