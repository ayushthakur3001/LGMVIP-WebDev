import './blog.scss'
import react from '../blog/react.jpg'
import angular from '../blog/angular.png'
import java from '../blog/java.png'
function Blog() {
    return (
        <>
        <div className="blog">
            
            <h1>Blog</h1>
            
            <div className="container">
                <div className="card">
                    <img src={react} alt="" />
                    <h2>React JS Basics</h2>
                    <h3>15 July 2021</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing eliterspiciatis adipisci repudiandae voluptatem verquia</p>
                    <button>Read</button>
                </div>
                <div className="card">
                    <img src={angular} alt="" />
                    <h2>Angular js</h2>
                    <h3>16 July 2021</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing eliterspiciatis adipisci repudiandae voluptatem verquia</p>
                    <button>Read</button>
                </div>
                <div className="card">
                    <img src={java} alt="" />
                    <h2>Javscript</h2>
                    <h3>17 July 2021</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing eliterspiciatis adipisci repudiandae voluptatem verquia</p>
                    <button>Read</button>
                </div>
            </div>
            
        </div>
        </>
    )
}

export default Blog
