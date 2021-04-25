import React, { useState } from "react";
import "../style/Face.css";
import VideoRecorder from "react-video-recorder";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
const config = {
  header: {
    "Content-Type": "application/json",
  },
};
const Face = () => {
  const history = useHistory();
  const [video, setVideo] = useState("");

  //setVideo("");
  const submitVideo = async (e) => {
    console.log(video);
    const { data } = await axios.post("/upload", video, config);
    console.log(data);
    //history.push("/voice");
    // setVideo("");
  };

  return (
    <>
      <div className="body__inner">
        <div className="face">
          <h1>face recognition</h1>
          <VideoRecorder
            dataAvailableTimeout={null}
            showReplayControls
            Disconnectedview={null}
            onRecordingComplete={(videoBlob) => {
              // Do something with the video...
              setVideo(videoBlob);
            }}
          />
          <div className="button">
            <Button
              color="primary"
              variant="contained"
              disabled={!video}
              onClick={submitVideo}
            >
              SAVE &amp; CONTINUE
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Face;
