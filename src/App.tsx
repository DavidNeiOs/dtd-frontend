import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { FlashContextProvider } from "./context/flash";
import { Layout } from "./layout";
import { Home } from "./pages/home";
import { Add } from "./pages/add";
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
              <Route exact={true} path="/add" component={Add} />
            </Switch>
          </Layout>
        </FlashContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
