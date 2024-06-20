import { RxAvatar } from 'react-icons/rx'
import { SlOptions } from 'react-icons/sl'
import { MdPhone, MdVideocam } from 'react-icons/md'

function ChatHeader({ toggleInfo }) {
  return (
    <header className='mb-2 flex items-center justify-between rounded-lg bg-mainBlue px-8 py-4 shadow-xl dark:bg-[#6c8ea3]'>
      <div className='flex cursor-pointer items-center space-x-4'>
        <img
          src='https://flowbite.com/docs/images/people/profile-picture-3.jpg'
          className='h-16 w-16 rounded-full'
        />
        <div className='flex flex-col'>
          <span className='text-2xl font-semibold text-black dark:text-white'>Username</span>
          <span className='font-semibold text-gray-500 dark:text-slate-500'>Active 2h ago</span>
        </div>
      </div>
      <div className='flex space-x-6'>
        <button className='rounded-md p-2 hover:bg-blue-400 dark:hover:opacity-85'>
          <MdPhone size={22} />
        </button>
        <button className='rounded-md p-2 hover:bg-blue-400 dark:hover:opacity-85'>
          <MdVideocam size={22} />
        </button>
        <button
          className='rounded-md p-2 hover:bg-blue-400 dark:hover:opacity-85'
          onClick={toggleInfo}
        >
          <SlOptions size={22} />
        </button>
      </div>
    </header>
  )
}

export default ChatHeader
