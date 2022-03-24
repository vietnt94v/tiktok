import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import type { LinkProps } from 'react-router-dom'
import IconPlus from '../../assets/images/icon/plus-tt.svg'

interface LinkNavMenuProps extends LinkProps {
  iconName?: string
  textLink?: string
}
function LinkNavMenu({
  children,
  to,
  iconName,
  textLink,
  ...props
}: LinkNavMenuProps) {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <Link
      className={`flex-1 flex flex-col justify-center items-center text-10 p-1 pb-2 ${
        match ? 'text-slate-100' : 'text-slate-400'
      }`}
      to={to}
      {...props}
    >
      {iconName ? <i className={`fa-solid ` + iconName + ` text-20`}></i> : null}
      {textLink ? <span>{textLink}</span> : null}
      {children}
    </Link>
  )
}

function NavMenu() {
  return (
    <footer className='bg-black border-t'>
      <div className='flex'>
        <LinkNavMenu
          to='/'
          iconName='fa-house'
          textLink='Trang chủ'
        ></LinkNavMenu>
        <LinkNavMenu
          to='/discover'
          iconName='fa-search'
          textLink='Khám phá'
        />
        <LinkNavMenu to='/new-record'>
          <img src={IconPlus} alt='icon plus tiktok' className='w-14' />
        </LinkNavMenu>
        <LinkNavMenu to='/inbox' iconName='fa-inbox' textLink='Hộp thư' />
        <LinkNavMenu to='/profile' iconName='fa-user' textLink='Hồ sơ' />
      </div>
    </footer>
  )
}

export default NavMenu
