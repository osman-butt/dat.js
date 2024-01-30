import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Userspage from "./components/UsersPage";
import Formpage from "./components/Formpage";

function App() {
  return (
    <div className="m-auto text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/users" element={<Userspage />} />
        <Route path="/adduser" element={<Formpage />} />
      </Routes>
    </div>
  );
}

export default App;
