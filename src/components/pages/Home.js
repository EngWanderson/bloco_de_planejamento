import React from 'react'

import styles from './Home.module.css'

import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'
const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1  >Bem vindo ao Costs </h1>
      <p>comece a gerenciar os seus projetos agora mesmo!</p>
      <LinkButton to="/newproject" text="Criar Projeto" />
      <img src={savings} alt= "Costs"/>

    </section>
  )
}

export default Home
