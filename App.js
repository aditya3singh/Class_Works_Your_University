import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
// import Content from './components/Content';
// import Vehicals from './components/Vehicals';
// import SportsEvent from './components/SportsEvent';
import Reactprops from './components/Reactprops';
import UserProfile from './components/UserProfile';
import Defaultprops from './components/Defaultprops';
import Proptypesvalidation from './components/Proptypesvalidation';
import PassingFunasProps from './components/PassingFunasProps';


function App() {
  return (
    <div>
      {/* <Header /> */}
      {/* <Content /> */}
      {/* <Vehicals /> */}
      {/* <SportsEvent /> */}
      <Reactprops name ="Aditya" />
      <UserProfile firstName="Aditya" lastName="Kumar" age ="20" />
      <Defaultprops brand = "Farari" />
      <Proptypesvalidation name = "Aditya" price = {1000} isAvailable = {true} />
      <PassingFunasProps />
    </div>
  );
}

export default App;

