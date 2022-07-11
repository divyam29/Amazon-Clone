import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={
        <Header />
        } />
      </Routes>
    </>
  );
}

export default App;
