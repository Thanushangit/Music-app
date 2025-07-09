import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigare=useNavigate()
  return (
    <div className="min-h-screen w-full flex items-center justify-center flex-col bg-gradient-to-br from-[#1DB954] via-[#282727] to-[#4c4040] text-gray-200 gap-5 md:gap-10">
      <h1 className="font-semibold text-2xl md:text-5xl">Page Not Found!</h1>
      <button className="py-3 px-6 md:py-5 md:px-10 border-0 rounded bg-gray-300 text-zinc-800 font-semibold text-xl md:text-2xl hover:bg-gray-400 hover:text-gray-200 cursor-pointer transition-all duration-300" onClick={()=>navigare("/")}>Home</button>
    </div>
  )
}

export default NotFound