<script setup lang="ts">
const tags = ["Nuxt", "Vue", "React", "Next", "Angular"];

useHead({
  title: "Jesse Bakels",
  meta: [
    {
      name: "description",
      property: "og:description",
      content: "Frontend Developer @ Jumbo Supermarkten",
    },
    { property: "og:title", content: "Jesse Bakels" },
    { property: "og:image", content: "https://www.jessebakels.nl/avatar.jpeg" },
    { property: "og:url", content: "https://www.jessebakels.nl" },
  ],
});
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
            :label="tag"
            color="primary"
            variant="solid"
            class="mr-2"
          />
        </div>

        <template #footer>
          <div class="flex align-items justify-center">
            <span class="p-text-secondary">Last update January 9th 2025</span>
          </div>
        </template>
      </UCard>
    </div>
  </NuxtLayout>
</template>
