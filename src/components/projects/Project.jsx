import './project.scss'
import img1 from '../projects/img1.jpg'
import img2 from '../projects/img2.jpg'
import img3 from '../projects/img3.jpg'
import img4 from '../projects/img4.jpg'
function Project() {
    return (
        <>
        
        <div className="project">
            <h1>Projects</h1>
            <div className="container">
            <div className="card">
                <img src={img1}  alt="img.." />
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor siores aperiam sequi fligendi quaerat voluptate nostrum nesciunt ullam minus impedit asperiores eius</p>
                <button className="btn">View Project</button>

            </div>
            <div className="card">
                <img src={img2}  alt="img.."  />
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor siores aperiam sequi fligendi quaerat voluptate nostrum nesciunt ullam minus impedit asperiores eius</p>
                <button className="btn">View Project</button>

            </div>
            <div className="card">
                <img src={img3}  alt="img.."  />
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor siores aperiam sequi fligendi quaerat voluptate nostrum nesciunt ullam minus impedit asperiores eius</p>
                <button className="btn">View Project</button>

            </div>
            
            <div className="card">
                <img src={img4}  alt="img.."  />
                <h2>Lorem Ipsum</h2>
                <p>Lorem ipsum dolor siores aperiam sequi fligendi quaerat voluptate nostrum nesciunt ullam minus impedit asperiores eius</p>
                <button className="btn">View Project</button>

            </div>


            
        </div>
        </div>
        </>
    )
}

export default Project
