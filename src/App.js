import { v4 as uuidv4 } from 'uuid'
import React, { useState } from 'react'
import FeedbackForm from './components/FeedbackForm'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import Header from './components/Header'
// import FeedbackItem from './components/FeedbackItem'
import FeedbackData from './data/FeedbackData'

const App = () => {
  // the whole app wil react to this feedback state
  const [feedback, setFeedback] = useState(FeedbackData)

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Really? 👻')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
      <Header text='Beep' />
      <div className='container'>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  )
}

export default App
