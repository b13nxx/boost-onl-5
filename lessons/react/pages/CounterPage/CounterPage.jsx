import { useContext } from 'react'

import { Counter } from "../../components/Counter/Counter";
import { AppContext } from '../../App.jsx'

import styles from './CounterPage.module.css'

export function CounterPage () {
  const { theme } = useContext(AppContext)
  const getInitialValue = () => 5

  // JSX içerisinde herhangi bir componente data yollamak istiyorsak
  // Aynı HTML tarafında attribute yazar gibi gerçekleştirmemiz gerekiyor
  return <div class={styles.wrapper + ' ' + (theme === 'dark' ? styles['dark-mode'] : '')}>
    <h1>CounterPage</h1>
    <Counter /* JSX Contexti */ initialCounterValue={ /* JS Contexti */ getInitialValue()} isDisabled={false} />
  </div>
}