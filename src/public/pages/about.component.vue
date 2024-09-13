<template>
  <div class="container">
    <h1>Recommended Pet Services</h1>
    <swiper
        :slides-per-view="3"
        :space-between="30"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        :breakpoints="{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }"
    >
      <swiper-slide v-for="card in cards" :key="card.id">
        <div class="card">
          <img :src="card.imageUrl" alt="Card Image" class="card-img" />
          <div class="card-content">
            <h2>{{ card.title }}</h2>
            <p>Rating: {{ card.rating }} &#9733;</p>
            <p>{{ card.description }}</p>
            <p><strong>📍 Address:</strong> {{ card.address }}</p>
            <p><strong>&#128222; Phone:</strong> {{ card.phoneNumber }}</p>
            <div class="card-footer">
              <pv-button icon="pi pi-phone" label="Call" class="call-btn" />
              <pv-button icon="pi pi-share-alt" label="Share" class="share-btn" />
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'VetCare Animal Clinic',
          rating: 4.5,
          description: 'Full-service animal clinic with emergency services.',
          address: '123 Pet St, Cityville',
          phoneNumber: '(123) 456-7890',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          id: 2,
          title: 'Happy Paws Veterinary',
          rating: 4.7,
          description: 'Professional care for your pets. Open 24/7.',
          address: '456 Animal Ave, Townsville',
          phoneNumber: '(098) 765-4321',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          id: 3,
          title: 'Healthy Pets Clinic',
          rating: 4.8,
          description: 'Specialized in small animals and exotic pets.',
          address: '789 Critter Ln, Village',
          phoneNumber: '(111) 222-3333',
          imageUrl: 'https://via.placeholder.com/150',
        },
        {
          id: 4,
          title: 'Animal Lovers Care',
          rating: 4.9,
          description: 'Pet care and grooming services.',
          address: '321 Pet World, Bigcity',
          phoneNumber: '(333) 444-5555',
          imageUrl: 'https://via.placeholder.com/150',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

h1 {
  font-family: 'Nunito', sans-serif;
  margin-bottom: 20px;
}

.mySwiper {
  width: 100%;
  max-width: 1200px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid #ddd;
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  width: 100%;
  max-width: 300px;
  background-color: #fff; /* Asegura que el fondo de la tarjeta sea blanco */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra para que se destaque */
}

.card-img {
  width: 100%;
  height: auto;
  max-width: 150px; /* Limitar el tamaño máximo de la imagen */
  margin-bottom: 10px;
}

.card-content {
  padding: 10px;
}

.card-footer {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
}

.call-btn {
  background-color: #31b4a7;
  color: white;
  font-size: 1rem;
  padding: 8px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.call-btn:hover {
  background-color: #2a9389;
}

.share-btn {
  background-color: #3a6cc5;
  color: white;
  font-size: 1rem;
  padding: 8px 20px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

.share-btn:hover {
  background-color: #3258a1;
}
</style>
