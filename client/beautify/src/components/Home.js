import "./home.css"
function Home() {
    return (
        <div class="header">
            <button class="register-btn" type="button">Register your Salon with Us!</button>
            <form>
                <h1>Find Best Salons Near You!</h1>
                <div class="form-box">
                    <input type="text" class="search-field services" placeholder="Services.." />
                    <input type="text" class="search-field location" placeholder="Location" />
                    <button class="search-btn" type="button">Search</button>
                </div>
            </form>
        </div>

    );
}

export default Home;
