<template>
    <div class="destination container-fluid">
        <div class="row">
            <div class="col-12">
                <h2 class="text-white">
                    <span class="mx-4 text-secondary">01</span> PICK YOUR DESTINATION
                </h2>

                <transition name="fade">
                    <div v-if="activeDestination" class="card h-100 d-flex flex-column flex-lg-row">
                        <div class="col-lg-6 p-0">
                            <img :src="activeDestination.images.png" class="img-fluid" :alt="activeDestination.name">
                        </div>
                        <div class="card-body col-lg-6 d-flex flex-column">
                            <div class="location-buttons d-flex justify-content-center">
                                <button
                                    v-for="(destination, index) in destinations"
                                    :key="destination.id"
                                    @click="updateSelectedDestination(index)"
                                    :class="{ active: selectedDestinationIndex === index }"
                                    class="btn mx-2"
                                >
                                    {{ destination.name }}
                                </button>
                            </div>
                            <h5 class="card-title my-3">{{ activeDestination.name }}</h5>
                            <p class="card-text">{{ activeDestination.description }}</p>
                            <hr>
                            <div class="d-flex total">
                                <p class="distance">Avg. Distance: <span>{{ activeDestination.distance }}</span></p>
                                <p class="time">Travel Time: <span>{{ activeDestination.travel }}</span></p>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Destination",
    data() {
        return {
            destinations: [],
            selectedDestinationIndex: 0
        };
    },
    computed: {
        activeDestination() {
            return this.destinations[this.selectedDestinationIndex];
        }
    },
    methods: {
        async fetchDestinations() {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                this.destinations = data.destinations;
            } catch (error) {
                console.error("Error fetching destinations:", error);
            }
        },
        updateSelectedDestination(index) {
            this.selectedDestinationIndex = index;
        }
    },
    async mounted() {
        await this.fetchDestinations();
    }
};
</script>

<style scoped>
.destination {
    width: 100%;
    height: 100vh;
    background-image: url(/src/assets/images/destination/background-destination-desktop.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.card {
    background: none;
    margin: 15px auto;
    width: 80%;
}

.card-body {
    color: white;
    padding: 10px;
}

.card-title {
    font-size: 50px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 1px;
    text-align: center;
}

.card-text {
    font-size: 20px;
}

.total > p {
    margin: 10px 25px;
    font-size: 15px;
}

.total > p > span {
    display: block;
    font-size: 20px;
    font-weight: bold;
}

.location-buttons > .btn {
    padding: 8px 16px;
    border: none;
    color: white;
}

.location-buttons > .active {
    color: white;
    border-bottom: 3px solid white;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

@media screen and (max-width: 600px) {
    .destination {
        height: 870px;
    }

    .row > div > h2 {
        font-size: 15px;
        margin-top: 10px;
    }

    .location-buttons > .btn {
        font-size: 15px;
        margin-top: 10px;
        padding: 5px;
    }

    .card-title {
        font-size: 30px;
    }

    .total {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .total > p {
        margin: 10px 25px;
    }

    .card-text {
        font-size: 15px;
    }
}

@media screen and (min-width: 601px ) and (max-width: 1020px) {
    .row > div > h2 {
        font-size: 25px;
        margin-top: 10px;
    }

    .location-buttons > .btn {
        font-size: 25px;
        margin-top: 10px;
    }

    .card-title {
        font-size: 40px;
    }

    .total {
        align-items: center;
        justify-content: center;
    }

    .total > p {
        margin: 10px 25px;
        font-size: 20px;
    }

    .card-text {
        font-size: 25px;
    }
}
</style>
