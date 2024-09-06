import React from 'react';
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import DetailPage from "./Pages/DetailPage";
import SearchPage from "./Pages/SearchPage";
import Header from "./Components/Header/Header";

const App = () => {
  return (
    <>
      <Header/>
    <Routes>
      <Route path={'/'} element={<HomePage/>} />
      <Route path={'/detail/:id'} element={<DetailPage/>} />
      <Route path={'/search'} element={<SearchPage/>} />
    </Routes>
      </>
  );
};

export default App;