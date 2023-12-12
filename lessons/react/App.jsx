// İlgili dosyanın içerisinde varsayılan olarak export edileni import eder:

import DefaultExportEdilenImportEdildigiIcinIstedigimIsmiVerebilirim from "./components/HelloMessage/HelloMessage.jsx";

// Süslü parantezlerin içerisindeki yapıları isimlendirmenin doğru olması şartıyla,
// ilgili dosyanın içerisinden import edecektir:
import { HelloMessage } from "./components/HelloMessage/HelloMessage.jsx"


import { Counter } from "./components/Counter/Counter.jsx"
import { Comments } from "./components/Comments/Comments.jsx"
import { JokeList } from "./components/JokeList/JokeList.jsx";
import { VideoPlayer } from "./components/VideoPlayer/VideoPlayer.jsx";

// Aynı objeleri yıkmadaki syntax ile birebirdir dıyebiliriz:
const person = {
  name: "Mehmet",
  age: 22,
}
const { surname } = person

export function App() {
  const getInitialValue = () => 5

  // JSX içerisinde herhangi bir componente data yollamak istiyorsak
  // Aynı HTML tarafında attribute yazar gibi gerçekleştirmemiz gerekiyor
  return <div>
    <HelloMessage />
    <Counter /* JSX Contexti */ initialCounterValue={ /* JS Contexti */ getInitialValue()} isDisabled={false} />
    <br />
    <h1>Yorumlar</h1>
    <Comments />
    <br />
    <h1>Şakalar</h1>
    <JokeList />
    <br />
    <h1>Video Oynatıcı</h1>
    <VideoPlayer />
  </div>
}
