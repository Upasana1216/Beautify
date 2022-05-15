import "./PageStyle.css";
import header from "../../img/header.png";
import service from "../../img/Service.png"
import logo from "../../img/logo.png";
import star from "../../img/star.jpg";
import Footer from "../../components/Footer";
function Page() {
    return (
        <div className="page" style={{ backgroundColor: "black" }}>
            <div className="topnav1">
                <a href="./">Home</a>
                <a href="./">Appointments</a>
                <a href="./">Salon Detailss</a>
                <a href="./" style={{ float: "right" }}>Book your salon with us</a>
            </div>
            <div className="header1">
                <img src={header} alt="header" className="headerImg"></img>
                <div class="center">Beautify With Lakme</div>
            </div>
            <div className="row1">
                <div className="leftcolumn1">
                    <div className="card1">
                        <div className="headingSer"><b>Your Service:</b> Charcoal Face Mask</div>
                        <h4>Appointment Date: May 25, 2022</h4>
                        <img src={service} className="fakeimg1" style={{ height: "200px" }} alt="service"></img>
                        <button className="buttonService">Book my Appointment</button>
                        <p>Know more about this service...</p>
                        <p>Detoxify your skin in only 15 minutes with the purifying Garnier Charcoal Face Mask. The charcoal face mask works effectively to help remove facial impurities, toxins, and blemishes while reducing the size of your pores and firming up your face.</p>
                        <p>Detoxify your skin in only 15 minutes </p>

                    </div>
                    <div className="card1">
                        <div className="headingSer">Reviews from our customers</div>
                        <h5>Date: May 22, 2022</h5>
                        <img src={star} className="fakeimg1" style={{ height: "100px", width: "400px" }}></img>
                        <p>Anita Bajpaye</p>
                        <p>Great Service, I didn't have to wait for even 5 mins. Staff was very gentle and products were also really good. Now they are may every time salonn </p>
                    </div>
                </div>
                <div className="rightcolumn1" style={{ height: "800px" }}>
                    <div className="card1">
                        <h3>About Us</h3>
                        <img src={logo} alt="logo" className="fakeimg1" style={{ height: "100px" }}></img>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    </div>
                    <div className="card1">
                        <h3>Popular Services</h3>
                        <div className="fakeimg1"><p style={{ color: "white" }}>Service 1</p></div>
                        <div className="fakeimg1"><p style={{ color: "white" }}>Service 2</p></div>
                        <div className="fakeimg1"><p style={{ color: "white" }}>Service 3</p></div>
                        <div className="fakeimg1"><p style={{ color: "white" }}>Service 3</p></div>
                    </div>
                    <div className="card1" style={{padding:"20px"}}>
                        <h3>Follow Us Here</h3>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        
                        <p>Youtube</p>
                        <h3>For more information</h3>
                       <p>Beautify, lucknow and Japur</p>
                       <p >Beautify, lucknow and Japur</p>
                    </div>
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
}

export default Page;
