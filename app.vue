<script setup lang="ts">
const colorMode = useColorMode();
const isDark = computed({
  get() {
    return colorMode.value === "dark";
  },
  set() {
    colorMode.preference = colorMode.value === "dark" ? "light" : "dark";
  },
});
const tags = ["Nuxt", "Vue", "React", "Next", "Angular"];
</script>
<template>
  <NuxtLayout>
    <div class="flex p-4 justify-center items-center min-h-screen">
      <UCard class="w-full max-w-lg md:w-600px rounded-md">
        <template #header>
          <div class="flex items-center gap-2">
            <UAvatar src="/avatar.jpeg" alt="Jesse Bakels" />
            <span class="font-bold">Jesse Bakels</span>
          </div>
        </template>

        <p>Frontend Developer @ Jumbo Supermarkten</p>
        <div class="mt-4">
          <UBadge
            v-for="tag in tags"
            :key="tag"
            color="primary"
            variant="solid"
            class="mr-2"
          >
            {{ tag }}
          </UBadge>
        </div>

        <template #footer>
          <div class="flex align-items justify-center">
            <span class="p-text-secondary">Last update March 11th 2024</span>
          </div>
        </template>
      </UCard>
    </div>
  </NuxtLayout>
</template>
