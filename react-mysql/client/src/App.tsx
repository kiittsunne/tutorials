import { Header } from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        width: "65vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
        marginTop: "4em",
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
