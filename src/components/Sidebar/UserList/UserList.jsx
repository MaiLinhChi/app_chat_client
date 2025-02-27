import { useState } from 'react'
import UserCard from '../UserCard/UserCard'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import UserCardSkeleton from '../UserCard/UserCardSkeleton/UserCardSkeleton'
import { useDispatch } from 'react-redux'
import { setConversation } from '@/redux/Slice/userSlice'

const UserList = () => {
  const [activeTab, setActiveTab] = useState('personal')
  const [activeUserID, setActiveUserID] = useState(null)
  const navigate = useNavigate()
  const groupChats = useSelector((state) => state.user.lsGroupChats)
  const lsChats = useSelector((state) => state.user.lsPersonalChats)
  const dispatch = useDispatch()
  const handleUserClick = (id) => {
    navigate(`/chat/${id}`)
    setActiveUserID(id)
    dispatch(setConversation(id))
  }

  return (
    <section className='h-full w-full'>
      <div className='mt-4 flex'>
        <button
          onClick={() => setActiveTab('personal')}
          className={`flex-1 rounded-bl-xl rounded-tl-xl border p-2 text-center ${
            activeTab === 'personal'
              ? 'border-blue-300 bg-blue-300 text-black shadow-lg dark:text-white'
              : 'border-gray-300 bg-white text-black'
          }`}
        >
          Cá Nhân
        </button>
        <button
          onClick={() => setActiveTab('group')}
          className={`flex-1 rounded-br-xl rounded-tr-xl border p-2 text-center ${
            activeTab === 'group'
              ? 'border-blue-300 bg-blue-300 text-black shadow-lg dark:text-white'
              : 'border-gray-300 bg-white text-black'
          }`}
        >
          Nhóm
        </button>
      </div>
      <div className='mt-4 h-full overflow-y-auto'>
        {lsChats.length == 0 && groupChats.length == 0 ? (
          <UserCardSkeleton />
        ) : (
          <>
            {activeTab === 'personal' &&
              lsChats.map((item) => (
                <UserCard
                  user={item}
                  key={item._id}
                  isActive={activeUserID === item._id}
                  onUserCardClick={() => handleUserClick(item._id)}
                />
              ))}
            {activeTab === 'group' &&
              groupChats.map((item) => (
                <UserCard
                  user={item}
                  key={item._id}
                  isActive={activeUserID === item._id}
                  onUserCardClick={() => handleUserClick(item._id)}
                />
              ))}
          </>
        )}
      </div>
    </section>
  )
}

export default UserList
