<template>
  <div class="plans-container mt-8">
    <!-- Plan selection buttons -->
    <div class="mb-4 flex justify-center">
      <button
        @click="selectPlan('Mensual')"
        :style="
          selectedPlan === 'Mensual'
            ? 'background-color: #8a41d9; border-radius: 25px'
            : 'background-color: #ec6a5b; border-radius: 25px'
        "
        class="text-white px-4 py-2 mx-2"
      >
        Mensual
      </button>
      <button
        @click="selectPlan('Anual')"
        :style="
          selectedPlan === 'Anual'
            ? 'background-color: #8a41d9; border-radius: 25px'
            : 'background-color: #ec6a5b; border-radius: 25px'
        "
        class="text-white px-4 py-2 mx-2"
      >
        Anual
      </button>
    </div>

    <!-- Cards -->
    <div class="card-group flex justify-center space-x-6">
      <div
        v-for="(card, index) in cards"
        :key="card.id"
        @click="handleCardClick(card.id)"
        class="card bg-gray-100 p-4 rounded-lg transition-all duration-300 cursor-pointer"
        :class="{
          'mt-6': index === 1,
          'hover:border-4': true,
          'hover:border-yellow-500': index === 0,
          'hover:border-red-500': index === 1,
          'hover:border-purple-500': index === 2,
        }"
      >
        <!-- Display Logo based on card title -->
        <img :src="getCardLogo(card.title)" alt="Card Logo" class="mb-4" />

        <h2 class="text-black font-bold text-xl">{{ card.title }}</h2>
        <!-- Display the price based on the selected plan -->
        <p class="text-[#212155] text-lg">
          {{ selectedPlan === "Mensual" ? card.price[1] : card.price[0] }}
        </p>

        <h3 class="text-black font-bold">Módulos incluidos:</h3>
        <ul>
          <li
            v-for="module in card.modulesIncluded"
            :key="module"
            class="text-black"
          >
            <div class="flex items-center">
              <!-- Display Check Image based on card title -->
              <img
                :src="getModuleIcon(card.title)"
                alt="Check"
                class="mr-2"
                style="width: 1rem; flex-shrink: 0"
              />
              <!-- Apply font color and size to the li item -->
              <span class="text-[#212155] text-lg">{{ module }}</span>
            </div>
          </li>
        </ul>
        <p v-if="card.tagline" class="tagline text-black">{{ card.tagline }}</p>
      </div>
    </div>

    <!-- Form Component -->
    <Form v-if="selectedCardId" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import cards from "./cards.json";
import Form from "./Form.vue";

const selectedPlan = ref("Mensual");
const selectedCardId = ref<number | null>(null);

const handleCardClick = (id: number) => {
  selectedCardId.value = id;
};

const selectPlan = (plan: string) => {
  selectedPlan.value = plan;
};

const getCardLogo = (title: string) => {
  if (title === "Liite") return "/y-logo.png";
  if (title === "Basiico") return "/r-logo.png";
  return "/p-logo.png";
};

const getModuleIcon = (title: string) => {
  if (title === "Liite") return "/y-check.png";
  if (title === "Basiico") return "/r-check.png";
  return "/p-check.png";
};
</script>

<style scoped>
.tagline {
  color: #ffffff;
  font-weight: bold;
  background: linear-gradient(to bottom, transparent, #8a41d9);
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
}

/* Default styles for card-group */
.card-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

/* Mobile styles */
@media (max-width: 768px) {
  .card-group {
    flex-direction: column;
    align-items: center;
  }

  .card {
    margin-bottom: 20px; /* Add some spacing between cards on mobile */
  }
}
</style>
