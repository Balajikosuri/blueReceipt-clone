import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ContentRoutes from "./components/ContentRoutes/ContentRoutes";

function App() {
  return (
    <div className="app">
      {/* Mobile Header */}
      <Header />
      {/* sidebar and Main Menu  */}
      <div className="main">
        {/* sidebar for Lg devices */}
        <Sidebar />
        {/* Menu/content for all devices */}
        <ContentRoutes />
      </div>
    </div>
  );
}

export default App;
