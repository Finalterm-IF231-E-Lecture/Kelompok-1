import React, { Component } from "react";
import song from "../bgm.mp3";

class Music extends Component {
  state = {
    audio: new Audio(song),
    isPlaying: false,
  };

  playPause = () => {
    let isPlaying = this.state.isPlaying;
    this.state.audio.loop = true;
    this.state.audio.loop = 0.5;

    if (isPlaying) {
      this.state.audio.pause();
    } else {
      this.state.audio.play();
    }

    this.setState({ isPlaying: !isPlaying });

    if (document.getElementById("audio-on").style.display === "none") {
        document.getElementById("audio-on").style.display = "inline-block";
        document.getElementById("audio-off").style.display = "none";
    } else if (document.getElementById("audio-on").style.display === "inline-block") {
        document.getElementById("audio-on").style.display = "none";
        document.getElementById("audio-off").style.display = "inline-block";
    }
  };

  render() {
    return (
      <div className="sound">
        <button
            className="btn-sound play-music"
            id="btn-music"
            data-toggle="tooltip"
            data-placement="top"
            title="Play music"
            onClick={this.playPause}
        >
            <img id="audio-off" src="image/icons/audiooff.png" alt="" />
            <img id="audio-on" src="image/icons/audioon.png" alt="" style={{display: "none"}} />
        </button>
      </div>
    );
  }
}

export default Music;