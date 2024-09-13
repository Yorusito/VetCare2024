<script>
export default {
  name: "maps-view",
  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Veterinaria Los Olivos",
          rating: "4.5 ★",
          address: "Av. Los Olivos 123, Lima",
          phoneNumber: "+51 999 888 777",
          imageUrl: "https://via.placeholder.com/200x100"
        },
        {
          id: 2,
          title: "Clinica Vet Salud",
          rating: "4.7 ★",
          address: "Calle Falsa 456, Lima",
          phoneNumber: "+51 955 666 555",
          imageUrl: "https://via.placeholder.com/200x100"
        },
        {
          id: 3,
          title: "VetCare Central",
          rating: "4.8 ★",
          address: "Jr. Real 789, Lima",
          phoneNumber: "+51 933 444 333",
          imageUrl: "https://via.placeholder.com/200x100"
        }
      ],
      googleMapEmbedURL:
          "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15620.173868197724!2d-77.11399785!3d-11.83222965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1686435004255!5m2!1ses-419!2spe"
    };
  }
};
</script>


<template>
  <div class="content">
    <div class="vetcards">
      <div v-for="card in cards" :key="card.id" class="veterinary">
        <div class="info">
          <h1>{{ card.title }}</h1>
          <h2>{{ card.rating }}</h2>
          <h2>{{ card.address }}</h2>
          <h2>{{ card.phoneNumber }}</h2>
        </div>
        <div class="image-container">
          <img :src="card.imageUrl" alt="veterinary local" class="veterinary-image">
        </div>
      </div>
    </div>
    <iframe
        :src="googleMapEmbedURL"
        width="600"
        height="450"
        style="border:0; margin-top: 40px;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>


<style scoped>
* {
  font-family: 'Nunito', sans-serif;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

/* Contenedor principal */
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 240, 203, 1);
  padding: 20px;
}

/* Estilos para las tarjetas de veterinarias */
.vetcards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.veterinary {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.veterinary:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.info h1 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.info h2 {
  font-size: 1rem;
  color: #27ae60;
  margin: 5px 0;
}

/* Imagen de la veterinaria */
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.veterinary-image {
  width: 200px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}

/* Ajuste responsivo */
@media screen and (max-width: 768px) {
  .veterinary {
    flex-direction: column;
    text-align: center;
  }

  .veterinary-image {
    width: 100%;
    height: auto;
  }
}

</style>