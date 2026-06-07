<script setup lang="ts">
const route = useRoute();

const cvPath = computed(() => {
  const variant = route.query.variant;

  return typeof variant === "string" && variant ? `/cv-${variant}` : "/cv";
});

const { data: cv } = await useAsyncData(
  () => `cv:${cvPath.value}`,
  () => queryContent(cvPath.value).findOne(),
  { watch: [cvPath] },
);

const printCv = () => {
  window.print();
};

useSeoMeta({
  title: () => (cv.value?.name ? `${cv.value.name} - CV` : "CV"),
  description: () => cv.value?.title ?? "Curriculum vitae",
  robots: "noindex, nofollow",
});
</script>

<template>
  <NuxtLayout>
    <main
      class="cv-page flex min-h-screen justify-center px-4 py-20 md:py-24 print:block print:min-h-0 print:p-0"
    >
      <div class="w-full max-w-3xl">
        <div class="mb-4 flex justify-end print:hidden">
          <UButton
            icon="i-heroicons-printer"
            color="gray"
            size="sm"
            @click="printCv"
          >
            Export PDF
          </UButton>
        </div>

        <UCard
          v-if="cv"
          class="cv-document w-full rounded-md print:rounded-none print:shadow-none"
          :ui="{
            body: { padding: 'p-6 sm:p-8 md:p-10 print:p-6 print:pt-4' },
            header: { padding: 'p-6 sm:p-8 md:p-10 print:p-6 print:pb-4' },
            footer: { padding: 'p-6 sm:p-8 md:p-10 print:p-6 print:pt-4' },
          }"
        >
          <template #header>
            <header class="cv-header flex items-start gap-3">
              <UAvatar src="/avatar.jpeg" :alt="cv.name" size="lg" />
              <div class="min-w-0">
                <h1
                  class="text-3xl font-bold tracking-tight text-gray-950 dark:text-white md:text-4xl"
                >
                  {{ cv.name }}
                </h1>
                <p
                  class="mt-2 text-base font-medium text-gray-700 dark:text-gray-200"
                >
                  {{ cv.title }}
                </p>
                <p
                  v-if="cv.location"
                  class="mt-1 text-sm text-gray-500 dark:text-gray-400"
                >
                  {{ cv.location }} · Nederland
                </p>
              </div>
            </header>
          </template>

          <ContentRenderer :value="cv" class="cv-content" />

          <template #footer>
            <footer
              class="cv-footer flex flex-wrap justify-end gap-x-3 gap-y-1 text-sm text-gray-500 dark:text-gray-400"
            >
              <a
                href="https://www.linkedin.com/in/jessebakels"
                target="_blank"
                class="flex flex-wrap flex-row items-center gap-1"
                rel="noopener noreferrer"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <title>LinkedIn</title>
                  <path
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
                Jessebakels
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="https://github.com/Jesse1989pp"
                target="_blank"
                class="flex flex-wrap flex-row items-center gap-1"
                rel="noopener noreferrer"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <title>Github</title>
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                Jesse1989pp
              </a>
              <span aria-hidden="true">·</span>
              <a
                href="tel:0629514391"
                class="flex flex-wrap flex-row items-center gap-1"
              >
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <title>Telefoon</title>
                  <path
                    fill-rule="evenodd"
                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.15a1.5 1.5 0 0 1 1.42 1.02l.84 2.52a1.5 1.5 0 0 1-.38 1.54l-.78.78a11.04 11.04 0 0 0 4.39 4.39l.78-.78a1.5 1.5 0 0 1 1.54-.38l2.52.84A1.5 1.5 0 0 1 16 15.35v1.15a1.5 1.5 0 0 1-1.5 1.5H14C7.37 18 2 12.63 2 6v-.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                06-29514391
              </a>
            </footer>
          </template>
        </UCard>

        <UAlert
          v-else
          color="red"
          variant="soft"
          title="CV not found"
          description="The requested CV content could not be loaded."
        />
      </div>
    </main>
  </NuxtLayout>
</template>

<style>
.cv-content {
  color: rgb(var(--color-gray-700));
  font-size: 15px;
  line-height: 1.65;
}

.dark .cv-content {
  color: rgb(var(--color-gray-300));
}

.cv-content h2 {
  margin: 2rem 0 0.75rem;
  padding-bottom: 0.4rem;
  border-bottom: 1px solid rgb(var(--color-gray-200));
  color: rgb(var(--color-gray-950));
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.3;

  &:first-child {
    margin-top: 0;
  }
}

.dark .cv-content h2 {
  border-bottom-color: rgb(var(--color-gray-800));
  color: white;
}

.cv-content h3 {
  position: relative;
  margin: 1.65rem 0 0.35rem;
  padding: 0.65rem 9.5rem 0.65rem 0.85rem;
  border: 1px solid rgb(var(--color-gray-200));
  border-radius: 0.375rem;
  background: rgb(var(--color-gray-50));
  color: rgb(var(--color-gray-950));
  font-size: 0.975rem;
  font-weight: 700;
  line-height: 1.4;
}

