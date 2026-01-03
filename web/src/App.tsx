import { Routes, Route, Navigate } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CommunityContent from './components/content/CommunityContent'
import ArticleContent from './components/content/ArticleContent'
import ComplaintContent from './components/content/ComplaintContent'
import AboutContent from './components/content/AboutContent'
import ProfileContent from './components/content/ProfileContent'

const App = () => {
  return (
    <Routes>
        <Route path="/" element={ <MainPage />}>

        <Route index element={<Navigate to="community" replace />} />
            <Route path="community" element={<CommunityContent />} />
            <Route path="articles" element={<ArticleContent />} />
            <Route path="complaint" element={<ComplaintContent />} />
            <Route path="about" element={<AboutContent />} />
            <Route path="profile" element={<ProfileContent />} />
        </Route>

        <Route path="/login" element={ <LoginPage />} />
        <Route path="/signup" element={ <SignupPage />} />

    </Routes>
  )
}

export default App
