import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="*" component={NotFound} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
