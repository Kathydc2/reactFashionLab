import React from 'react'

function Article({date, title, imageSrc, letter}) {
  return (
    <div className='article'>
      <div className="date">{date}</div>
      <div className="title">{title}</div>
      <img className="image" src={imageSrc} alt="" />
      
      <p className='content'><p className='letter'>{letter}</p> Dolor sit amet consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis pripsum por. Praesent mauris. Fusce nec tellus sed augue semper porta. 
        Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad imperdieter torquent per conubia nostra, per inceptos himenaeos.Curabitur sodales ligula in libero.Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet iusto natus expedita tenetur quas illo, quasi eos possimus facilis minus magnam aperiam cumque quae deserunt, temporibus voluptate veritatis quibusdam!sit amet consectetur adipisicing Qui amet aportent per inceptos himenaeos Lorem ipsum dolor.</p>
  
      
        <p className='continue'>Continues...</p> 
        <hr></hr>
       
      </div>
  )
}

export default Article