<template>
    <div id="home" class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                <h3 class="text-uppercase">So, you want to travel to</h3>
                <h1 class="display-1 text-white text-uppercase">Space</h1>
                <p id="home-description">
                    Let's face it; if you want to go to space, you might as well genuinely
                    go to outer space and not hover kind of on the edge of it. Well sit
                    back, and relax because we'll give you a truly out of this world
                    experience!
                </p>
            </div>
            <div class="col-lg-5 d-flex justify-content-center align-items-center">
                <router-link to="/destination" class="explore-button">Explore</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
};
</script>

<style scoped>
#home {
    background-image: url("/images/home/background-home-desktop.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
    color: white;
    padding-top: 200px;
    padding-left: 40px;
}

.explore-button {
    width: 174px;
    height: 174px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0b0d17;
    text-decoration: none;
    font-size: 23px;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.explore-button:hover {
    box-shadow: 0 0 0 50px rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
    #home {
        background-image: url("/images/home/background-home-tablet.jpg");
        height: 100%;
    }
}

@media (max-width: 480px) {
    #home {
        background-image: url("/images/home/background-home-mobile.jpg");
        height: 100%;
    }
}
</style>