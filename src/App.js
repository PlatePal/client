
import CreateAccountPage from "./Containers/Pages/CreateAccount/CreateAccount";
import LoginPage from "./Containers/Pages/Login/Login";
import LogoPage from "./Containers/Pages/Logo/Logo";
import MetricPage from "./Containers/Pages/Metrics/Metrics";
import { Route, Switch } from "react-router-dom";
function App() {
  return (
    <div>
      <Switch>
        <Route path="/create" component={CreateAccountPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/" exact component={LogoPage} />
        <Route path="/metric" exact component={MetricPage} />
      </Switch>
    </div>
  )

}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
