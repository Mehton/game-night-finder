import React from "react";
import { useRoutes, Link } from "react-router-dom";
import Locations from "./pages/Locations";
import LocationEvents from "./pages/LocationEvents";
import Events from "./pages/Events";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";

const App = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Locations />,
    },
    {
      path: "/meepleden",
      element: <LocationEvents index={1} />,
    },
    {
      path: "/criticalhit",
      element: <LocationEvents index={2} />,
    },
    {
      path: "/oakridgelibrary",
      element: <LocationEvents index={3} />,
    },
    {
      path: "/barrelanddice",
      element: <LocationEvents index={4} />,
    },
    {
      path: "/events",
      element: <Events />,
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);

  return (
    <div className="app">
      <header className="main-header">
        <h1>Game Night Finder</h1>

        <div className="header-buttons">
          <Link to="/" role="button">
            Home
          </Link>
          <Link to="/events" role="button">
            Events
          </Link>
        </div>
      </header>

      <main>{element}</main>
    </div>
  );
};

export default App;
