import "./welcome.scss";
import umbrella from "../welcome/umber.png";
import datab from "../welcome/datab.png";
import email from "../welcome/email.png";
import bell from "../welcome/bell.png";
function Welcome() {
  return (
    <>
      <div className="welcome">
        <p>Welcome To WebMaker</p>
        <div className="container">
          <div className="pcontainer">
            <div className="pis">
              <p>A successful website does three things:</p>
              <p>1) It attracts the right kinds of visitors.</p>
              <p>2) Guides them to the main services or product you offer.</p>
              <p>3) Collect Contact details for future ongoing relation</p>
            </div>
            <img src={umbrella} alt="img.." />
          </div>
          <div className="dcontainer">
            <div className="first">
              <div className="imgcontainer">
                <img className="bell" alt="img.." src={bell} />
              </div>
              <h2>Get Notified</h2>
              <p>
                Lorem ipsum dolor siores aperiam sequi facere cumque libero at{" "}
              </p>
              <button className="btn1">Learn More</button>
            </div>
            <div className="first">
              <div className="imgcontainer">
                <img className="email" alt="img.." src={email} />
              </div>
              <h2>Emails</h2>
              <p>
                Lorem ipsum dolor siores aperiam sequi facere cumque libero at{" "}
              </p>
              <button className="btn2">Learn More</button>
            </div>
            <div className="first">
              <div className="imgcontainer">
                <img className="datab" alt="img.." src={datab} />
              </div>
              <h2>Database</h2>
              <p>
                Lorem ipsum dolor siores aperiam sequi facere cumque libero at{" "}
              </p>
              <button className="btn2">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Welcome;
