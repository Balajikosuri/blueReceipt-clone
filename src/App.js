
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import ContentRoutes from "./components/ContentRoutes/ContentRoutes";

function App() {
  return (
    <div className="app">
      <Header /> {/* Mobile Header */}
      <div className="app_content">
        <Sidebar /> {/* Sidebar for Lg devices */}
        <ContentRoutes /> {/* Menu/content for all devices */}
      </div>
    </div>
  );
}

export default App;
