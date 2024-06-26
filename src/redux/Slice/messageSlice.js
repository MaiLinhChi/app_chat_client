import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: [
    {
      id_user: 1,
      id_message: 1,
      message: "Hey, how's your day going?",
      time: '',
      styles: {},
      emoji_user:[{
        id_user:1,
        url_emoji:"😡",
      }]
    },
    {
      id_user: 2,
      id_message: 2,
      message: 'Not too bad, just a bit busy. How about you?',
      time: '',
      styles: {},
      emoji_user: [],
    },
    {
      id_user: 1,
      id_message: 3,
      message: "I'm good, thanks. Anything exciting happening?",
      time: '',
      styles: {},
        
       emoji_user: [],
    },
    {
      id_user: 2,
      id_message: 4,
      message: "I'm good, thanks. Anything exciting happening?",
      time: '',
      styles: {},
      emoji_user: [],
    },
    {
      id_user: 1,
      id_message: 5,
      message: 'Not really, just the usual. Work and errands.',
      time: '',
      styles: {},
      emoji_user: [],
    },
    {
      id_user: 2,
      id_message: 6,
      message: 'Sounds like a typical day. Got any plans for the weekend?',
      time: '',
      styles: {},
      emoji_user: [],
    },
    {
      id_user: 1,
      id_message: 7,
      message: "Not yet, I'm hoping to relax and maybe catch up on some reading. How about you?",
      time: '',
      styles: {},
      emoji_user: [],
    },
    {
      id_user: 2,
      id_message: 8,
      message: "I might go hiking if the weather's nice. Otherwise, just taking it easy",
      time: '',
      styles: {},
      emoji_user: [],
    },
    {
      id_user: 1,
      id_message: 9,
      message: 'Hiking sounds fun. Hope the weather cooperates for you!',
      time: '',
      styles: {},
      emoji_user: [
      ],
    },
    {
      id_user: 2,
      id_message: 10,
      message: 'You too, take care!',
      time: '',
      styles: {},
      emoji_user: [],
    },
    {
      id_user: 1,
      id_message: 11,
      message: ' Sure',
      time: '',
      styles: {},
      emoji_user: [],
    },
    {
      id_user: 2,
      id_message: 12,
      message: 'Thanks',
      time: '',
      styles: {},
      emoji_user: [],
    },
  ],
  selectedEmojis: [],
}
const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    sendMessage: (state, action) => {
const { message, styles } = action.payload
      const newMessage = {
        id_user: 1,
        id_message: state.message.length + 1,
        message,
        time: '',
        styles: styles || {},
        emoji_user: [],
      }
            return {
        ...state,
        message: [...state.message, newMessage],
      }
    },
    setMessage: (state) => {
      return { ...state }
    },
    selectEmoji: (state, action) => {
      const emojiToAdd = action.payload

      // Thêm emoji vào selectedEmojis nếu chưa tồn tại
      state.selectedEmojis.push(emojiToAdd)
    },
    deleteEmoji: (state) => {
      return { ...state, selectedEmojis: [] }
    },
    selectedEmjiOnMessage: (state, action) => {
      console.log('emoji_payload:', action.payload);

      state.message = [
        ...state.message,
      ]
      state.message.map((item, index) =>{
        if(item.id_message == action.payload.id_message){
          state.message[index].emoji_user.map((emoji, i) =>{
            
            if(emoji.id_user == action.payload.id_user){
              
              state.message[index].emoji_user[i] = [
                { id_user: action.payload.id_user, url_emoji: action.payload.emoji},
              ]
            }
          }
          ) 
          state.message[index].emoji_user = [
            ...state.message[index].emoji_user,
            { id_user: action.payload.id_user, url_emoji: action.payload.emoji},
          ]
        }
      }
      )
      console.log('state:', state.message)
  },
  },
})

export const { sendMessage, setMessage, selectEmoji, deleteEmoji, selectedEmjiOnMessage } = messageSlice.actions
export default messageSlice.reducer
