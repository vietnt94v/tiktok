import React, { useEffect, useState } from 'react'
import IconLive from '../../assets/images/icon/live.png'

function NavHeader() {
  const [activeTab, setActiveTab] = useState<Number>(1)

  useEffect(() => {}, [])

  const handleActiveTab = (e: any) => {
    setActiveTab(Number(e.target.dataset.tab_index_header))
  }

  return (
    <div className='flex justify-between'>
      <div className='flex justify-center items-center p-3'>
        <div className='relative border border-red-500 px-2 rounded cursor-pointer'>
          <div className='text-red-500 mr-1'>Live</div>
          <div className='absolute top-1 right-1 w-1 h-1 bg-white rounded'></div>
        </div>
      </div>
      <div className='flex items-center whitespace-nowrap'>
        <div
          onClick={handleActiveTab}
          data-tab_index_header={0}
          className={
            `shrink-0 px-3 cursor-pointer ease-in duration-100` +
            (activeTab === 0 ? ' font-semibold' : '')
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
            (activeTab === 1 ? ' font-semibold' : '')
          }
        >
          Dành cho bạn
        </div>
      </div>
      <div className='flex justify-center items-center p-3'>
        <i className='fa fa-search text-18'></i>
      </div>
    </div>
  )
}

export default NavHeader
