import { Outlet } from 'react-router-dom'
import NavMenu from '../../components/navMenu/NavMenu'

function LayoutDefault() {
  return (
    <div className='flex flex-col h-screen'>
      
      <div className='flex-1 bg-black'>
        <Outlet />
      </div>
      <NavMenu />
    </div>
  )
}

export default LayoutDefault
