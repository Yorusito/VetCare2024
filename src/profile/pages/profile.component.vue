<template>
  <div class="profile-container">
    <h1 class="profile-title">Profile</h1>
    <div class="profile-info">
      <img :src="user.photo" alt="Profile Photo" class="profile-photo" />
      <div class="details-container">
        <div class="attributes">
          <p>Name: </p>
          <p>Email: </p>
          <p>Gender: </p>
          <p>Birthdate: </p>
        </div>
        <div class="data">
          <div class="editable-data">
            <p>{{ user.name }}</p>
            <i class="fas fa-pencil"></i>
          </div>
          <div class="editable-data">
            <p>{{ user.email }}</p>
            <i class="fas fa-pencil"></i>
          </div>
          <div class="editable-data">
            <p>{{ user.gender }}</p>
            <i class="fas fa-pencil"></i>
          </div>
          <div class="editable-data">
            <p>{{ user.birthDate }}</p>
            <i class="fas fa-pencil"></i>
          </div>
        </div>
      </div>
    </div>
    <router-link to="/petprofile">
      <button class="view-pets-button">See pets</button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: 'Berta Palomino',
        email: 'berta.palomino@gmail.com',
        gender: 'Femenino',
        birthDate: '15/10/1992',
        photo: 'https://www.ibercaja.es/public/img/particulares/productos/principal/cuenta-joven.jpg', // Reemplaza con la URL real de la foto
      }
    };
  },
};
</script>

<style scoped>
/* Ajustes generales */
.profile-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: #f2f9f6; /* Fondo suave y amigable */
}

/* Título */
.profile-title {
  font-family: 'Nunito', sans-serif;
  color: #2c3e50;
  font-size: 2.8rem; /* Ajuste para darle un poco más de presencia */
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

/* Contenedor de la información del perfil */
.profile-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 30px; /* Aumento de padding para más espacio visual */
  gap: 40px;
}

/* Foto de perfil */
.profile-photo {
  width: 260px;
  height: 260px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #31b4a7;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Contenedor de los atributos y datos */
.details-container {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 20px; /* Reducido de 50px a 20px para acercar los textos */
  align-items: center; /* Asegura que los textos estén alineados verticalmente */
}

/* Atributos */
.attributes p {
  font-family: 'Nunito', sans-serif;
  font-size: 1.1rem; /* Mantener legibilidad */
  color: #27ae60;
  margin-bottom: 45px;
  font-weight: bold;
  text-align: right;
  line-height: 1.5rem; /* Asegura que la línea de texto esté alineada con los datos */
}

/* Datos */
.data p {
  font-family: 'Nunito', sans-serif;
  font-size: 1.1rem;
  color: #2c3e50;
  margin-bottom: 30px;
  background: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  width: 280px; /* Un poco más estrecho para acercar los recuadros a los textos */
  text-align: center;
}

/* Botón para ver las mascotas */
.view-pets-button {
  font-family: 'Nunito', sans-serif;
  padding: 12px 30px; /* Ajuste en el padding para hacerlo más consistente */
  background-color: #31b4a7;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  margin-top: 30px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.view-pets-button:hover {
  background-color: #2a9389;
  transform: translateY(-3px);
}

/* Ajuste responsivo */
@media screen and (max-width: 600px) {
  .profile-info {
    flex-direction: column;
    align-items: center;
  }

  .attributes,
  .data {
    text-align: center;
  }
}
</style>
