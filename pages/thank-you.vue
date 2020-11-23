<template>
  <div class="main">
    <section class="hero-section pt-10 pb-0 text-center">
      <div class="container">
        <h1 class="main-heading mb-10">
          Thank you for your interest.
        </h1>
        <p class="text-xl">
          I'll be in touch soon! <nuxt-link to="/" class="underline text-primary">Back to Home</nuxt-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    projectPosts() {
      return this.$store.state.projectPosts
    }
  }
}
</script>

<style lang="postcss"></style>
