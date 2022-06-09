import './App.css';
import {Route, Switch} from 'react-router-dom'
import Payrollform from './components/payrollForm/Payrollform';
import Payrolldashboard from './components/dashboared/payrolldashboard';
import Error from './components/Error';
import Navbar from './components/layout/Navbar';


function App() {

  //To display message 
  return (
    <>
      <Switch>
        <Route exact path='/' component={Navbar}/>
        <Route exact path='/form' component={Payrollform}/>
        <Route path='/dashboard' component={Payrolldashboard}/>
        <Route component={Error}/>
      </Switch>
    </>
  );
}

export default App;
