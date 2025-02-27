import { IoMdArrowBack } from 'react-icons/io'
import FriendInfo from './FriendInfo/FriendInfo'
import userService from '@/services/userService'
import UserCardSkeleton from '@/components/Sidebar/UserCard/UserCardSkeleton/UserCardSkeleton'
import { useEffect, useState, useCallback } from 'react'

const FriendList = ({ onBack }) => {
  const [friendLists, setFriendLists] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await userService.getAllFriends()
        if (response && Array.isArray(response)) {
          const friends = response.map((item) => ({
            friend: item?.friend?.info,
            createdAt: item?.createdAt,
            friendshipId: item?.friendShip,
          }))
          setFriendLists(friends)
        } else {
          console.error('Unexpected data format:', response)
        }
      } catch (error) {
        console.error('Failed to fetch friends:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchFriends()
  }, [])

  const handleUnfriend = (friendId) => {
    setFriendLists((prevFriends) =>
      prevFriends.filter((friend) => friend.friendshipId !== friendId),
    )
  }

  const formatDate = (isoString) => {
    const date = new Date(isoString)
    return date.toLocaleDateString()
  }

  return (
    <div className='z-10 flex w-full translate-x-0 transform flex-col transition-transform'>
      <div className='flex w-auto cursor-pointer items-center justify-start border-b-2 border-gray-200 bg-white p-2'>
        <button onClick={onBack} className='mr-4'>
          <IoMdArrowBack size={22} />
        </button>
        <h3 className='text-xl font-semibold'>Friend Lists</h3>
      </div>

      {loading ? (
        <UserCardSkeleton />
      ) : (
        <div>
          {friendLists.map((item, index) => (
            <FriendInfo
              friendInfo={item?.friend}
              createdAt={formatDate(item?.createdAt)}
              friendShipId={item?.friendshipId}
              key={index}
              onUnfriend={handleUnfriend}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default FriendList
