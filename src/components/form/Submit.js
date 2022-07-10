import React from 'react'
import styles from './Submit.module.css'

const Submit = ({text}) => {
  return (
    <div>
       <div>
      <button className={styles.btn}>{text}</button>
    </div>
    </div>
  )
}

export default Submit
