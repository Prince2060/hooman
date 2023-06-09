import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Body1 from './components/body1/Body1'
import Body2 from './components/body2/Body2'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
     <Navbar />
     <div className='wholecontainer'>
     <div className='bodyflex'>
     <Body1 />
     <Body2 />
     </div>
     </div>
   <Footer />
    </div>
  );
}

export default App;