.dark .cv-content h3 {
  border-color: rgb(var(--color-gray-800));
  background: rgb(var(--color-gray-900));
  color: white;
}

.cv-content h3 + p {
  margin-top: 0;
  color: rgb(var(--color-gray-500));
  font-size: 0.875rem;
}

.dark .cv-content h3 + p {
  color: rgb(var(--color-gray-400));
}

.cv-content .cv-period {
  position: absolute;
  top: 50%;
  right: 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transform: translateY(-50%);
  white-space: nowrap;
  color: rgb(var(--color-gray-500));
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: normal;
}

.cv-content .cv-period::before {
  content: "";
  width: 0.875rem;
  height: 0.875rem;
  opacity: 0.7;
  background-color: currentColor;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.75 2a.75.75 0 0 1 .75.75V4h7V2.75a.75.75 0 0 1 1.5 0V4h.25A2.75 2.75 0 0 1 18 6.75v8.5A2.75 2.75 0 0 1 15.25 18H4.75A2.75 2.75 0 0 1 2 15.25v-8.5A2.75 2.75 0 0 1 4.75 4H5V2.75A.75.75 0 0 1 5.75 2Zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75Z' clip-rule='evenodd'/%3E%3C/svg%3E")
    center / contain no-repeat;
}

.dark .cv-content .cv-period {
  color: rgb(var(--color-gray-400));
}

.cv-content h4 {
  margin: 1rem 0 0.35rem;
  color: rgb(var(--color-gray-600));
  font-size: 0.925rem;
  font-style: italic;
  font-weight: 700;
  line-height: 1.35;
}

.dark .cv-content h4 {
  color: rgb(var(--color-gray-300));
}

.cv-content p {
  margin: 0 0 0.75rem;
}

.cv-content ul {
  margin: 0.5rem 0 1rem;
  padding-left: 1.25rem;
  list-style: disc;
}

.cv-content li {
  margin: 0.2rem 0;
  padding-left: 0.1rem;
}

.cv-content strong {
  color: rgb(var(--color-gray-950));
  font-weight: 700;
}

.dark .cv-content strong {
  color: white;
}

.cv-content hr {
  display: none;
}

.cv-footer a {
  text-decoration: none;
}

.cv-footer a:hover {
  color: rgb(var(--color-primary-500));
}

@page {
  size: A4;
  margin: 14mm 16mm;
}

@media print {
  html,
  body,
  #__nuxt {
    background: white !important;
  }

  body {
    margin: 0;
    color: #111827;
    font-size: 10.5pt;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  body > div [class*="fixed"],
  .print\:hidden {
    display: none !important;
  }

  .cv-page,
  .cv-document {
    background: white !important;
    color: #111827 !important;
    box-shadow: none !important;
  }

  .cv-document {
    width: 100% !important;
    max-width: none !important;
    border: 1px solid #e5e7eb !important;
    border-radius: 6px !important;
  }

  .cv-header {
    margin-bottom: 7mm;
    padding-bottom: 4mm;
    border-bottom: 1px solid #e5e7eb;
  }

  .cv-header h1 {
    color: #111827 !important;
    font-size: 24pt !important;
  }

  .cv-header p,
  .cv-content {
    color: #374151 !important;
  }

  .cv-content {
    font-size: 10.5pt;
    line-height: 1.42;
  }

  .cv-content h2 {
    margin-top: 7mm;
    color: #111827 !important;
    border-bottom-color: #e5e7eb !important;
    font-size: 13pt;
  }

  .cv-content h3 {
    margin-top: 4mm;
    padding: 2.5mm 32mm 2.5mm 3mm;
    border-color: #e5e7eb !important;
    background: #f9fafb !important;
    color: #111827 !important;
    font-size: 10.5pt;
  }

  .cv-content h3 + p {
    color: #6b7280 !important;
    font-size: 9.5pt;
  }

  .cv-content h4 {
    margin-top: 3mm;
    color: #4b5563 !important;
    font-size: 10pt;
    font-style: italic;
  }

  .cv-content .cv-period {
    right: 3mm;
    color: #6b7280 !important;
    font-size: 9pt;
    font-weight: 400;
  }

  .cv-content strong {
    color: #111827 !important;
  }

  .cv-footer {
    margin-top: 5mm;
    padding-top: 4mm;
    border-top: 1px solid #e5e7eb;
    color: #4b5563 !important;
    font-size: 9.5pt;
  }

  .cv-footer a {
    color: #4b5563 !important;
  }

  .cv-content p,
  .cv-content ul {
    margin-bottom: 3mm;
  }

  .cv-header,
  .cv-content h2,
  .cv-content h3 {
    break-after: avoid;
    page-break-after: avoid;
  }

  .cv-content h2,
  .cv-content h3,
  .cv-content h4,
  .cv-content p,
  .cv-content ul,
  .cv-content li {
    break-inside: avoid;
    page-break-inside: avoid;
  }
}
</style>
