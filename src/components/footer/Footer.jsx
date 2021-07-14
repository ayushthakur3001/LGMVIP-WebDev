import "./fotter.scss";

import img1 from "../footer/img1.jpg";
import pic2 from "../footer/pic2.png";
import img2 from "../footer/img2.jpg";
import linked from "../footer/linked.png";
import face from "../footer/face.png";
function Footer() {
  return (
    <>
      <div className="footer" id="team">
        <h2>WebMaker Team</h2>
        <div className="team">
          <div className="card">
            <div className="con">
              <img src={img1} alt="img.." />
            </div>
            <p>Alex</p>
            <p>Back-end Developer</p>
          </div>
          <div className="card">
            <div className="con">
              <img src={pic2} alt="img.." />
            </div>
            <p>Ayush Thakur</p>
            <p>Front-end Developer</p>
          </div>
          <div className="card">
            <div className="con">
              <img src={img2} alt="img.." />
            </div>
            <p>George</p>
            <p> SEO Expert</p>
          </div>
        </div>
        <div className="foot">
          {/* <div className="content"> */}
            <div className="address">
              <h3>Office Address</h3>
              <p>Himachal Pradesh</p>
              <p>Shimla , Mall Road, 171003</p>

            </div>
            <div className="follow">
              <h3>Follow Us</h3>
              <div className="images">
              <img src={linked} alt="img.." />
              <img src={face} alt="img.." />
              </div>
              
            </div>
            <div className="cont">
              <h3>Contact Us</h3>
              <p>+123 456 789</p>
              <p>webmaker@gmail.com</p>
            </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Footer;
