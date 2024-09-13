<template>
  <div class="store-container">
    <!-- Header con botones -->
    <pv-toolbar class="store-toolbar">
      <template #start>
        <pv-button class="products-btn" label="Our Products"/>
      </template>

      <template #end>
        <pv-button icon="pi pi-shopping-cart" :label="'Cart (' + totalItemsInCart + ')'" class="cart-btn" @click="visibleRight = true"/>
      </template>
    </pv-toolbar>

    <!-- Sidebar del carrito -->
    <pv-sidebar v-model:visible="visibleRight" class="cart-sidebar" position="right">
      <div class="cart-card">
        <pv-data-table :value="cart" tableStyle="min-width: 18rem">
          <template #header>
            <div class="flex flex-wrap align-items-center justify-content-between gap-2">
              <span class="text-xl text-900 font-bold">Cart Items</span>
            </div>
          </template>

          <pv-column field="name" header="Name"></pv-column>
          <pv-column field="quantity" header="Quantity"></pv-column>
          <pv-column field="price" header="Price (S/)"></pv-column>
          <pv-column header="Total">
            <template #body="slotProps">
              <span>S/ {{ slotProps.data.price * slotProps.data.quantity }}</span>
            </template>
          </pv-column>
          <pv-column header="Actions">
            <template #body="slotProps">
              <pv-button icon="pi pi-trash" class="p-button-danger" @click="removeFromCart(slotProps.data)" />
            </template>
          </pv-column>

          <template #footer>
            <div class="total-section">
              <span><b>Subtotal: S/ {{ subtotal }}</b></span><br>
              <span><b>Tax (18%): S/ {{ tax }}</b></span><br>
              <span><b>Total: S/ {{ totalPrice }}</b></span>
              <pv-button label="Checkout" class="checkout-btn" @click="checkout" />
            </div>
          </template>
        </pv-data-table>
      </div>
    </pv-sidebar>

    <!-- Contenedor de productos -->
    <div class="card-container">
      <div v-for="product in products" :key="product.id" class="card">
        <pv-card class="product-card">
          <template #header>
            <img :src="product.image" alt="Product Image" class="product-image"/>
          </template>
          <template #title>{{ product.name }}</template>
          <template #subtitle>{{ product.description }}</template>
          <template #content><b>S/ {{ product.price }}</b></template>
          <template #footer>
            <pv-button class="add-to-cart-btn" icon="pi pi-shopping-cart" label="Add to cart" @click="addToCart(product)" :disabled="product.stock === 0"/>
            <p v-if="product.stock === 0" class="out-of-stock-text">Out of Stock</p>
          </template>
        </pv-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Estado para el sidebar del carrito
const visibleRight = ref(false);

// Estado del carrito y productos
const cart = ref([]);
const products = ref([
  {
    id: 1,
    name: "Dog Food",
    description: "High-quality dog food for all breeds.",
    price: 45.00,
    stock: 10,
    image: "https://m.media-amazon.com/images/I/81xyE8OZBqL.jpg"
  },
  {
    id: 2,
    name: "Cat Food",
    description: "Nutritious cat food with essential vitamins.",
    price: 40.00,
    stock: 0,
    image: "https://i5.walmartimages.com/asr/6e646b8a-f387-452d-b2f9-2ed8b28a2c0e.261739beb5c10e028351b888e47d97bc.jpeg"
  },
  {
    id: 3,
    name: "Pet Shampoo",
    description: "Gentle shampoo for pets with sensitive skin.",
    price: 25.00,
    stock: 15,
    image: "https://promart.vteximg.com.br/arquivos/ids/6918079-1000-1000/image-0adb29cbbd7a4a259a1c2be9fda727b8.jpg"
  },
  {
    id: 4,
    name: "Chew Toys",
    description: "Durable toys for active dogs.",
    price: 15.00,
    stock: 20,
    image: "https://m.media-amazon.com/images/I/61tDf7JRMKS.jpg"
  },
  {
    id: 5,
    name: "Pet Carrier",
    description: "Comfortable and secure carrier for small pets.",
    price: 60.00,
    stock: 5,
    image: "https://m.media-amazon.com/images/I/81eLpE6l3NL.jpg"
  },
  {
    id: 6,
    name: "Dog Collar",
    description: "Adjustable collar for dogs, durable and stylish.",
    price: 20.00,
    stock: 30,
    image: "https://lotuffleather.com/cdn/shop/products/Lotuff_Leather_Dog_Collar_Chestnut_1_2000x.progressive.jpg"
  },
  {
    id: 7,
    name: "Cat Litter",
    description: "Odor control litter for cats, easy to clean.",
    price: 35.00,
    stock: 8,
    image: "https://m.media-amazon.com/images/I/71b1dwfUmRL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    id: 8,
    name: "Pet Bed",
    description: "Cozy pet bed for both cats and dogs, soft and comfy.",
    price: 50.00,
    stock: 12,
    image: "https://m.media-amazon.com/images/I/81978HR1rpL.jpg"
  }
]);

// Cálculos derivados
const totalItemsInCart = computed(() => {
  return cart.value.reduce((total, item) => total + item.quantity, 0);
});

const subtotal = computed(() => {
  return cart.value.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
});

const tax = computed(() => {
  return (subtotal.value * 0.18).toFixed(2);
});

const totalPrice = computed(() => {
  return (parseFloat(subtotal.value) + parseFloat(tax.value)).toFixed(2);
});

// Métodos
const addToCart = (product) => {
  const itemInCart = cart.value.find(item => item.id === product.id);
  if (itemInCart) {
    if (itemInCart.quantity < product.stock) {
      itemInCart.quantity++;
    } else {
      alert('No more stock available');
    }
  } else {
    cart.value.push({ ...product, quantity: 1 });
  }
};

const removeFromCart = (product) => {
  const itemInCart = cart.value.find(item => item.id === product.id);
  if (itemInCart.quantity > 1) {
    itemInCart.quantity--;
  } else {
    cart.value = cart.value.filter(item => item.id !== product.id);
  }
};

const checkout = () => {
  alert(`Thank you for your purchase! Total: S/ ${totalPrice.value}`);
  cart.value = [];
};
</script>

<style scoped>
/* General Store Layout */
.store-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f8f9fa;
  padding: 20px;
}

.store-toolbar {
  background-color: #31b4a7;
  color: #fff;
  margin-bottom: 20px;
  width: 100%;
  padding: 15px 20px;
}

.products-btn {
  background-color: #b4eee8;
  color: black;
  font-weight: bold;
  border-radius: 8px;
}

.cart-btn {
  background-color: #c39777;
  color: black;
  font-weight: bold;
  border-radius: 8px;
}

.cart-sidebar {
  background-color: #fff0cb;
}

/* Card Container */
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

/* Product Cards */
.product-card {
  width: 100%;
  max-width: 300px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.product-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.add-to-cart-btn {
  background-color: #31b4a7;
  color: white;
  font-weight: bold;
}

.add-to-cart-btn:hover {
  background-color: #2a9389;
}

/* Out of Stock Message */
.out-of-stock-text {
  color: red;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
}

/* Cart Section */
.cart-card {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.total-section {
  margin-top: 20px;
}

.checkout-btn {
  background-color: #31b4a7;
  color: white;
  margin-top: 10px;
}

.checkout-btn:hover {
  background-color: #2a9389;
}
</style>
