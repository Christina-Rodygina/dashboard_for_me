import "./styles/reset.css"
import "./styles/common.css"

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import Sidebar from "./components/Sidebar/Sidebar";


function App() {
  return (
      <div className="App">
          <Header/>
          <Sidebar/>
          <HomePage/>
      </div>
  );
}

export default App;
