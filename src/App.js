import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./page/loginPage";
import MainPage from "./page/mainPage";
import DetailPage from "./page/detailPage";
import SearchPage from "./page/searchPage";
import TradePage from "./page/tradePage";
import MyInfoPage from "./page/myInfoPage";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body {
    height : 100%;
    margin: 0;
    padding : 0;
  }
`;

const StyledApp = styled.div`
  background-color: #21325e;
  min-height: 100vh;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <StyledApp>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/trade" element={<TradePage />} />
            <Route path="/myInfo" element={<MyInfoPage />} />
          </Routes>
        </BrowserRouter>
      </StyledApp>
    </>
  );
}

export default App;
