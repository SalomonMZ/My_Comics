import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import useInitialState from "../hooks/useInitialState";
import ComicsContext from "../context/ComicsContext";
import Layout from "../components/Layout";
import Home from "../containers/Home";
import MyRatedComics from "../containers/MyRatedComics";

import "../styles/App.css";

const App = () => {
  const initialState = useInitialState();
  return (
    <ComicsContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/my-list" component={MyRatedComics} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </ComicsContext.Provider>
  );
};

export default App;
