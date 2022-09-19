import './App.css';
import Navbar from './Navbar';
import Home from './Home';
/* import logo from './capture.png'; */
function App() {
  /* const title = "App Component"; */
/*   const like = 50;
  const link = "https://elearn.daffodilvarsity.edu.bd/"; */
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
