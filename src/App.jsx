import { BrowserRouter as Router } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import AppRoutes from "./routes/AppRoutes"
import ScrollToTop from "./components/common/ScrollToTop"

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
  )
}

export default App
