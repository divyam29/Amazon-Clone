import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="bg-neutral-300 h-[300vh]">
      <Header />
      <Routes>
        <Route exact path="/" element={
          <Home />
        } />
      </Routes>
    </div>
  );
}

export default App;
