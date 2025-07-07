
import { NavLink } from 'react-router-dom'


const SideBarButton = ({title,icon,to}) => {
    return (
        <NavLink to={to} className="flex flex-col group items-center justify-center h-18 w-18 rounded-lg hover:bg-[#ecc9ac] transition-all duration-200">
            <p className='text-lg'>{icon}</p>
            <p className='text-[#e9e2dc] group-hover:text-[#f6f4f3] text-sm'>{title}</p>
        </NavLink>
    )
}

export default SideBarButton