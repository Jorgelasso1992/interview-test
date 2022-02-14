import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import FormCars from './components/FormCars';
import ViewCars from './components/ViewCars';
import Login from './components/Login';
import Index from './components/Index'

function App() {
  return (
    <Router>
      <NavigationBar />
      <Route path='/' exact component={Login} />
      <Route path='/index' exact component={Index} />
      <Route path='/registerCar' exact component={FormCars} />
      <Route path='/viewCar' exact component={ViewCars} />
    </Router>
  );
}

export default App;
