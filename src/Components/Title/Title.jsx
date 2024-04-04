import React from 'react'
import './Title.css'

const Title = ({subTitle, context}) => {
  return (
    <div className="title">
        <p>{subTitle}</p>
        <h2>{context}</h2>
    </div>
  )
}

export default Title
