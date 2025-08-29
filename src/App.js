import './App.css';
import Footer from './component/Footer/Footer';
import Navigation from './component/Navigation';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
