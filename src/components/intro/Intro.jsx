import "./intro.scss";
import back from "../intro/back.png";
function Intro() {
  return (
    <>
      <div className="intro" id="intro">
        <img src={back} alt="img.." />
        <h1>WebMaker</h1>
        <div className="navbar">
          <ul>
            <li className="active">Home</li>
            <li>
              <a href="#project">Projects</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>

            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <p>One page promising to fill all your needs!</p>
          <h2>“We don't just build websites, we build websites that SELLS”</h2>
          <div className="btns">
            <button className="btn1">Learn More</button>
            <button className="btn2">Learn More</button>
          </div>
        </div>

        <div className="dots">
          <span className="dot"></span>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </>
  );
}

export default Intro;
