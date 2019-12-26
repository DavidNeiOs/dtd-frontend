import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { Add } from "./pages/add";
import "./sass/style.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/add" component={Add} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
};

export default App;
