import React from 'react'
import DogMoney from '../../assets/images/dog-money.png'

function NavAction() {
  return (
    <div className='flex flex-col w-10'>
      <div className='flex flex-col items-center mb-6 cursor-pointer'>
        <div className='relative z-10 border-2 border-white rounded-full'>
          <div className='w-full aspect-square rounded-full overflow-hidden'>
            <img src={DogMoney} alt='' className='w-full' />
          </div>
          <div className='absolute bottom-0 left-middle-x -translate-x-2/4 translate-y-2/4 z-20'>
            <div className='flex justify-center items-center w-4 h-4 rounded-full bg-red-500 text-white'>
              <i className='fal fa-plus text-10'></i>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center mb-6 cursor-pointer'>
        <i className='fas fa-heart text-28'></i>
        <div className='text-12'>4516</div>
      </div>
      <div className='flex flex-col items-center mb-6 cursor-pointer'>
        <i className='fas fa-comment-dots text-28'></i>
        <div className='text-12'>34</div>
      </div>
      <div className='flex flex-col items-center mb-6 cursor-pointer'>
        <i className='fas fa-share text-28'></i>
        <div className='text-12'>4</div>
      </div>
      <div className='w-full aspect-square rounded-full overflow-hidden bg-gradient-to-r from-white to-gray-800 cursor-pointer'>
        <div className='p-1.5 animate-spin-slow duration-1000'>
          <img
            src={DogMoney}
            alt=''
            className='w-full rounded-full overflow-hidden'
          />
        </div>
      </div>
    </div>
  )
}

export default NavAction
