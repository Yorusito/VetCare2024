<template>
  <div>
    <!-- Toast para notificaciones -->
    <pv-toast></pv-toast>

    <!-- Header -->
    <header v-if="showHeader">
      <pv-toolbar class="header-bar">
        <template #start>
          <!-- Botón de Menú -->
          <pv-button
              class="p-button-text text-white"
              icon="pi pi-bars"
              @click="drawer = !drawer"
          ></pv-button>

          <!-- Logo redirige al Home -->
          <router-link to="/home">
            <img
                alt="user header"
                src="https://upc-coders.github.io/MapVet-LandingPage-Final/assets/images/logo2.png"
                class="header-logo"
            />
          </router-link>

          <!-- Título del sitio -->
          <h1 class="header-title">VetCare</h1>
        </template>

        <!-- Menú de navegación -->
        <template #end>
          <nav class="nav-links">
            <router-link v-if="showFaqLink" to="/faq">
              <pv-button icon="pi pi-question-circle" class="header-btn" label="FAQ" />
            </router-link>
            <router-link v-if="showPetProfileLink" to="/petprofile">
              <pv-button icon="pi pi-paw" class="header-btn" label="PetProfile" />
            </router-link>
            <router-link v-if="showRecommendationsLink" to="/about">
              <pv-button icon="pi pi-thumbs-up" class="header-btn" label="Recommendations" />
            </router-link>
            <router-link v-if="showUserProfileLink" to="/profile">
              <pv-button icon="pi pi-user" class="header-btn" label="Profile" />
            </router-link>
            <router-link v-if="showMapLink" to="/map">
              <pv-button icon="pi pi-map-marker" class="header-btn" label="Map" />
            </router-link>
            <router-link v-if="showStoreLink" to="/store">
              <pv-button icon="pi pi-shopping-cart" class="header-btn" label="Store" />
            </router-link>
            <router-link v-if="showAppointmentLink" to="/appointment">
              <pv-button icon="pi pi-calendar" class="header-btn" label="Appointment" />
            </router-link>
          </nav>
        </template>
      </pv-toolbar>
    </header>

    <!-- Sidebar -->
    <pv-sidebar v-model:visible="drawer">
      <!-- Contenido del sidebar -->
      <div class="sidebar-content">
        <ul class="sidebar-list">
          <li v-for="item in items" :key="item.label" class="sidebar-item">
            <router-link :to="item.to">
              <span>{{ item.label }}</span> <!-- Ahora muestra correctamente el valor de item.label -->
            </router-link>
          </li>
        </ul>
      </div>
    </pv-sidebar>

    <!-- Contenido principal -->
    <RouterView />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      items: [
        { label: "Pets", to: "/petprofile" },
        { label: "Map", to: "/map" },
        { label: "Recommendations", to: "/about" },
        { label: "Appointments", to: "/appointment" },
        { label: "Store", to: "/store" },
        { label: "Faq", to: "/faq" },
        { label: "Profile", to: "/profile" },
      ],
    };
  },
  computed: {
    showHeader() {
      const allowedRoutes = [
        "/petprofile",
        "/map",
        "/home",
        "/about",
        "/store",
        "/faq",
        "/profile",
        "/appointment",
      ];
      return allowedRoutes.includes(this.$route.path);
    },
  },
};
</script>

<style scoped>
/* Header */
.header-bar {
  background-color: #31b4a7;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.header-logo {
  cursor: pointer;
  width: 50px;
  height: auto;
  margin-right: 15px;
  transition: transform 0.3s ease;
}

.header-logo:hover {
  transform: scale(1.1);
}

.header-title {
  font-size: 24px;
  color: white;
  font-weight: bold;
  margin-left: 10px;
}

.nav-links {
  display: flex;
  gap: 15px;
}

.header-btn {
  color: white;
  font-weight: bold;
  background: transparent;
}

.header-btn:hover {
  color: #ffdd57;
}

/* Sidebar */
.sidebar-content {
  padding: 20px;
}

.sidebar-list {
  list-style-type: none;
  padding: 0;
}

.sidebar-item {
  margin-bottom: 15px;
  font-size: 18px;
  display: block;
  text-align: left;
}

.sidebar-item a {
  color: #31b4a7;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 15px;
  display: block;
  background-color: #f0f0f0;
  border-radius: 8px;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-item a:hover {
  background-color: #31b4a7;
  color: #ffffff;
}
</style>
