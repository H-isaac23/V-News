import "./index.css";
import Navbar from "./components/Navigation/Navigation";
import Description from "./components/Description/Description";
import TweetsBody from "./components/TweetsBody/TweetsBody";

const App = () => {
  return (
    <div>
      <Navbar />
      <Description />
      <TweetsBody />
    </div>
  );
};

export default App;
