import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Home from "./pages/Home"
import Form from "./pages/Form"

const App = () => {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={ <Home /> } />
    <Route path="/form" element={ <Form /> }  />
  </Routes>
</BrowserRouter>
}

export default App;
