// BrowserRouter uses the HTML5 history.api
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'

import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header text='Beep' />
        <div className='container'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App
