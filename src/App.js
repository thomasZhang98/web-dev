import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path="/hello" exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path={["/", "/labs"]} exact={true}>
                  <Labs/>
              </Route>
              <Route path="/tuiter" exact={true}>
                  <Tuiter/>
              </Route>
          </div>
      </BrowserRouter>
  );
}

export default App;
