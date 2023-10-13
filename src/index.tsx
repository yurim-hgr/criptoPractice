import React from 'react';
import ReactDOM from "react-dom/client";
import App from './App';
import { ThemeProvider } from 'styled-components';
import {theme , lighttheme} from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <div>
    <ThemeProvider theme ={theme}>
      <App />
    </ThemeProvider>
  </div>
);

