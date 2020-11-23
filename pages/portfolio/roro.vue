<template>
  <div class="main">
    <section class="hero-section py-10">
      <div class="container">
        <h1 class="main-heading xl:px-32">
          RORO
        </h1>
      </div>
    </section>

    <section class="portfolio-content">
      <div class="container">
        <p class="leading-relaxed mb-4 xl:px-32">
          RORO contracted me to redesign their current site, including adding several new pages and re-skinning their
          dashboard pages. I was given a style guide to work from that included new branding and some examples of what
          sections on the home page could look like.
        </p>
        <p class="leading-relaxed mb-10 xl:px-32">
          From the style guide, I produced a series of new designs that fit the new branding and elevated RORO to a sexy
          new aesthetic. My thought process was this: RORO is responsible for arranging logistics for very high-end
          items. The look and feel of their website should reflect that.
        </p>
        <img src="/img/full/roro.jpg" alt="high res image of the new RORO website" class="block max-w-full mb-16 " />
        <div class="text-center mb-16 xl:mb-20">
          <p class="text-2xl mb-6 leading-relaxed">
            This site is still in development. Check back soon to see the fully built live site.
          </p>
          <a
            href="#"
            class="inline-block rounded bg-gray-300 border border-solid border-gray-300 px-10 py-5 text-gray-600 text-lg pointer-events-none cursor-not-allowed"
            target="_blank"
            disabled
            >Visit Website</a
          >
          <p class="mt-4">Launching soon!</p>
        </div>
      </div>

      <div class="container">
        <!-- <a
          href="https://renterswarehouse.com"
          class="inline-block rounded bg-primary border border-solid border-primary px-10 py-3 text-white mb-16"
          target="_blank"
          >Visit Website</a
        > -->
      </div>
    </section>

    <nav class="portfolio-nav mt-20">
      <div class="container flex justify-between">
        <nuxt-link to="/portfolio/happily-ever-hutchcraft" class="text-left">
          <span class="block rubik font-bold text-md lg:text-xl mb-2">#HappilyEverHutchcraft</span>
          <span class="block text-gray-600">&laquo; View Project</span>
        </nuxt-link>
        <nuxt-link to="/portfolio" class="text-right hidden md:inline-block">
          <span class="block rubik font-normal text-xl mb-2">Back to Portfolio</span>
        </nuxt-link>
        <nuxt-link to="/portfolio/renters-warehouse" class="text-right">
          <span class="block rubik font-bold text-md lg:text-xl mb-2">Renters Warehouse</span>
          <span class="block text-gray-600">View Project &raquo;</span>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<style lang="postcss"></style>
