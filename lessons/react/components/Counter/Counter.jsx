import { useState } from 'react'

export function Counter({ initialCounterValue, isDisabled }) {
  // Componentler render olacakları zaman bütün fonksiyonun iç kısmı (body'si) çalışacaktır
  const [counterValue, setCounterValue] = useState(initialCounterValue) // return ettiği data => [state'in değerine erişebileceğiniz readonly değişken, state'i değiştirebileceğiniz set metodu]

  console.log('Counter componenti render edildi')

  // return ile sayfada render edilmesini istdiğimiz elementleri yazarız
  return <div>
    <p>Sayac: {counterValue}</p>
    <p>Disabled: {isDisabled ? 'true' : 'false'}</p>
    <button onClick={() => {
      setCounterValue(counterValue + 1)
    }}>Increase</button>
  </div>
}
