import Sidebar from "./components/Sidebar/Sidebar";
import UserList from "./components/MainContent/UserList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <UserList />
    </div>
  );
}

export default App;
