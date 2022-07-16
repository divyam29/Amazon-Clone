import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route exact path="/" element={
          <Home/>
        } />
      </Routes>
    </>
  );
}

export default App;
