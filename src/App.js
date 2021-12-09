import React, { useState } from 'react'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)
  return (
    <>
      <Header text='Beep' />
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  )
}

export default App
