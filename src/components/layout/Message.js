import React, { useEffect, useState } from 'react'
import styles from './Message.module.css'

const Message = ({type, msg}) => {
  const [visible, setVisible]=useState(false)
  
  useEffect(()=>{
    if(!msg){
      setVisible(false)
      return
    }
    setVisible(true)
    const timer = setTimeout(()=>{
      //vai ser apagada novamente
      setVisible(false)
    },3000)
    return () => clearTimeout(timer)
  }, [msg])
  
  return (
    //estrutura de fragment
     <>
 {visible && (

//uma classe dinâmica. Onde uma vem fixa e a outra
//das propriedades
    <div className={`${styles.message} ${styles[type]}
    `}>{msg}</div>
  )}
    </>
  )
}

export default Message


/**/