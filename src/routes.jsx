import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home'
import Chat from './pages/Chat/Chat'
import LoginGoogle from './pages/Login/LoginGoogle/LoginGoogle'

function AppRoutes() {
  // const navigate = useNavigate()

  // useLayoutEffect(() => {
  //   checkCookie ? navigate('/') : navigate('/login')
  // })
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login/*' element={<Login />} />
      <Route path='/chat/:idConversation' element={<Chat />} />
      {/* <Route path='/test' element={<EditProfile />} /> */}
      <Route path='/verify-login-google' element={<LoginGoogle />} />

      {/* <Route path="/register" element={<SignUpComponent />} /> */}
    </Routes>
  )
}

export default AppRoutes
