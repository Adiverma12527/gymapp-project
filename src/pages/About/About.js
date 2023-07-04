import React, { useState } from 'react';
import './About.css';
import YouTube, { YouTubeProps } from 'react-youtube';

const About = () => {
  const [playVideo, setPlayVideo] = useState(false);

  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // Pause the video initially
    event.target.pauseVideo();
  };

  const opts: YouTubeProps['opts'] = {
    height: '300',
    width: '480',
    playerVars: {
      autoplay: 0, // Set autoplay to 0 initially
    },
  };

  const handleVideoClick = () => {
    setPlayVideo(true); // Start playing the video when clicked
  };

  return (
    <div className="About">
      <div className="aboutus">
        <div className="youtube">
          <YouTube
            videoId="onUddEsHsK4"
            opts={opts}
            onReady={onPlayerReady}
            onPlay={handleVideoClick} // Start playing the video when clicked
          />
        </div>
        <div className="para">
          <h1 style={{ color: 'red' }}>About Us</h1>
          <p className="paragraph1">
            A gymnasium, also known as a gym, is an indoor location for athletics. The word is derived
            from the ancient Greek term "gymnasion". They are commonly found in athletic and fitness centers,
            and as activity and learning spaces in educational institutions. "Gym" is also slang for "fitness".
          </p>
          <div className="learnnow">Learn Now</div>
        </div>
      </div>

      <div className="whychooseus">
        <div className="paragraph">
          <h1 className="headings">Why Choose Us?</h1>
          <h3 className="h3">
            <div className="span"></div>..Consultations with Expert
          </h3>
          <p className="paragraph2">
            Research consultations are meetings with librarians that Research consultations are meetings with librarians that.
          </p>
          <h3 className="h3">
            <div className="span"></div>..Best workout Facilities
          </h3>
          <p className="paragraph3">
            There are probably thousands of gyms in India. But what There are probably thousands of gyms in India. But what’s.
          </p>
        </div>
        <div className="video">
          {playVideo ? (
            <YouTube videoId="ExBlR--AbHA" opts={opts} onReady={onPlayerReady} />
          ) : (
            <div className="thumbnail" onClick={handleVideoClick}>
              {/* Display a thumbnail or play button image */}
              <img src="play-button.png" alt="Play Video" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;