import Home from "./home/Home";
import About from "./about/About";
import Header from "./layout/Header";
import { Switch, Route } from "react-router-dom";
import Contact from "./contact/Contact";
import AddUser from "./user/AddUser";
import UserProfile from "./user/UserProfile";
import UpdateUser from "./user/UpdateUser";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <div className="container mt-5">
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>

          <Route exact path="/add-user">
            <AddUser />
          </Route>

          <Route exact path="/user-profile/:id">
            <UserProfile/>
          </Route>

          <Route exact path="/update-user/:id">
            <UpdateUser/>
          </Route>

          
        </div>


      </Switch>
    </div>
  );
}

export default App;
