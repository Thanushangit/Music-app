import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"



const MainLayout = () => {
    const [status, setStatus] = useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
        const timer = setTimeout(() => {
            setStatus(false);
            navigate('/');
        }, 4350); 

        return () => clearTimeout(timer);   
    })

    return (
        <>

            {status && <div className="h-screen w-full overflow-hidden bg-black text-gray-50 flex items-center justify-center">
                <video
                    src="/open.mp4"
                    autoPlay
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                />
            </div>}


            {!status && <div className="h-screen w-full overflow-hidden bg-black text-gray-50 flex items-center justify-center">
                <h1 className="text-gray-200">this is the home page</h1>
            </div>
            }
        </>



    )
}

export default MainLayout