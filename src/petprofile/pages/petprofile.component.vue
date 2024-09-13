<template>
  <div class="container">
    <h1>Pet Profile</h1>

    <div class="card-container">
      <div v-for="pet in pets" :key="pet.id" class="card">
        <div class="frame-container">
          <img :src="pet.photoUrl" alt="Image" class="pet-photo"/>
        </div>
        <div class="card-content">
          <h2>{{ pet.name }}</h2>
          <p>Animal: {{pet.type}}</p>
          <p>Breed: {{pet.breed}}</p>
          <p>Weight: {{pet.weight}} KG</p>
          <p>Color: {{pet.color}}</p>
          <p>Next Date: {{pet.date}}</p>
        </div>
        <div class="card-footer">
          <pv-button icon="pi pi-pencil" label="Edit" class="edit-btn" @click="editPet(pet)" />
          <pv-button icon="pi pi-trash" label="Delete" class="delete-btn" @click="confirmDeletePet(pet)" />
        </div>
      </div>
    </div>

    <pv-button label="Add Pet" class="create-btn" @click="openNew"></pv-button>

    <!-- Dialog for Adding/Editing a Pet -->
    <pv-dialog
        v-model:visible="petDialog"
        :style="{width:'450px'}"
        header="Pet Information"
        :modal="true"
        class="p-fluid"
    >
      <div class="field mt-3">
        <span class="p-float-label">
          <pv-input-text
              type="text"
              id="name"
              v-model.trim="pet.name"
              required="true"
              autofocus
              :class="{'p-invalid': submitted && !pet.name}"
          />
          <label for="name">Name</label>
          <small class="p-error" v-if="submitted && !pet.name">Name is required.</small>
        </span>
      </div>
      <!-- Other input fields here -->
      <template #footer>
        <pv-button
            :label="'Cancel'.toUpperCase()"
            icon="pi pi-times"
            class="p-button-text"
            @click="hideDialog"
        />
        <pv-button
            :label="'Save'.toUpperCase()"
            icon="pi pi-check"
            class="p-button-text"
            @click="savePet"
        />
      </template>
    </pv-dialog>

    <!-- Confirm Delete Dialog -->
    <pv-dialog
        v-model:visible="deletePetDialog"
        :style="{ width: '450px' }"
        header="Confirm"
        :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle mr-3" style="font-size: 2rem" />
        <span v-if="pet">Are you sure you want to delete <b>{{ pet.name }}</b>?</span>
      </div>
      <template #footer>
        <pv-button
            :label="'No'.toUpperCase()"
            icon="pi pi-times"
            class="p-button-text"
            @click="deletePetDialog = false"
        />
        <pv-button
            :label="'Yes'.toUpperCase()"
            icon="pi pi-check"
            class="p-button-text"
            @click="deletePet"
        />
      </template>
    </pv-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pets: [
        {
          id: 1,
          name: "Max",
          type: "Dog",
          breed: "Golden Retriever",
          weight: 30,
          color: "Golden",
          photoUrl: "https://gosbi.com/wp-content/uploads/2023/06/stephen-andrews-lEe3-hTg4Vg-unsplash-1080x675.jpg",
          date: "2023-09-15"
        },
        {
          id: 2,
          name: "Bella",
          type: "Cat",
          breed: "Siamese",
          weight: 5,
          color: "Cream",
          photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvVgolv396EGz4uXfXaKFznD3EdnvpZDkq4A&s",
          date: "2023-10-02"
        }
      ],
      petDialog: false,
      deletePetDialog: false,
      pet: {},
      submitted: false,
    };
  },
  methods: {
    openNew() {
      this.pet = {};
      this.submitted = false;
      this.petDialog = true;
    },
    hideDialog() {
      this.petDialog = false;
      this.submitted = false;
    },
    savePet() {
      this.submitted = true;
      if (this.pet.name.trim()) {
        if (this.pet.id) {
          const index = this.pets.findIndex(p => p.id === this.pet.id);
          if (index !== -1) {
            this.pets.splice(index, 1, this.pet); // Update existing pet
          }
        } else {
          this.pet.id = this.pets.length + 1;
          this.pets.push(this.pet); // Add new pet
        }
        this.petDialog = false;
        this.pet = {};
      }
    },
    editPet(pet) {
      this.pet = { ...pet };
      this.petDialog = true;
    },
    confirmDeletePet(pet) {
      this.pet = pet;
      this.deletePetDialog = true;
    },
    deletePet() {
      this.pets = this.pets.filter(p => p.id !== this.pet.id);
      this.deletePetDialog = false;
      this.pet = {};
    }
  }
};
</script>

<style scoped>
/* General container styles */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

h1 {
  font-family: 'Nunito', sans-serif;
  margin-bottom: 30px;
}

/* Card container */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
}

/* Individual card styles */
.card {
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-width: 300px;
  text-align: center;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.pet-photo {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.card-content {
  font-family: 'Inria Sans', sans-serif;
  color: #2c3e50;
  margin-bottom: 10px;
}

.card-content h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

.card-footer {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.edit-btn, .delete-btn {
  width: 45%;
}

/* Add Pet button styles */
.create-btn {
  background-color: #31b4a7;
  color: white;
  font-family: 'Inria Sans', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.create-btn:hover {
  background-color: #2a9389;
  transform: translateY(-3px);
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .card-container {
    flex-direction: column;
    align-items: center;
  }

  .card {
    width: 90%;
  }
}

</style>
