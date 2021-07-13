import './price.scss'
function Price() {
    return (
        <>
        <div className="price">
            <h1>Pricing Table</h1>

            <div className="container">
                <div className="card">
                    <h3>single shared hosting</h3>
                    <h2>$0.99/mo</h2>
                    <p>1 Website</p>
                    <p>Limited Bandwidth</p>
                    <p>Free SSL certificate</p>
                    <button className="btn1">Add to cart</button>
                    
                    
                </div>
                <div className="card">
                    <h3>Premium shared hosting</h3>
                    <h2>$2.89/mo</h2>
                    <p>Unlimited Websites </p>
                    <p>Unlimited Bandwidth</p>
                    <p>Free Domain</p>
                    <button className="btn">Add to cart</button>
                    
                </div>
                <div className="card">
                    <h3>Business shared hosting</h3>
                    <h2>$3.99/mo</h2>
                    <p>Unlimited Websites </p>
                    <p>Unlimited Bandwidth</p>
                    <p>Daily Backups</p>
                    <button className="btn1">Add to cart</button>
                    
                </div>
            </div>
            
            
            <div className="newsletter">
            <h1>Newsletter Signup</h1>
            <input type="email" placeholder="abc@gmail.com" />
            <button>Sign Up</button>
            </div>
        </div>
        </>
    )
}

export default Price
