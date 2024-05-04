import React from 'react'

function Footer(props) {
  const navItems = ['Home', ...props.nav, 'Tips'];
  //using the spread operator to copy an instance of the props.nav and adding two more items
  return (
    <div className='footer'>
        {/* Accessing the topics prop passed from the parent component */}
        <div className="footerInfo"> 
        {navItems.map((option, idx) => (
        <div key={idx}>{option}</div>
      ))}</div>
       
      <div className='copyright'>
        © 2013 Valet Industries, Inc
        </div>
    </div>
  )
}

export default Footer