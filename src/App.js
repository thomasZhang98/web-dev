import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/Tuiter";
import HomeScreen from "./components/Tuiter/home-screen";
import ExploreScreen from "./components/Tuiter/ExploreScreen";
import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/">
                      <Route index
                             element={
                                 <div>
                                     <h1>Home</h1>
                                     <ul>
                                         <li><Link to={"/labs"}>Labs</Link></li>
                                         <li><Link to={"/hello"}>Hello World</Link></li>
                                         <li><Link to={"/tuiter"}>Tuiter</Link></li>
                                     </ul>
                                 </div>}/>
                      <Route path="labs"
                             element={<Labs/>}/>
                      <Route path="hello"
                             element={<HelloWorld/>}/>
                      <Route path="tuiter"
                             element={<Tuiter/>}>
                          <Route index
                                 element={<HomeScreen/>}/>
                          <Route path="explore"
                                 element={<ExploreScreen/>}/>
                          {/* <Route path="notifications"
                                 element={<NotificationScreen/>}/>*/}
                      </Route>
                  </Route>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
