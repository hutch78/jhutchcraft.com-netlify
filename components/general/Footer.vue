<template>
  <footer :class="showCTA ? '' : 'mt-40'">
    <div class="container text-center">
      <template v-if="showCTA">
        <div class="my-40">
          <h2 class="mb-8 max-w-3xl text-3xl md:text-4xl font-bold mx-auto tracking-tighter">
            Looking for a developer or designer to bring your next idea to life?
          </h2>
          <p class="text-lg md:text-xl mb-10 leading-relaxed">
            Let’s chat more about how I can help you hit your goals.
          </p>
          <nuxt-link
            to="/contact"
            class="inline-block rounded bg-primary border border-solid border-primary px-10 py-3 text-white mr-2"
          >
            Get Started
          </nuxt-link>
        </div>
      </template>
      <p class="text-center leading-relaxed mb-8">
        &copy; Jeremy Hutchcraft 2020. Designed and built with ❤️ in Ocala, FL
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    showCTA: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="postcss" scoped>
footer {
  border-bottom: 1rem solid var(--color-accent);
}
</style>
