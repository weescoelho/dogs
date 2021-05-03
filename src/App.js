import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProtectedRoute from "./components/Helper/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Photo from "./components/Photo/Photo";
import User from "./components/User/User";
import UserProfile from "./components/User/UserProfile/UserProfile";
import { UserStorage } from "./contexts/UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route path="foto/:id" element={<Photo />} />
              <Route path="perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
              <ProtectedRoute path="conta/*" element={<User />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
