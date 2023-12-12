import { Counter } from "../../components/Counter/Counter";

export function CounterPage () {
  const getInitialValue = () => 5

  // JSX içerisinde herhangi bir componente data yollamak istiyorsak
  // Aynı HTML tarafında attribute yazar gibi gerçekleştirmemiz gerekiyor
  return <div>
    <h1>CounterPage</h1>
    <Counter /* JSX Contexti */ initialCounterValue={ /* JS Contexti */ getInitialValue()} isDisabled={false} />
  </div>
}