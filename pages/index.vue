<template>
  <div class="main">
    <section class="hero-section py-10">
      <div class="container">
        <h1 class="main-heading mb-8 max-w-5xl">
          Hi there. I am a Front End Developer, Designer, Husband and Father from Ocala, FL
        </h1>
        <p class="text-xl leading-relaxed">I bring ideas to life using design, HTML, CSS and Javascript</p>
      </div>
    </section>

    <section class="featured-project mt-24">
      <div class="container">
        <div class="lg:flex">
          <div class="pt-4 lg:pt-10 lg:max-w-md lg:pr-20">
            <h3 class="alternative-heading alternative-heading--has-left-line">Featured Project</h3>
            <div class="mt-10">
              <h4 class="text-xl font-bold mb-4">Renters Warehouse</h4>
              <p class="leading-relaxed mb-10">
                I currently lead front end development and design on this small team. This brand and company are very
                important to me and I take a lot of pride in the work I have done for them!
              </p>
              <div class="md:flex mb-16 lg:mb-0">
                <a
                  href="https://renterswarehouse.com"
                  class="block rounded bg-primary border border-solid border-primary md:px-10 py-3 text-white md:mr-2 whitespace-no-wrap text-center mb-3 md:mb-0"
                  target="_blank"
                  >Visit Website</a
                >
                <nuxt-link
                  to="/portfolio/renters-warehouse"
                  class="block rounded border border-solid border-gray-400 md:px-10 py-3 text-gray-800 dark:text-gray-300 dark:border-primary-400 whitespace-no-wrap text-center"
                  target="_blank"
                  >Read More</nuxt-link
                >
              </div>
            </div>
          </div>
          <!-- end copntent column -->
          <div>
            <nuxt-link to="/portfolio/renters-warehouse">
              <img
                src="/img/thumbs/thumb-rw.png"
                alt="A thumbnail showing the RentersWarehouse.com website"
                class="block max-w-full"
              />
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  // components: {
  //   Logo
  // },
  head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>

<style lang="postcss" scoped>
.main-heading {
  @media (min-width: theme('screens.lg')) {
    left: -4rem;
  }
}
</style>
