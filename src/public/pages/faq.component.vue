<template>
  <div class="faq-container">
    <h1 class="faq-title">Frequently Asked Questions</h1>
    <section class="content">
      <div class="questions">
        <div v-for="p in questions" :key="p.id" class="faq-box">
          <h2 class="faq-question">{{p.question}}</h2>
          <p class="faq-answer">{{p.answer}}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
    };
  },
  mounted() {
    fetch("https://my-json-server.typicode.com/Yorusito/VetCareDB/faq")
        .then((res) => res.json())
        .then((data) => {
          this.questions = data;
        })
        .catch((error) => {
          console.error("Error al cargar los datos:", error);
        });
  },
};
</script>

<style scoped>
/* Contenedor principal */
.faq-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f2f9f6; /* Un verde suave para el fondo */
}

/* Título */
.faq-title {
  font-family: 'Nunito', sans-serif;
  color: #2c3e50;
  font-size: 2.5rem;
  margin-bottom: 30px;
  text-align: center;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1); /* Agregar un suave sombreado al texto */
}

/* Contenedor de preguntas */
.content {
  width: 100%;
  display: flex;
  justify-content: center;
}

/* Grid de preguntas */
.questions {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
}

/* Estilos de cada caja de pregunta */
.faq-box {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  border: 1px solid #eee; /* Borde más definido */
  position: relative;
  overflow: hidden;
}

.faq-box:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://www.pngmart.com/files/21/Paw-Print-Transparent-Background.png'); /* Imágenes de huellas en el fondo */
  background-size: 150px 150px;
  background-repeat: no-repeat;
  background-position: bottom right;
  opacity: 0.1;
}

.faq-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Pregunta */
.faq-question {
  font-family: 'Nunito', sans-serif;
  font-size: 1.5rem;
  color: #27ae60;
  margin-bottom: 10px;
  text-align: center;
}

/* Respuesta */
.faq-answer {
  font-family: 'Nunito', sans-serif;
  font-size: 1rem;
  color: #2c3e50;
  text-align: left;
  margin-top: 10px;
  line-height: 1.5;
  transition: all 0.3s ease;
}

/* Ajuste responsivo */
@media (max-width: 768px) {
  .faq-box {
    max-width: 100%;
  }
}

</style>
