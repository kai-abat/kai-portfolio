import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { DarkModeProvider } from "./context/DarkModeContext";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="/home" />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </AppProvider>
  );
}

export default App;
