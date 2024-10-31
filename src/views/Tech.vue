<template>
    <div id="technology" class="container-fluid">
        <h1 class="text-uppercase mb-5">03 Space Launch 101</h1>
        <div class="row">
            <div class="col-lg-6 order-lg-2 order-sm-1 mb-4 mb-lg-0">
                <transition name="fade">
                    <img v-if="currentTechnology" :src="currentTechnology.images.portrait" :alt="currentTechnology.name" class="img-fluid" />
                </transition>
            </div>
            <div class="col-lg-6 order-lg-1 order-sm-2 d-flex justify-content-center mt-5 floss">
                <div class="my-5 btnDiv mx-5">
                    <button v-for="(tech, index) in technology" :key="tech.id" @click="setTechnology(index)"
                        class="btn btn-outline-light rounded-circle me-3"
                        :class="{ active: selectedTechnologyIndex === index }">
                        {{ index + 1 }}
                    </button>
                </div>
                <transition name="fade">
                    <div v-if="currentTechnology" class="content">
                        <h3 class="text-uppercase mb-2">The terminology...</h3>
                        <h2 class="display-4 text-white mb-4">{{ currentTechnology.name }}</h2>
                        <p>{{ currentTechnology.description }}</p>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Technology",
    data() {
        return {
            technology: [],
            selectedTechnologyIndex: 0,
        };
    },
    computed: {
        currentTechnology() {
            return this.technology[this.selectedTechnologyIndex];
        }
    },
    methods: {
        async fetchTechnology() {
            try {
                const response = await fetch('/data.json');
                if (!response.ok) throw new Error("Network response was not ok");
                const data = await response.json();
                this.technology = data.technology;
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        },
        setTechnology(index) {
            this.selectedTechnologyIndex = index;
        }
    },
    async mounted() {
        await this.fetchTechnology();
    }
};
</script>

<style scoped>
#technology {
    background-image: url("/images/technology/background-technology-desktop.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 600px;
    color: white;
    padding-left: 100px;
}

#technology img {
    height: 400px;
    width: 400px;
}

#technology h1 {
    padding-top: 10px;
    font-size: 28px;
    color: #a6aac1;
}

.btnDiv {
    display: flex;
    flex-direction: column;
}

.btn {
    margin-bottom: 20px;
    height: 70px;
    width: 70px;
}

.active {
    background-color: white;
    color: black;
}

.fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

/* Responsive styles */
@media (max-width: 768px) {
    #technology {
        background-image: url("/images/technology/background-technology-tablet.jpg");
        height: 100%;
    }
}

@media (max-width: 480px) {
    #technology {
        background-image: url("/images/technology/background-technology-mobile.jpg");
        height: 100%;
        padding: 0 5px;
    }

    #technology h1 {
        font-size: 18px;
    }

    .btnDiv {
        flex-direction: row;
        justify-content: center;
    }

    .btn {
        height: 50px;
        width: 50px;
    }

    .floss {
        flex-direction: column;
    }

    .content {
        margin-top: -70px;
        justify-content: center;
    }
}
</style>
