<template>
  <div class="appointment-container">
    <router-link to="/newappointment">
      <pv-button label="Create Appointment" class="create-btn">
      </pv-button>
    </router-link>

    <div class="appointment-list">
      <div v-for="appointment in appointments" :key="appointment.id" class="card">
        <div class="content">
          <div class="header">
            <div class="veterinary">{{ appointment.veterinaryName }}</div>
            <div class="status" :class="appointment.status === 'Scheduled' ? 'scheduled' : 'completed'">
              {{ appointment.status }}
            </div>
          </div>
          <div class="data">
            <i class="pi pi-paw"></i>
            <span class="label">Pet Name:</span>
            <span class="value">{{ appointment.petName }}</span>
          </div>
          <div class="data">
            <i class="pi pi-pencil"></i>
            <span class="label">Description:</span>
            <span class="value">{{ appointment.description }}</span>
          </div>
          <div class="data">
            <i class="pi pi-calendar"></i>
            <span class="label">Date:</span>
            <span class="value">{{ appointment.date }}</span>
          </div>
          <div class="actions">
            <pv-button label="Complete" @click="completeAppointment(appointment.id)"
                       class="complete-btn" icon="pi pi-check">
            </pv-button>
            <pv-button label="Cancel" @click="cancelAppointment(appointment.id)"
                       class="cancel-btn" icon="pi pi-times">
            </pv-button>
            <pv-button label="Configure" @click="configureAppointment(appointment.id)"
                       class="configure-btn" icon="pi pi-cog">
            </pv-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appointments: [
        {
          id: 1,
          veterinaryName: 'Petzy Veterinary',
          petName: 'Blanqui',
          description: 'Monthly Wash',
          date: '15/09/2023',
          status: 'Scheduled'
        },
        {
          id: 2,
          veterinaryName: 'Animal Care 24/7',
          petName: 'Blacky',
          description: 'Blood Test',
          date: '18/09/2023',
          status: 'Scheduled'
        },
        {
          id: 3,
          veterinaryName: 'Happy Tails Clinic',
          petName: 'Nina',
          description: 'X-ray Examination',
          date: '20/09/2023',
          status: 'Scheduled'
        },
        {
          id: 4,
          veterinaryName: 'Vetzi Clinic',
          petName: 'Saltarin',
          description: 'Priority Care',
          date: '21/09/2023',
          status: 'Scheduled'
        },
        {
          id: 5,
          veterinaryName: 'Vet Happy',
          petName: 'Rex',
          description: 'Vaccination',
          date: '22/09/2023',
          status: 'Completed'
        },
        {
          id: 6,
          veterinaryName: 'Care4Pets Veterinary',
          petName: 'Snowy',
          description: 'Neutering Surgery',
          date: '25/09/2023',
          status: 'Scheduled'
        }
      ]
    };
  },
  methods: {
    cancelAppointment(appointmentId) {
      console.log(`Appointment ${appointmentId} canceled`);
    },
    completeAppointment(appointmentId) {
      console.log(`Appointment ${appointmentId} completed`);
    },
    configureAppointment(appointmentId) {
      console.log(`Configuring appointment ${appointmentId}`);
    }
  }
};
</script>

<style scoped>
/* Contenedor principal */
.appointment-container {
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f7fa;
}

/* Botón de Crear Cita */
.create-btn {
  background-color: #31b4a7;
  font-family: 'Inria Sans', sans-serif;
  font-weight: bold;
  padding: 12px 30px;
  margin-bottom: 30px;
  color: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s ease;
  cursor: pointer;
}

.create-btn:hover {
  background-color: #2a9389;
  transform: translateY(-3px);
}

/* Lista de Citas */
.appointment-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

/* Tarjetas de citas */
.card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 550px;
  padding: 30px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Contenido de la tarjeta */
.content {
  font-family: 'Inria Sans', sans-serif;
}

/* Encabezado */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.veterinary {
  font-weight: bold;
  font-size: 1.2rem;
  color: #2c3e50;
}

.status {
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 0.9rem;
}

.scheduled {
  background-color: #31b4a7;
  color: #fff;
}

.completed {
  background-color: #4caf50;
  color: #fff;
}

/* Datos de la cita */
.data {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.data i {
  font-size: 1.2rem;
  color: #31b4a7;
  margin-right: 10px;
}

.label {
  font-weight: bold;
  margin-right: 5px;
  color: #2c3e50;
}

.value {
  color: #555;
  font-weight: 500;
}

/* Botones de acciones */
.actions {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.complete-btn, .cancel-btn, .configure-btn {
  width: 100%;
}

.complete-btn {
  background-color: #31b4a7;
  color: #fff;
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 0.9rem;
}

.cancel-btn {
  background-color: #ff4d4d;
  color: #fff;
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 0.9rem;
}

.configure-btn {
  background-color: #a9a9a9;
  color: #fff;
  border-radius: 5px;
  padding: 10px 5px;
  font-size: 0.9rem;
}
</style>
