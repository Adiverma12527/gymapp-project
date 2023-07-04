import React, { useRef } from 'react';
import './Training.css';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

const data = {
  img1: 'https://images.pexels.com/photos/116079/pexels-photo-116079.jpeg?auto=compress&cs=tinysrgb&w=400',
  img2: 'https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg?auto=compress&cs=tinysrgb&w=400',
  img3: 'https://images.pexels.com/photos/1552248/pexels-photo-1552248.jpeg?auto=compress&cs=tinysrgb&w=400',
  img4: 'https://images.pexels.com/photos/4047039/pexels-photo-4047039.jpeg?auto=compress&cs=tinysrgb&w=400',
  img5: 'https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&w=400',
  img6: 'https://images.pexels.com/photos/1480520/pexels-photo-1480520.jpeg?auto=compress&cs=tinysrgb&w=400',
  img7: 'https://images.pexels.com/photos/6455805/pexels-photo-6455805.jpeg?auto=compress&cs=tinysrgb&w=400',
  img8: 'https://images.pexels.com/photos/7674493/pexels-photo-7674493.jpeg?auto=compress&cs=tinysrgb&w=400',
};

const Training = () => {
  const containerRef = useRef(null);

  const handleClick = (scrollOffset) => {
    containerRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="Training">
      <p className="h2">MEET OUR TEAM</p>
      <p style={{ color: 'white', margin: '20px' }}>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          The programs can help you maintain your workout routine
          <br />
        </p>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          no matter where you are. Some apps are free, w
          <br />
        </p>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>a few dollars a month to access pr</p>
      </p>

      <div className="scrolling-container">
        <div className="scrolling" ref={containerRef}>
          <div>
            <img src={data.img1} alt="image1"    height="350px" width="350px"/>
            <p className="pi">
              aesthetic <BsFillArrowRightCircleFill onClick={() => handleClick(350)} />
            </p>
          </div>
          <div>
            <img src={data.img2} alt="image2"    height="350px" width="350px"/>
            <p className="pi">
              aesthetic <BsFillArrowRightCircleFill onClick={() => handleClick(350)} />
            </p>
          </div>
          <div>
            <img src={data.img3} alt="image3"   height="350px" width="350px" />
            <p className="pi">
              aesthetic <BsFillArrowRightCircleFill onClick={() => handleClick(350)} />
            </p>
          </div>
          <div>
            <img src={data.img4} alt="image4"   height="350px" width="350px" />
            <p className="pi">
              aesthetic <BsFillArrowRightCircleFill onClick={() => handleClick(350)} />
            </p>
          </div>
          <div>
            <img src={data.img5} alt="image5"    height="350px" width="350px"/>
            <p className="pi">
              aesthetic <BsFillArrowRightCircleFill onClick={() => handleClick(350)} />
            </p>
          </div>
          <div>
            <img src={data.img6} alt="image6"   height="350px" width="350px" />
            <p className="pi">
              aesthetic <BsFillArrowRightCircleFill onClick={() => handleClick(350)} />
            </p>
          </div>
          <div>
            <img src={data.img7} alt="image7"  height="350px" width="350px" />
            <p className="pi">
              aesthetic <BsFillArrowRightCircleFill onClick={() => handleClick(350)} />
            </p>
          </div>
          <div>
            <img src={data.img8} alt="image8"   height="350px" width="350px" />
            <p className="pi">
              aesthetic <BsFillArrowRightCircleFill onClick={() => handleClick(350)} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Training;