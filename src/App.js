import { useState, useEffect } from "react";

import Feed from "./components/Feed";
import Header from "./components/Header";
import Nav from "./components/Nav";
// import PopUp from "./components/PopUp";
// import Thread from "./components/Thread";
// import ThreadInput from "./components/ThreadInput";

const App = () => {
  const [user, setUser] = useState(null);
  const [threads, setThreads] = useState(null);
  const [viewThreadsFeed, setViewThreadsFeed] = useState(true);
  const [filteredThreads, setFilteredThreads] = useState(null);

  // temporary user id hardcoded for testing
  const userId = "c6f29f62-ae45-4853-87d4-33e2c5a87be9";

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?user_uuid=${userId}`
      );
      const data = await response.json();
      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getThreads = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/threads?thread_from=${userId}`
      );
      const data = await response.json();
      setThreads(data);
    } catch (error) {
      console.error(error);
    }
  }

  const getThreadFeed = async () => {
    if (viewThreadsFeed) {
      const standAloneThreads = threads?.filter((thread) => thread.reply_to === null)
      setFilteredThreads(standAloneThreads)
    }
    if (!viewThreadsFeed) {
    const replyThreads = threads?.filter((thread) => thread.reply_to!== null)
    setFilteredThreads(replyThreads)
    }
  }

  useEffect(() => {
    getUser();
    getThreads();
  }, []);

  useEffect(() => {
    getThreadFeed()
  }, [user, threads, viewThreadsFeed])

  return (
    <div>
      {user && (
        <div className="app">
          <Nav url={user.instagram_url} />

          <Header 
            user={user}
            viewThreadsFeed={viewThreadsFeed}
            setViewThreadsFeed={setViewThreadsFeed}
          />

          <Feed />

          {/* <PopUp /> */}
        </div>
      )}
    </div>
  );
};

export default App;
