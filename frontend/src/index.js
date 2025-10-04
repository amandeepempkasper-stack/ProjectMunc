import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import BlogDeleteProvider from "./BlogContext/BlogDeleteContext";
import { BlogProvider } from "./BlogContext/BlogContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <BlogDeleteProvider>
          <BlogProvider>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </BlogProvider>
        </BlogDeleteProvider>
      </Provider>
    </BrowserRouter>

    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        className: "",
        duration: 5000,
        style: {
          background: "#363636",
          color: "#fff",
        },
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
      }}
    />
  </React.StrictMode>
);
