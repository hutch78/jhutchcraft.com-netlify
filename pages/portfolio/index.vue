<template>
  <div class="main">
    <section class="hero-section pt-10 pb-4 lg:py-10 md:text-center">
      <div class="container">
        <h1 class="main-heading mb-8">
          Selected Works
        </h1>
        <p class="text-xl leading-relaxed">A ferw of the more recent but awesome projects I think are worth sharing</p>
      </div>
    </section>

    <section class="portfolio-grid mt-24">
      <div class="container grid gap-4 grid-cols-1 md:grid-cols-3">
        <nuxt-link to="/portfolio/renters-warehouse" class="block mb-8 lg:mb-0">
          <img
            src="/img/thumbs/thumb-rw.png"
            alt="A thumbnail showing the RentersWarehouse.com website"
            class="block max-w-full"
          />
          <h2 class="text-xl font-bold mt-3 karla">Renters Warehouse</h2>
        </nuxt-link>
        <nuxt-link to="/portfolio/happily-ever-hutchcraft" class="block mb-8 lg:mb-0">
          <img
            src="/img/thumbs/thumb-wedding.png"
            alt="A thumbnail showing HappilyEverHutchcraft.com website"
            class="block max-w-full"
          />
          <h2 class="text-xl font-bold mt-3 karla">#HappilyEverHutchcraft</h2>
        </nuxt-link>
        <nuxt-link to="/portfolio/roro" class="block mb-8 lg:mb-0">
          <img
            src="/img/thumbs/thumb-roro.png"
            alt="A thumbnail showing the new design for RORO.com"
            class="block max-w-full"
          />
          <h2 class="text-xl font-bold mt-3 karla">RORO</h2>
        </nuxt-link>
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
