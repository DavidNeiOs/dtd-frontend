import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { FlashContextProvider } from "./context/flash";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { Add } from "./pages/add";
import { EditStore } from "./pages/edit-store";
import { SingleStore } from "./pages/single-store";
import { Tags } from "./pages/tags";
import { Tag } from "./pages/tag";
import { LogIn } from "./pages/login";
import { Register } from "./pages/register";

import "./sass/style.scss";

const App: React.FC = () => {
  const flashes = useState([] as any[]);

  return (
    <div className="App">
      <BrowserRouter>
        <FlashContextProvider value={flashes}>
          <Layout>
            <Switch>
              <Route exact={true} path="/" component={Home} />
              <Route exact={true} path="/stores" component={Home} />
              <Route exact={true} path="/add" component={Add} />
              <Route
                exact={true}
                path="/stores/:id/edit"
                component={EditStore}
              />
              <Route exact={true} path="/store/:slug" component={SingleStore} />
              <Route exact={true} path="/tags" component={Tags}></Route>
              <Route exact={true} path="/tags/:tag" component={Tag}></Route>
              <Route exact={true} path="/login" component={LogIn} />
              <Route exact={true} path="/register" component={Register} />
            </Switch>
          </Layout>
        </FlashContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
