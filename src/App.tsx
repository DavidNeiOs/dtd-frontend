import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";

import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { FlashContextProvider } from "./context/flash";
import { Layout } from "./layout";
import { PrivateRoute } from "./components/private-route";
import { Home } from "./pages/home";
import { Add } from "./pages/add";
import { EditStore } from "./pages/edit-store";
import { SingleStore } from "./pages/single-store";
import { Tags } from "./pages/tags";
import { Tag } from "./pages/tag";
import { LogIn } from "./pages/login";
import { Register } from "./pages/register";
import store from "./store";

import "./sass/style.scss";
import { EditUser } from "./pages/edit-user";

// Check for token to keep user Logged in

if (localStorage.jwtToken) {
  // set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded: any = jwt_decode(token);
  // Set user and is Authenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000; // get milliseconds
  if (decoded.exp < currentTime) {
    // logout user
    store.dispatch(logoutUser());

    // redirect to login
    window.location.href = "./login";
  }
}

const App: React.FC = () => {
  const flashes = useState([] as any[]);

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <FlashContextProvider value={flashes}>
            <Layout>
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/stores" component={Home} />
              <Route exact={true} path="/store/:slug" component={SingleStore} />
              <Route exact={true} path="/tags" component={Tags} />
              <Route exact={true} path="/tags/:tag" component={Tag} />
              <Route exact={true} path="/login" component={LogIn} />
              <Route exact={true} path="/register" component={Register} />
              <Switch>
                <PrivateRoute exact={true} path="/add" cmp={Add} />
                <PrivateRoute
                  exact={true}
                  path="/stores/:id/edit"
                  cmp={EditStore}
                />
                <PrivateRoute exact path="/account" cmp={EditUser} />
              </Switch>
            </Layout>
          </FlashContextProvider>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
