import React, { FC, SyntheticEvent, useEffect, useRef, useState } from "react";
import Bonk1 from "./assets/bonk1.png";
import Bonk2 from "./assets/bonk2.png";
import "./App.css";
import { Howl, Howler } from "howler";
import { Grid, Image } from "semantic-ui-react";

const audio = new Audio("./bonk.mp3");

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [bonking, setBonking] = useState(false);
  const addCount = (e: SyntheticEvent) => {
    e.preventDefault();
    audio.play();
    setBonking(true);
    setCount(count + 1);
  };
  const releaseBonk = (e: SyntheticEvent) => {
    e.preventDefault();
    // audio.pause();
    // audio.currentTime = 0;
    setBonking(false);
  };

  return (
    <div className="App">
      <h1 className="counter">Times Bonked: {count}</h1>
      <Grid centered>
        <Grid.Row>
          <Grid.Column largeScreen={8} widescreen={8} mobile={10}>
            <Image
              src={bonking ? Bonk2 : Bonk1}
              onTouchStart={(e: SyntheticEvent) => addCount(e)}
              onTouchEnd={(e: SyntheticEvent) => releaseBonk(e)}
              onMouseDown={(e: SyntheticEvent) => addCount(e)}
              onMouseUp={(e: SyntheticEvent) => releaseBonk(e)}
              fluid
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
      {/* <div className="imageContainer"></div> */}
    </div>
  );
};

export default App;
