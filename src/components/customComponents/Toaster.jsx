import React from "react";

import { Toaster as ReactHotToast } from "react-hot-toast";

const Toaster = () => (
  <ReactHotToast
    position="bottom-right"
    reverseOrder={true}
    gutter={8}
    containerClassName=""
    containerStyle={{}}
    toastOptions={{
      // Define default options
      className: "",
      duration: 8000,
      style: {
        background: "#fff",
        color: "#363636",
      },

      // Default options for specific types
      success: {
        duration: 3000,
        theme: {
          primary: "green",
          secondary: "black",
        },
      },
    }}
  />
);

export default Toaster;
