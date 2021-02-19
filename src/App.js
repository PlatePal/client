import LoginPage from "./Containers/Pages/Login/Login";
import LandingPage from "./Containers/Pages/LandingPage/LandingPage";
import MetricPage from "./Containers/Pages/Metrics/Metrics";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "fontsource-roboto";
import DietaryRestrictions from "./Containers/Pages/DietaryRestrictions/DietaryRestrictions.js";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import MainRecipeModal from "./Containers/Pages/MainRecipeModal/MainRecipeModal";
import smoothie from "./assets/images/Creamy-Watermelon-Smoothie.jpg";
import routes from "./constant/routes"
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFD275", // yellow
    },
    secondary: {
      main: "#DB5A42", //red
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path= {`/${routes.login}`} component={LoginPage} />
          <Route path="/" exact component={LandingPage} />
          <Route path= {`/${routes.metrics}`} exact component={MetricPage} />
          <Route
            path={`/${routes.dietaryRestriction}`}
            exact
            component={DietaryRestrictions}
          />
          <Route
            path={`/${routes.main}`}
            render={(props) => (
              <MainRecipeModal />
            )}
          />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
