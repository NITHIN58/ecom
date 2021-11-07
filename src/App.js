import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import Login from "./components/Login/Logincomponent";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home";
import Admin from "./Admin/Admin";
import Category from "./components/Category";
import Login from "./Login";
import Use from "./example/Use"
import ResetPassword from "./ResetPassword";
function App() {
  return (
    <div className="App">
 
      <BrowserRouter>
       
        <Switch>
          <Route path="/login" render={() => <Login />} />
          <Route path="/signup" render={() => <SignUp />} />
          <Route path="/admin"> <Admin/></Route>
          <Route path="/resetPassword/:resetToken"><ResetPassword/></Route>
          <Route path="/category/:category">
            <Category />
          </Route>
          <Route path="/" exact>
            <Home/>
          </Route>
        
         
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
