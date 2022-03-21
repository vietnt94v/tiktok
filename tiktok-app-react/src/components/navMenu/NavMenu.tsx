import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'

import IconPlus from '../../assets/images/icon/plus-tt.svg'

function LinkNavMenu({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })
  console.log(props)

  return (
    <Link
      className={`flex-1 flex flex-col justify-center items-center text-10 p-1 pb-2 ${
        match ? 'text-slate-100' : 'text-slate-400'
      }`}
      to={to}
      {...props}
    >
      {children}
    </Link>
  )
}

function NavMenu() {
  return (
    <footer className='bg-black border-t'>
      <div className='flex'>
        <LinkNavMenu to='/'>
          <i className='icon-home text-24'></i>
          <span>Trang chủ</span>
        </LinkNavMenu>
        <LinkNavMenu to='/discover'>
          <i className='icon-search text-24'></i>
          <span>Khám phá</span>
        </LinkNavMenu>
        <LinkNavMenu to='/new-record'>
          <img src={IconPlus} alt='' className='w-12' />
        </LinkNavMenu>
        <LinkNavMenu to='/inbox'>
          <i className='icon-mail text-24'></i>
          <span>Hộp thư</span>
        </LinkNavMenu>
        <LinkNavMenu to='/profile'>
          <i className='icon-user text-24'></i>
          <span>Hồ sơ</span>
        </LinkNavMenu>
      </div>
    </footer>
  )
}

export default NavMenu
