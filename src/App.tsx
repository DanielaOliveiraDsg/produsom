import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "@/layouts/MainLayout"
import { Home } from "@/pages/Home"
import { Services } from "@/pages/Services"
import { Contact} from "@/pages/Contact"
import { About } from "@/pages/About"
import { PastEvents } from "@/pages/PastEvents"
import ScrollToTop from "./components/ui/ScrollTop"



function App() {


  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        {/* Everything inside this Route uses the MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="servicos" element={<Services />} />
          <Route path="eventos" element={<PastEvents />} />
          <Route path="sobre" element={<About />} />
          <Route path="contato" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
