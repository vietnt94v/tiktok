import DogMoney from '../../assets/images/dog-money.png'
import VideoModel from '../../models/Video'

interface Props {
  action: VideoModel
}

function NavAction({ action }: Props) {
  return (
    <div className='flex flex-col w-10'>
      <div className='flex flex-col items-center mb-6 cursor-pointer'>
        <div className='relative z-10 border-2 border-white rounded-full'>
          <div className='w-full aspect-square rounded-full overflow-hidden'>
            <img
              src={DogMoney}
              alt={action.user_name + ' avatar'}
              className='w-full'
            />
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
        <div className='text-12'>{action.favorite_count}</div>
      </div>
      <div className='flex flex-col items-center mb-6 cursor-pointer'>
        <i className='fas fa-comment-dots text-28'></i>
        <div className='text-12'>{action.comment_count}</div>
      </div>
      <div className='flex flex-col items-center mb-6 cursor-pointer'>
        <i className='fas fa-share text-28'></i>
        <div className='text-12'>{action.share_count}</div>
      </div>
      <div className='relative z-10'>
        <div className='w-full aspect-square rounded-full overflow-hidden bg-gradient-to-r from-white to-gray-800 cursor-pointer'>
          <div className='p-1.5 animate-spin-slow duration-1000'>
            <img
              src={DogMoney}
              alt=''
              className='w-full rounded-full overflow-hidden'
            />
          </div>
        </div>
        <div className='block'>
          <i className='far fa-music music-fly'></i>
          <i className='far fa-music-alt music-fly opacity-0'></i>
        </div>
      </div>
    </div>
  )
}

export default NavAction
