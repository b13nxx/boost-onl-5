// İlgili dosyanın içerisinde varsayılan olarak export edileni import eder:
import DefaultExportEdilenImportEdildigiIcinIstedigimIsmiVerebilirim from "./components/HelloMessage/HelloMessage.jsx";

// Süslü parantezlerin içerisindeki yapıları isimlendirmenin doğru olması şartıyla,
// ilgili dosyanın içerisinden import edecektir:
import { HelloMessage } from "./components/HelloMessage/HelloMessage.jsx";

// Aynı objeleri yıkmadaki syntax ile birebirdir dıyebiliriz:
const person = {
  name: "Ali Furkan",
  age: 22,
}
const { surname } = person

export function App() {
  return <HelloMessage /> // JSX
}
