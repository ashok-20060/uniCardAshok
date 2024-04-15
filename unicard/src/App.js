import "./App.css";

// Components
import Header from "./components/Header";
import WaveBody from "./components/WaveBody";

import backGroundVideo from "./bgVideo.mp4";

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted id="video">
        <source src={backGroundVideo} type="video/mp4" />
      </video>
      <Header />
      <WaveBody />
    </div>
  );
}

export default App;
