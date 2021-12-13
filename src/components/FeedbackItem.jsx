// import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { PropTypes } from 'prop-types'
import Card from './shared/Card'

function FeedbackItem({ item, handleDelete }) {
  // const [rating, setRating] = useState(9)
  // const [text, setText] = useState('An example feedback item')

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button className='close' onClick={() => handleDelete(item.id)}>
        <FaTimes color='purple' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
