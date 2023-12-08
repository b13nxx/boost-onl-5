import { useState } from 'react'

import styles from "./Counter.module.css"

// Componentler aşağıdaki durumlarda sayfa içerisinde tekrar render olurlar:
// 1. Componentin sahip olduğu Props'lardan biri değiştiğinde
// 2. Componentin sahip olduğu State'lerden biri değiştiğinde
// 3. Componentin parentler'ından herhangi biri render olduğunda
export function Counter({ initialCounterValue, isDisabled }) {
  // Componentler render olacakları zaman bütün fonksiyonun iç kısmı (body'si) çalışacaktır
  const [counterValue, setCounterValue] = useState(initialCounterValue) // return ettiği data => [state'in değerine erişebileceğiniz readonly değişken, state'i değiştirebileceğiniz set metodu]

  const handleIncreaseCounter = () => {
    setCounterValue(counterValue + 1) // state değişikliği
  }

  console.log('Counter componenti render edildi')

  // return ile sayfada render edilmesini istdiğimiz elementleri yazarız
  return <div>
    <p>Sayac: {counterValue}</p>
    <p>Disabled: {isDisabled ? 'true' : 'false'}</p>
    <button class={styles.button} onClick={handleIncreaseCounter}>Increase</button>
  </div>
}
