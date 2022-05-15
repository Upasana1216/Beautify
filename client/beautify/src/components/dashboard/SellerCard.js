import "./SellerCard.css"
import logo from "../../img/logo.png"

function Card() {
    return (
        <div>
            <section>
                <a href="#">
                    <article class="card">
                        <figure class="card-img">
                            <img src={logo} />
                            <figcaption>
                               Set you Availability
                            </figcaption>
                        </figure>
                        <div class="card-body">
                        <h3 class="card-title">Add Delete Update You Services</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu gravida urna, in venenatis leo.</p>
                        </div>
                    </article>
                </a>
                <a href="#">
                    <article class="card">
                        <figure class="card-img">
                            <img src={logo} />
                            <figcaption>
                                Check Reviews from your Customers
                            </figcaption>
                        </figure>
                        <div class="card-body">
                        <h3 class="card-title">Add Delete Update You Services</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu gravida urna, in venenatis leo.</p>
                        </div>
                    </article>
                </a>
                <a href="#">
                    <article class="card">
                        <figure class="card-img">
                            <img src={logo} />
                            <figcaption>
                               Services
                            </figcaption>
                        </figure>
                        <div class="card-body">
                            <h3 class="card-title">Add Delete Update You Services</h3>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu gravida urna, in venenatis leo.</p>
                        </div>
                    </article>
                </a>
            </section>
        </div>

    );
}

export default Card;
