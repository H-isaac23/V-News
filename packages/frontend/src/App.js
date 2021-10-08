import "./index.css";
import Navbar from "./components/Navigation/Navigation";
import Description from "./components/Description/Description";
import TweetsBody from "./components/TweetsBody/TweetsBody";
import StreamsBody from "./components/StreamsBody/StreamsBody";
import Footer from "./components/Footer/Footer";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/disclaimer">
          <Disclaimer />
        </Route>
        <Route path="/">
          <Description />
          <TweetsBody />
          <StreamsBody />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
