import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Button from './shared/Button'
import Card from './shared/Card'

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('do a little dance')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true)
      setMessage('Text must be at least 10 chacters long! 👻')
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      // console.log(newFeedback)
      handleAdd(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate you experience!</h2>

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className='input-group'>
          <input
            type='text'
            onChange={handleTextChange}
            placeholder='WRITE A REVIEW! QUICK!!!!'
            value={text}
          />

          <Button type='submit' isDisabled={btnDisabled}>
            SEND!!!!!
          </Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
