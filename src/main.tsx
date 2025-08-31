import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./auth/AuthProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";

const CLIENT_ID =  import.meta.env.VITE_GOOGLE_CLIENT_ID as string; // or  process.env.REACT_APP_GOOGLE_CLIENT_ID

createRoot(document.getElementById("root")!).render(
  <StrictMode>
     <GoogleOAuthProvider clientId={CLIENT_ID}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
