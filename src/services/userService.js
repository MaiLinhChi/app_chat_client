import axiosClient from '@/utils/axiosClient'
import { setCookie } from './Cookies'

const signIn = async (email, password, rememberMe) => {
  try {
    const response = await axiosClient.post('/auth/sign-in', { email, password })
    console.log(response)
    const { accessToken, refreshToken, user } = response.data.data

    const userData = {
      accessToken,
      refreshToken,
      user,
    }
    if (!rememberMe) {
      sessionStorage.setItem('userLogin', JSON.stringify(userData))
    }
    setCookie('userLogin', JSON.stringify(userData), 7) // Set cookie with 7 days expiry

    return userData
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to sign in')
  }
}

const updateUser = async (id_user, formData) => {
  try {
    const response = await axiosClient.patch(`/users/update/${id_user}`, formData)
    return response.data
  } catch (error) {
    console.error('Failed to update user', error)
    throw error
  }
}

const getAllFriends = async () => {
  try {
    const response = await axiosClient.get('/friends')
    return response.data.data
  } catch (error) {
    console.error('Failed to get all friends', error)
  }
}

const searchUser = async (search) => {
  try {
    const response = await axiosClient.get('/users/searchUsers', { params: { search } })
    return response.data
  } catch (error) {
    console.error('Failed to search user', error)
    throw error
  }
}

const sendFriendRequest = async (receiverId) => {
  try {
    const response = await axiosClient.post(`/friends/addFriendRequest?id=${receiverId}`)
    return {
      data: response.data,
      statusCode: response.status,
    }
  } catch (error) {
    console.error('Failed to send friend request:', error)
    throw error
  }
}

const getAddFriendRequestNotification = async () => {
  try {
    const response = await axiosClient.get('/friends/addFriendRequestNotification')
    return response.data
  } catch (error) {
    console.error('Failed to get add friend request notifcation', error)
  }
}

const deleteFriendRequestHasBeenSent = async (requestId) => {
  try {
    const response = await axiosClient.delete(`/friends/friendRequestHasBeenSent?id=${requestId}`)
    return {
      statusCode: response.status,
      data: response.data,
    }
  } catch (error) {
    console.error('Failed to delete friend request', error)
  }
}

const getFriendRequestHasBeenSent = async () => {
  try {
    const response = await axiosClient.get('/friends/friendRequestHasBeenSent')
    return response.data
  } catch (error) {
    console.error('Failed to get friend request has been sent', error)
  }
}

const acceptFriendRequest = async (requestId) => {
  try {
    const response = await axiosClient.put(`/friends/acceptFriendRequest?id=${requestId}`)
    return response.data
  } catch (error) {
    console.error('Failed to accept friend request', error)
  }
}

const rejectFriendRequest = async (requestId) => {
  try {
    const response = await axiosClient.patch(`/friends/rejectFriendRequest?id=${requestId}`)
    return response.data
  } catch (error) {
    console.error('Failed to reject friend request', error)
  }
}

const getAddFriendRequest = async () => {
  try {
    const response = await axiosClient.get('/friends/addFriendRequest')
    return response.data
  } catch (error) {
    console.error('Failed to get add friend request', error)
  }
}

const getUserById = async (userID) => {
  try {
    const response = await axiosClient.get(`/users/getUserById?userId=${userID}`)
    return response.data
  } catch (error) {
    console.error('Failed to get user by id', error)
  }
}

const deleteFriend = async (userID) => {
  try {
    const response = await axiosClient.delete(`/friends/deleteFriend?id=${userID}`)
    return response.data
  } catch (error) {
    console.error('Failed to delete friend', error)
  }
}

export default {
  signIn,
  updateUser,
  searchUser,
  sendFriendRequest,
  getFriendRequestHasBeenSent,
  deleteFriendRequestHasBeenSent,
  acceptFriendRequest,
  getAddFriendRequestNotification,
  rejectFriendRequest,
  getAddFriendRequest,
  getUserById,
  getAllFriends,
  deleteFriend,
}
