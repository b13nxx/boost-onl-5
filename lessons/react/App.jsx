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
import { createContext, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/NavBar.jsx"
import { HomePage } from "./pages/HomePage/HomePage.jsx"
import { CounterPage } from "./pages/CounterPage/CounterPage.jsx"
import { CommentsPage } from "./pages/CommentsPage/CommentsPage.jsx"
import { JokesPage } from "./pages/JokesPage/JokesPage.jsx"
import { VideoPlayerPage } from "./pages/VideoPlayerPage/VideoPlayerPage.jsx"
import { FilterPage } from "./pages/FilterPage/FilterPage.jsx"

export const AppContext = createContext(null)

export function App() {
  const [theme, setTheme] = useState('light')

  return <div>
    <AppContext.Provider value={{ theme, setTheme }}>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="counter" element={<CounterPage />} />
          <Route path="comments" element={<CommentsPage />} />
          <Route path="jokes" element={<JokesPage />} />
          <Route path="video" element={<VideoPlayerPage />} />
          <Route path="filter" element={<FilterPage />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  </div>
}
