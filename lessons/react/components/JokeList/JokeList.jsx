import { useState, useEffect } from 'react'


// url: https://official-joke-api.appspot.com/random_ten

export function JokeList () {
  const [jokes, setJokes] = useState([])
  const [todo, setTodo] = useState({})
  const [todoId, setTodoId] = useState(1)

  // Side Effects (Yan Etki):
  // 1. İçinde bulunduğu context'in aslında dışında, başka bir yerde (context'de) gerçekleşirler
  // 2. External context içinde bir durum (state) değişikliğine sebep olurlar
  useEffect(() => {
    console.log('useEffect 1')

    fetch('https://official-joke-api.appspot.com/random_ten')
      .then((data) => data.json())
      .then(data => {
        setJokes(data)
      })
  }, 
  // useEffecr'de dependency array'in 3 muhtemel durumu vardır:
  // 1. dependency array'i boş olacak şekilde tanımlarsanız => kodunuz hiçbir şeye bağımlı değildir ve React tarafından bir kere çalıştırılacatır
  // 2. dependency array'i dolu şekilde tanımlarsanız => bağlımlılıkların değerleri değiştiğinde kodunuz tekrar çalıştırılacaktır
  // 3. dependency array'i hiçbir şekilde tanımlamamış olursanız => kodunuz her render olduğunda tekrar çalışacaktır (yani bağlımlık kontrolü yapılmayaaktır)
  [] /* dependency list */)

  useEffect(() => {
    console.log('useEffect 2')

    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(res => res.json())
      .then(data => {
        setTodo(data)
      })
  }, [todoId])

  const handleButtonClick = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1 // 1 ile 10 arasında bir sayı döndürüyor

    setTodoId(randomNum)
  }

  return <div>
    <ul>
      {jokes.map(joke => <li key={joke.id}>Soru: {joke.setup} Cevap: {joke.punchline}</li>)}
    </ul>
    <h2>Todo Detayı</h2>
    <div>
      <p>Todo Id: {todo.id}</p>
      <p>Todo UserId {todo.userId}</p>
      <p>Todo Title {todo.title}</p>
      <p>Todo Completed {todo.completed}</p>
    </div>
    <button onClick={handleButtonClick}>Todo Getir</button>
  </div>
}