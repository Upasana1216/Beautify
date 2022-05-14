import "./dash.css"
import SellerCard from "./SellerCard"
function Dashboad() {
    return (
        <div>
            <input type="checkbox" id="nav-toggle" />
            <div class="sidebar">
                <div class="sidebar-brand">
                    <h2><span><i class="fab fa-accusoft"></i></span><span id="kleenpulse">LiquidTime</span></h2>
                </div>
                <div class="sidebar-menu">
                    <ul>
                        <li>
                            <a href="#" class="active"><span class="fas fa-cubes"></span>
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span class="fas fa-users"></span>
                                <span>My Details</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span class="fas fa-clipboard-list"></span>
                                <span>My Services</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span class="fas fa-shopping-bag"></span>
                                <span>Availability</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span class="fas fa-receipt"></span>
                                <span>Prices</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span class="fa fa-user-circle"></span>
                                <span>Logout</span>
                            </a>
                        </li>
                        <li>
                            <a href="#"><span class="fas fa-clipboard"></span>
                                <span>Customer Reviews</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="main-wrapper">
                <div class="main-content">
                    <header>
                        <h2 class="heading" id="dashboard">
                            Dashboard
                        </h2>
                        <label for="nav-toggle">
                            <span class="fas fa-bars"></span>
                        </label>

                        <div class="search">
                            <div class="search-rotate">
                                <div class="icon"></div>
                            </div>
                            <div class="input">
                                <input type="text" placeholder="search" id="mysearch" autocomplete="off" onkeydown="display(this)" />

                            </div>

                        </div>

                       
                    </header>
                    <div style={{position:"sticky"}}>
                        <SellerCard></SellerCard>
                        <SellerCard></SellerCard>
                         <SellerCard></SellerCard>
                    </div>
                    
                </div>
            </div>

        </div>

    );
}

export default Dashboad;
