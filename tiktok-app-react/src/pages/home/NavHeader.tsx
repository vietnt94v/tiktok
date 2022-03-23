import React, { useEffect, useState } from 'react'
import IconLive from '../../assets/images/icon/live.png'

function NavHeader() {
  const [activeTab, setActiveTab] = useState<Number>(1)

  useEffect(() => {}, [])

  const handleActiveTab = (e: any) => {
    setActiveTab(e.target.dataset.tab_index_header)
    console.log(activeTab)
  }

  return (
    <div className='flex justify-between'>
      <div className='flex justify-center items-center p-3'>
        <img src={IconLive} alt='icon live' className='w-6' />
      </div>
      <div className='flex items-center whitespace-nowrap'>
        <div
          onClick={handleActiveTab}
          data-tab_index_header={0}
          className={
            `shrink-0 px-3 cursor-pointer ease-in duration-100` +
            (activeTab == 0 ? ' font-semibold' : '')
          }
        >
          Đang folow
        </div>
        <div className='w-px h-3 bg-slate-50 opacity-50'></div>
        <div
          onClick={handleActiveTab}
          data-tab_index_header={1}
          className={
            `shrink-0 px-3 cursor-pointer ease-in duration-100` +
            (activeTab == 1 ? ' font-semibold' : '')
          }
        >
          Dành cho bạn
        </div>
      </div>
      <div className='flex justify-center items-center p-3'>
        <i className='icon-search text-28 translate-y-0.5'></i>
      </div>
    </div>
  )
}

export default NavHeader
