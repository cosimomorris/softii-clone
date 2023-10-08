<template>
  <div class="form-container mt-8">
    <h2 class="text-xl font-bold mb-4">
      Registra tu Tienda para Comenzar tu Mes Gratis
    </h2>

    <form>
      <div class="grid grid-cols-2 gap-4">
        <!-- Input fields with labels -->
        <div v-for="(field, index) in inputFields" :key="index">
          <p class="mb-2 font-bold">{{ field.label }}</p>
          <input
            type="text"
            class="custom-input"
            :name="field.name"
            :placeholder="field.placeholder"
          />
        </div>
      </div>

      <!-- Checkbox for terms and conditions -->
      <div class="flex justify-center items-center mt-4 mb-4">
        <input type="checkbox" id="terms" class="mr-2 custom-checkbox" />
        <label for="terms">
          He leído y aceptado los Terminos y Condiciones.
        </label>
      </div>

      <!-- Registration button -->
      <button class="register-btn">Registar tienda</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  name: "Form",
  data() {
    return {
      inputFields: [
        {
          label: "Nombre Comercial",
          name: "commercialName",
          placeholder: "Abarrotes Juan",
        },
        {
          label: "Razon Social",
          name: "socialReason",
          placeholder: "Juan SA DE CV",
        },
        { label: "Telefono", name: "phone", placeholder: "(614) 123 4567" },
        {
          label: "Codigo Postal",
          name: "postalCode",
          placeholder: "Codigo Postal",
        },
        {
          label: "Nombre Completo",
          name: "fullName",
          placeholder: "Juan Perez",
        },
        { label: "Email", name: "email", placeholder: "juan@softii.com" },
      ],
    };
  },
};
</script>

<style scoped>
/* Custom styles for the input boxes */
.custom-input {
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 25px;
  padding: 10px;
  width: 75%;
  color: black; /* Added this line */
}

.custom-checkbox {
  background-color: white;
}

/* To ensure the box shadow and border is visible on white background */
.custom-checkbox:checked {
  border-color: #555;
  box-shadow: 0 0 0 2px #555;
}

.register-btn {
  background-color: #ec6a5b;
  color: white;
  font-bold: bold;
  border-radius: 25px;
  padding: 10px 20px;
  transition: all 0.3s ease; /* Smooth transition for hover effects */
}

.register-btn:hover {
  background-color: #8a41d9;
  transform: scale(1.05); /* Makes the button slightly larger on hover */
}
</style>
