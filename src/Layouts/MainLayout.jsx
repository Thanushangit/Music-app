import { Outlet } from 'react-router-dom'
import { Login } from '../auth/Login'
import { useState, useEffect } from 'react';

const MainLayout = () => {
    const [token, setToken] = useState("");

    useEffect(() => {
        // 
        console.log("your has is",window.location.hash);
    }, []);

    return (
        <div className='min-h-screen w-full rounded-2xl bg-black text-gray-50 '>
            <Login />
            <Outlet />
        </div>
    )
}

export default MainLayout