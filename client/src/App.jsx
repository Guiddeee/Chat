import { Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Chat from "./pages/Chat";
import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar";
import { ChatContextProvider } from "./context/ChatContext";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { useEffect, useState } from "react";

function App() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      sessionStorage.setItem("authToken", token);
    }
  }, []);

  return (
  <ChatContextProvider user={user}>
    <NavBar />
    <Container className="text-secondary">
        <Routes>
          <Route path="/" element={<Chat />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </Container>
  </ChatContextProvider> 
  )
}

export default App;
