import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import CustomNavbar from './Components/CustomNavbar.jsx';
import CustomFooter from './Components/CustomFooter.jsx';
import CustomWelcome from './Components/CustomWelcome.jsx';
import CustomAllTheBooks from './Components/CustomAllTheBooks.jsx';

function App() {
  return (
    <div className="App">
      <CustomNavbar />

     <div className="App">
      <CustomWelcome />
     </div>
      <div className="App">
        <CustomAllTheBooks />
      </div>
     
     <footer className="App">
<CustomFooter />
     </footer>
    </div>
  );
}

export default App;