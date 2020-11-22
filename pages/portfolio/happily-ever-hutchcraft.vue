<template>
  <div class="main">
    <section class="hero-section py-10">
      <div class="container">
        <h1 class="main-heading">
          #HappilyEverHutchcraft
        </h1>
      </div>
    </section>

    <section class="portfolio-content">
      <div class="container">
        <p class="leading-relaxed mb-10">
          COVID threw a lot of things off this year, and our wedding was one of them. We were planning it last year and
          when COVID hit in 2020, we paused all planning. We decided to get married in the courthouse but when my mom
          and mother-in-law found out, they were not having it.
        </p>
        <p class="leading-relaxed mb-10">
          Soon after, a wedding was booked at the Hilton here in Ocala and it was on really short notice, so one night,
          I designed and built a wedding landing page. I used Tailwind, Nuxt, and Netlify to build this project and it
          was a great experience, aside from the form disappearing sometimes 🙃
        </p>
        <a
          href="https://renterswarehouse.com"
          class="inline-block rounded bg-primary border border-solid border-primary px-10 py-3 text-white mb-16"
          target="_blank"
          >Visit Website</a
        >
      </div>
    </section>

    <nav class="portfolio-nav flex justify-between mt-20 ">
      <nuxt-link to="/portfolio/renters-warehouse">
        <span class="block rubik font-bold text-xl mb-2">Renters Warehouse</span>
        <span class="block text-gray-600">View Pevious Project &raquo;</span>
      </nuxt-link>
      <nuxt-link to="/portfolio/roro" class="text-right">
        <span class="block rubik font-bold text-xl mb-2">RORO</span>
        <span class="block text-gray-600">View Pevious Project &raquo;</span>
      </nuxt-link>
    </nav>
  </div>
</template>

<style lang="postcss"></style>
