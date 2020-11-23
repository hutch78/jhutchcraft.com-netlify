<template>
  <div class="main">
    <section class="hero-section pt-10 pb-0 text-center">
      <div class="container">
        <h1 class="main-heading mb-0">
          Let's Chat
        </h1>
        <div class="flex text-left justify-center mx-auto mb-12 max-w-lg">
          <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              class="w-6 h-6 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div class="ml-4 text-md tracking-wide font-semibold w-40">
              727-692-9906
            </div>
          </div>

          <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              class="w-6 h-6 text-gray-500"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div class="ml-4 text-md tracking-wide font-semibold w-40">
              <a href="mailto:hutch78@me.com">hutch78@me.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mt-24">
      <div class="container">
        <p class="text-2xl font-bold dark:text-gray-400 mb-8 text-center tracking-tight">
          Fill in the form to start a conversation
        </p>
        <form netlify action="/thank-you" class="flex flex-col justify-center  max-w-lg mx-auto" name="contactForm">
          <input type="hidden" name="form_name" value="contactForm" />

          <div class="flex flex-col">
            <label for="name" class="hidden">Full Name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div class="flex flex-col mt-2">
            <label for="email" class="hidden">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div class="flex flex-col mt-2 mb-8">
            <label for="tel" class="hidden">Number</label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone Number"
              class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            class="inline-block rounded bg-primary border border-solid border-primary px-10 py-5 text-white text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'no-contact-cta',
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  }
}
</script>

<style lang="postcss"></style>
