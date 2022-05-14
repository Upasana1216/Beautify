import "./SellerCard.css"


function Card() {
    return (
        <div>
            <section>
                <a href="#">
                    <article class="card">
                        <figure class="card-img">
                            <img src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062__340.jpg" />
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
                            <img src="https://cdn.pixabay.com/photo/2014/08/14/14/21/shish-kebab-417994__340.jpg" />
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
                            <img src="https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg" />
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
