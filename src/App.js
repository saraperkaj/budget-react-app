import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//import for where the routes are going
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

//NavBar
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div className="App">
      <body>
        <Router>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Index />} />
              <Route path="/transactions/new" element={<New />} />
              <Route path="/transactions/:index" element={<Show />} />
              <Route path="/transactions/:index/edit" element={<Edit />} />
              <Route path="*" element={<FourOFour />} />
            </Routes>
          </main>
        </Router>
      </body>
    </div>
  );
}

export default App;
