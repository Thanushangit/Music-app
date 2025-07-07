import SideBar from '../Components/SideBar'
import { Outlet } from 'react-router-dom'

const MainPage = () => {
  return (
    <div className='min-h-screen w-full rounded-2xl bg-black text-gray-50 flex'>
        <SideBar/>
        <Outlet/>
    </div>
  )
}

export default MainPage