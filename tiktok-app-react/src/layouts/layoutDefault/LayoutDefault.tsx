import { Outlet } from 'react-router-dom'
import NavMenu from '../../components/navMenu/NavMenu'

function LayoutDefault() {
  return (
    <div className='h-full'>
      <div className='h-full-n12'>
        <Outlet />
      </div>
      <div className='h-12'>
        <NavMenu />
      </div>
    </div>
  )
}

export default LayoutDefault
