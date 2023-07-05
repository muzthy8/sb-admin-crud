// import logo from './logo.svg';
// import './App.css';

import Dashboard from "./components/DashBoard";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
    {/* <h1>React Works</h1> */}
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <Dashboard/>
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
