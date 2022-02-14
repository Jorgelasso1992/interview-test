import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import FormCars from './components/formCars';
import ViewCars from './components/viewCars';
import Login from './components/login';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Route path='/' exact component={Login} />
      <Route path='/registerCar' exact component={FormCars} />
      <Route path='/viewCar' exact component={ViewCars} />
    </Router>
  );
}

export default App;
