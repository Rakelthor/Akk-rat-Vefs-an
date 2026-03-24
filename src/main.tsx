import React from "react";
import ReactDOM from "react-dom/client";
import { LanguageProvider } from "./app/context/LanguageContext";
import App from "./app/App";
import TestTracking from "./app/components/TestTracking";
import "./styles/index.css";

function Root() {
  const [currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Simple routing based on path
  if (currentPath === '/test-tracking') {
    return <TestTracking />;
  }

  return (
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);