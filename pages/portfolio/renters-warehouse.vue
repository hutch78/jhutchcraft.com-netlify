<template>
  <div class="main">
    <section class="hero-section py-10">
      <div class="container">
        <h1 class="main-heading xl:px-32">
          Renters Warehouse
        </h1>
      </div>
    </section>

    <section class="portfolio-content">
      <div class="container">
        <p class="leading-relaxed mb-10 xl:mb-20  xl:px-32">
          I have been leading UI\UX design as well as front end development for Renters Warehouse for 3 years now. RW
          went from strictly handling property management to becoming a full-service real estate investing services
          company. We built an MLS search that is just as capable as Zillow.com or Realtor.com. We have designed and
          built tools that provided our agents with better quality of life, and a better ability to serve our clients.
        </p>
        <img
          src="/img/full/rw-home.png"
          alt="high res image of the RentersWarehouse.com website"
          class="block max-w-full"
        />
      </div>
    </section>

    <nav class="portfolio-nav  mt-20 text-right">
      <div class="container flex justify-end"></div>
    </nav>

    <nav class="portfolio-nav mt-20">
      <div class="container flex justify-between items-center">
        <nuxt-link to="/portfolio/roro" class="text-left">
          <span class="block rubik font-bold text-xl mb-2">RORO</span>
          <span class="block text-gray-600">&laquo; View Project</span>
        </nuxt-link>
        <nuxt-link to="/portfolio" class="text-right">
          <span class="block rubik font-normal text-xl mb-2">&laquo; Back to Portfolio</span>
        </nuxt-link>
        <nuxt-link to="/portfolio/happily-ever-hutchcraft" class="text-right">
          <span class="block rubik font-bold text-xl mb-2">#HappilyEverHutchcraft</span>
          <span class="block text-gray-600">View Project &raquo;</span>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<style lang="postcss"></style>
