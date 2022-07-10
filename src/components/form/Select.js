import React from 'react'
import styles from './Select.module.css'
const Select = ({ text, name, options, handleOnChange, value }) => {
  return (
    <div className={styles.form_control}>
          <label htmlFor={name}>{text}:</label>
      <select  name={name}  
      id={name} onChange={handleOnChange}
      value={value || ' '}
      >
        <option>Selecione uma opção</option>
       

{options.map((options) => (
  //value ={option.id} backend
       //{option.name}nome para o usuário selecionar
          <option value={options.id} key={options.id}>
            {options.name}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Select
