import Feed from "./components/Feed";
import Header from "./components/Header";
import Nav from "./components/Nav";
import PopUp from "./components/PopUp";
import Thread from "./components/Thread";
import ThreadInput from "./components/ThreadInput";

const App = () => {
  return (
    <div className="app">
      <Nav />
      
      <Header />

      <Feed />

      <PopUp />
    </div>
  );
};

export default App;
