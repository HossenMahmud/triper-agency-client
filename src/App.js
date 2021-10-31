import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PackageDetails from './Pages/PackageDetails/PackageDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import NotFound from './Pages/NotFound/NotFound';
import AddPackage from './Pages/AddPackage/AddPackage';
import AllOrders from './Pages/AllOrders/AllOrders';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <PrivateRoute path='/addpackage'>
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path='/allOrders'>
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/package/:id">
              <PackageDetails></PackageDetails>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
