import React from 'react'

function Footer(props) {
  return (
    <div className='footer'>
        {/* Accessing the topics prop passed from the parent component */}
        {props.nav.map((option, idx) => (
        <div key={idx}>{option}</div>
      ))}
    </div>
  )
}

export default Footer