import './contact.scss'
import map from '../contact/map.png'
function Contact() {
    return (
        <>
        <div className="contact" id="contact">
            <div className="left">
                <img src={map} alt="img.."/>
            </div>
            <div className="right">
                <p>Contact</p>
                <form>
                <div className="block">
                    
                    <label className="lab">Name</label>
                    <input type="text"></input>
                </div>
                <div className="block">
                    <label className="lab">Email Address</label>
                    <input type="email"></input>
                </div>
                <div className="block">
                    <label className="lab">Subject</label>
                    <input type="text"></input>
                </div>
                <div className="block">
                    <label className="lab">Message</label>
                    <textarea rows="7" type="text"></textarea>
                </div>

                <button>Send</button>

                </form>
            </div>
            
        </div>
        </>
    )
}

export default Contact
