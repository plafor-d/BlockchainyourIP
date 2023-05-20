
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Auth from './auth';
import { Box } from "@mui/material";
import Home from "./home";
import Formationpage from "./formtions";
import Calendrier from "./calendrier";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/auth" Component={Auth} />
        <Route path="/formations" Component={Formationpage} />
        <Route path="/calendrier" Component={Calendrier} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
