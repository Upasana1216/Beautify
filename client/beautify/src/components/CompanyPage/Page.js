import "./PageStyle.css";
import header from "../../img/header.png";
import service from "../../img/Service.png"
import logo from "../../img/logo.png"
function Page() {
    return (
        <div>
        <div className="topnav1">
                <a href="./">Link</a>
                <a href="./">Link</a>
                <a href="./">Link</a>
                <a href="./" style={{float:"right"}}>Link</a>
            </div>
            <div className="header1">
               <img src={header} alt="header" className="headerImg"></img>
               <div class="center">Beautify With Lakme</div>
            </div>
            <div className="row1">
                <div className="leftcolumn1">
                    <div className="card1">
                        <div className="headingSer"><b>Your Service:</b> Body Wax</div>
                        <h4>Appointment Date, Dec 7, 2017</h4>
                        <img src={service} className="fakeimg1" style={{height:"200px"}} alt="service"></img>
                        <button className="buttonService">Book my Appointment</button>
                        <p>Know more about this service...</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        
                    </div>
                    <div className="card1">
                        <div className="headingSer">Reviews from our customers</div>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div className="fakeimg1" style={{height:"200px"}}>Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                </div>
                <div className="rightcolumn1">
                    <div className="card1">
                        <h3>About Us</h3>
                        <img src={logo} alt="logo" className="fakeimg1" style={{height:"100px"}}></img>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div className="card1">
                        <h3>Popular Services</h3>
                        <div className="fakeimg1"><p style={{color:"white"}}>Service 1</p></div>
                        <div className="fakeimg1"><p style={{color:"white"}}>Service 2</p></div>
                        <div className="fakeimg1"><p style={{color:"white"}}>Service 3</p></div>
                    </div>
                    <div className="card1">
                        <h3>Follow Us Here</h3>
                        <p>Instagram</p>
                        <p>Instagram</p>
                        <p>Instagram</p>
                    </div>
                </div>
            </div>

            
        </div>
    );
}

export default Page;
