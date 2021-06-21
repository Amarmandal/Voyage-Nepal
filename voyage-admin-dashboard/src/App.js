import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import AdminRoute from "./components/AdminRoute";
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CreatePlace from "./pages/CreatePlace";
import UpdatePlace from "./pages/UpdatePlace";
import CreateCategory from "./pages/CreateCategory";
import UpdateCategory from "./pages/UpdateCategory";
import CreateHotel from "./pages/CreateHotel";
import UserProfile from "./pages/UserProfile";
import NotFound from './pages/NotFound';
import ActivateAccount from "./pages/ActivateAccount";
import { ToastContainer } from "react-toastify";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/user/verify" component={ActivateAccount} />
        <AdminRoute path="/place/create" component={CreatePlace} />
        <AdminRoute path="/place/update" component={UpdatePlace} />
        <AdminRoute path="/category/create" component={CreateCategory} />
        <AdminRoute path="/category/update" component={UpdateCategory} />
        <AdminRoute path="/hotel/create" component={CreateHotel} />
        <AdminRoute path="/user-profile" component={UserProfile} />
        <Route path="*" component={NotFound} />
      </Switch>
      <ToastContainer />
    </Router>
  );
}

export default App;
