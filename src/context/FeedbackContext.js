import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'No more beeps...',
      rating: 4,
    },
    {
      id: 2,
      text: 'Beep beep!!!!',
      rating: 6,
    },
    {
      id: 3,
      text: 'Beep!!!!!!!!!!!!!!',
      rating: 8,
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    // console.log(newFeedback)
    setFeedback([newFeedback, ...feedback])
  }

  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Really? 👻')) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  // update the edited feedback
  const updateFeedback = (id, updItem) => {
    // console.log(id, updItem)
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    )
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
