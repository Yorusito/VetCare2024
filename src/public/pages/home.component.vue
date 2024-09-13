<script setup>
import {ref} from 'vue';

const userName = "John Doe";
const upcomingAppointments = ref([
  { id: 1, petName: "Blanqui", date: "15/09/2023", veterinary: "Petzy Veterinary", description: "Monthly Wash" },
  { id: 2, petName: "Rex", date: "20/09/2023", veterinary: "Happy Tails", description: "Vaccination" }
]);

</script>

<template>
  <div class="home-container">
    <!-- Bienvenida -->
    <section class="welcome-section">
      <h1>Welcome, {{ userName }}!</h1>
      <p>We hope you and your pets are doing great!</p>
    </section>

    <!-- Accesos rápidos -->
    <section class="quick-access">
      <pv-button class="quick-btn" label="New Appointment" icon="pi pi-calendar-plus" @click="goTo('/appointment')" />
      <pv-button class="quick-btn" label="My Pets" icon="pi pi-paw" @click="goTo('/petprofile')" />
      <pv-button class="quick-btn" label="Store" icon="pi pi-shopping-bag" @click="goTo('/store')" />
      <pv-button class="quick-btn" label="Profile" icon="pi pi-user" @click="goTo('/profile')" />
    </section>

    <!-- Próximas citas -->
    <section class="appointments-section">
      <h2>Upcoming Appointments</h2>
      <div v-if="upcomingAppointments.length">
        <div v-for="appointment in upcomingAppointments" :key="appointment.id" class="appointment-card">
          <h3>{{ appointment.petName }} - {{ appointment.veterinary }}</h3>
          <p><strong>Date:</strong> {{ appointment.date }}</p>
          <p><strong>Description:</strong> {{ appointment.description }}</p>
        </div>
      </div>
      <div v-else>
        <p>No upcoming appointments.</p>
      </div>
    </section>

    <!-- Sección de promociones -->
    <section class="promotions-section">
      <h2>Special Offers</h2>
      <p>Check out our latest promotions for your furry friends!</p>
      <pv-button label="Go to Store" class="store-btn" icon="pi pi-shopping-cart" @click="goTo('/store')" />
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    goTo(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
.home-container {
  padding: 20px;
  font-family: 'Inria Sans', sans-serif;
}

/* Sección de bienvenida */
.welcome-section {
  text-align: center;
  margin-bottom: 40px;
}

.welcome-section h1 {
  font-size: 2.5rem;
  color: #31b4a7;
}

.welcome-section p {
  font-size: 1.2rem;
  color: #555;
}

/* Accesos rápidos */
.quick-access {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}

.quick-btn {
  background-color: #31b4a7;
  color: white;
  border-radius: 10px;
  padding: 15px;
}

.quick-btn:hover {
  background-color: #2a9389;
}

/* Sección de citas */
.appointments-section {
  margin-bottom: 40px;
}

.appointments-section h2 {
  font-size: 1.8rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.appointment-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 20px;
}

.appointment-card h3 {
  font-size: 1.2rem;
  color: #2c3e50;
}

.appointment-card p {
  font-size: 1rem;
  color: #555;
}

/* Sección de promociones */
.promotions-section {
  text-align: center;
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 8px;
}

.promotions-section h2 {
  font-size: 1.8rem;
  color: #31b4a7;
}

.store-btn {
  margin-top: 20px;
  background-color: #31b4a7;
  color: white;
}
</style>
