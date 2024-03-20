import "./App.css";
import Demo from "./components/Demo";
import Hero from "./components/Hero";
import { useUser } from "@clerk/clerk-react";

const App = () => {
  const { user } = useUser();

  return (
    <>
      <main>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">
          <Hero fullName={user?.fullName} id={user?.id} />
          <Demo />
        </div>
      </main>
    </>
  );
};

export default App;
