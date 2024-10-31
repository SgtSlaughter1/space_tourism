<template>
    <div class="crew container-fluid">
        <div class="row">
            <div class="col-md-12 ">
                <h2 class="text-white">
                    <span class="mx-4 text-secondary">02</span> MEET YOUR CREW
                </h2>
                <div v-if="activeCrewMember" class="card d-flex flex-column flex-lg-row">
                    <!-- Crew Info Section -->
                    <div class="card-body col-lg-6 d-flex flex-column justify-content-center text-center">
                        <p class="card-text">{{ activeCrewMember.role }}</p>
                        <h5 class="card-title">{{ activeCrewMember.name }}</h5>
                        <p class="card-text2 mb-5">{{ activeCrewMember.bio }}</p>
                        <div class="crew-buttons d-flex justify-content-center mb-3">
                            <button
                                v-for="(crewMember, index) in crew"
                                :key="crewMember.name"
                                @click="updateSelectedCrewMember(index)"
                                :class="{ active: selectedCrewMemberIndex === index }"
                                class="btn btn-outline-light mx-2"
                            ></button>
                        </div>
                    </div>

                    <!-- Crew Image Section -->
                    <div class="col-lg-4 p-0">
                        <img :src="activeCrewMember.images.png" class="img-fluid image" :alt="activeCrewMember.name">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Crew",
    data() {
        return {
            crew: [],
            selectedCrewMemberIndex: 0
        };
    },
    computed: {
        activeCrewMember() {
            return this.crew[this.selectedCrewMemberIndex];
        }
    },
    methods: {
        async fetchCrew() {
            try {
                const response = await fetch('/public/data.json');
                if (!response.ok) throw new Error("Network response was not ok");
                console.log(response)
                const data = await response.json();
                this.crew = data.crew;
            } catch (error) {
                console.error("Error fetching crew:", error);
            }
        },
        updateSelectedCrewMember(index) {
            this.selectedCrewMemberIndex = index;
        }
    },
    async mounted() {
        await this.fetchCrew();
    }
};

</script>

<style scoped>
.crew {
    width: 100%;
    height: 100vh;
    background-image: url(/src/assets/images/crew/background-crew-desktop.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.card {
    background: none;
    width: 80%;
    margin: 20px auto;
    padding: 0;
}

.card-body {
    color: white;
}

.image {
    width: 100%;
}

.card-title {
    font-size: 40px;
    text-transform: uppercase;
    text-align: left;
}

.card-text {
    font-size: 30px;
    text-transform: uppercase;
    text-align: left;
    font-weight: bold;
}

.card-text2 {
    text-align: left;
    width: 70%;
}

.crew-buttons .btn {
    border-radius: 20px;
    width: 30px;
    height: 30px;
}

.crew-buttons .active {
    background-color: white;
    color: white;
}

/* Responsive styling */
@media screen and (max-width: 600px) {
    .crew {
        height: 850px;
    }
    .card-body {
        align-items: center;
    }
    .card-text, .card-title {
        font-size: 20px;
    }
    .card-text2 {
        width: 100%;
    }
    .row > div > h2 {
        font-size: 15px;
        text-align: center;
        margin-top: 10px;
    }
    .crew-buttons .btn {
        border-radius: 15px;
        width: 5px;
        height: 25px;
    }
}

@media screen and (min-width: 601px) and (max-width: 1020px) {
    .crew {
        height: 1500px;
    }
    .row > div > h2 {
        font-size: 35px;
        margin-top: 30px;
        text-align: center;
    }
    .card-text, .card-body {
        font-size: 35px;
        text-align: center;
    }
    .card-text2 {
        font-size: 35px;
        text-align: center;
        width: 100%;
        letter-spacing: 1.2px;
        margin: 15px 0;
    }
    .image {
        width: 90%;
    }
}
</style>
