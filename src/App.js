import "./index.css";
import Navbar from "./components/Navigation/Navigation";
import Description from "./components/Description/Description";
import TweetsBody from "./components/TweetsBody/TweetsBody";
import StreamsBody from "./components/StreamsBody/StreamsBody";

const App = () => {
  return (
    <div>
      <Navbar />
      <Description />
      <TweetsBody />
      <StreamsBody />
    </div>
  );
};

export default App;
