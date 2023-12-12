// İlgili dosyanın içerisinde varsayılan olarak export edileni import eder:

import DefaultExportEdilenImportEdildigiIcinIstedigimIsmiVerebilirim from "./components/HelloMessage/HelloMessage.jsx";

// Süslü parantezlerin içerisindeki yapıları isimlendirmenin doğru olması şartıyla,
// ilgili dosyanın içerisinden import edecektir:
import { HelloMessage } from "./components/HelloMessage/HelloMessage.jsx"


// Aynı objeleri yıkmadaki syntax ile birebirdir dıyebiliriz:
/*
const person = {
  name: "Mehmet",
  age: 22,
}
const { surname } = person
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar.jsx"
import { HomePage } from "./pages/HomePage/HomePage.jsx"
import { CounterPage } from "./pages/CounterPage/CounterPage.jsx"
import { JokesPage } from "./pages/JokesPage/JokesPage.jsx"
import { VideoPlayerPage } from "./pages/VideoPlayerPage/VideoPlayerPage.jsx"

export function App() {
  return <div>
    <NavBar />
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="counter" element={<CounterPage />} />
        <Route path="jokes" element={<JokesPage />} />
        <Route path="video" element={<VideoPlayerPage />} />
      </Routes>
    </BrowserRouter>
  </div>
}
