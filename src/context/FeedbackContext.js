import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'Beep beep beep from context',
      rating: 4,
    },
  ])

  return (
    <FeedbackContext.Provider value={{ feedback: feedback }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext
