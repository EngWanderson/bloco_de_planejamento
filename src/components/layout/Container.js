import React from 'react'

import styles from './Container.module.css'
const Container = (props) => {
  return (
    //se nao tiver outra classe(css) ele executa: ${styles.container}(padrao)
    // se existir outra classe(css) ele executar isso: ${styles[props.customClass]}
    <div className={`${styles.container} ${styles[props.customClass]}`}>
      {props.children}
    </div>  
  )
}

export default Container
