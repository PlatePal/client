import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";

import LandingPage from "./Containers/Pages/LandingPage/LandingPage";
import MainRecipeModal from "./Containers/Pages/MainRecipeModal/MainRecipeModal";
import ProfilePage from "./Containers/Pages/ProfilePage/ProfilePage.js";
import TodaysRecipe from "./Containers/Pages/TodaysRecipe/TodaysRecipe";
import SavedRecipePage from "./Containers/Pages/SavedRecipePage/SavedRecipePage.js";
import Navbar from "./component/navbars/Navbar.js";

import { ThemeProvider } from "@material-ui/core";
import mainUITheme from "./assets/styles/mainUITheme";
import "fontsource-roboto";
import routes from "./constant/routes";
import ExpandedSavedRecipe from "./Containers/Pages/ExpandedSavedRecipe/ExpandedSavedRecipe";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={mainUITheme}>
        <Switch>
          <Route
            path={`/${routes.main}`}
            render={(props) => (
              <div>
                <Navbar fill="home" />
                <MainRecipeModal />
              </div>
            )}
          />
          <Route
            path={`/${routes.today}`}
            render={(props) => (
              <div>
                <Navbar fill="bookmark" />
                <TodaysRecipe />
              </div>
            )}
          />
          <Route
            path={`/${routes.profile}`}
            render={(props) => (
              <div>
                <Navbar fill="person" />
                <ProfilePage />
              </div>
            )}
          />
          <Route
            path={`/${routes.favorite}`}
            render={(props) => (
              <div>
                <Navbar fill="heart" />
                <SavedRecipePage />
              </div>
            )}
          />
          <Route
            path={`/${routes.expandedRecipe}`}
            render={(props) => (
              <div>
                <Navbar fill="home" />
                <ExpandedSavedRecipe />
              </div>
            )}
          />
          <Redirect from="/:random" to="/" />
          <Route path="/" component={LandingPage} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
