import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/context.jsx'

const PUBLISHABLE_KEY = "pk_test_bGl2ZS1zbG90aC00Ni5jbGVyay5hY2NvdW50cy5kZXYk"; 


createRoot(document.getElementById("root")).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <BrowserRouter>
      <SignedIn>
      <ContextProvider>
    <App />
  </ContextProvider>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </BrowserRouter>
  </ClerkProvider>
);
