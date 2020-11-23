<template>
  <div class="main">
    <section class="hero-section py-10">
      <div class="container">
        <h1 class="main-heading  xl:px-32">
          #HappilyEverHutchcraft
        </h1>
      </div>
    </section>

    <section class="portfolio-content">
      <div class="container">
        <p class="leading-relaxed mb-10  xl:px-32">
          COVID threw a lot of things off this year, and our wedding was one of them. We were planning it last year and
          when COVID hit in 2020, we paused all planning. We decided to get married in the courthouse but when my mom
          and mother-in-law found out, they were not having it.
        </p>
        <p class="leading-relaxed mb-10  xl:px-32">
          We needed a quick way to get an invitation out to guests because our timeline for the wedding was so short. I
          designed a digital invitation in Sketch that would match the decor\theme of the wedding and built it using
          Nuxt and Tailwind CSS. I deployed it to netlify and purchased a custom domain there which made deployment a
          breeze.
        </p>
        <p class="leading-relaxed mb-10 xl:px-32">
          Soon after, a wedding was booked at the Hilton here in Ocala and it was on really short notice, so one night,
          I designed and built a wedding landing page. I used Tailwind, Nuxt, and Netlify to build this project and it
          was a great experience, aside from the form disappearing sometimes 🙃
        </p>
        <img
          src="/img/full/wedding.jpg"
          alt="high res image of the our wedding website"
          class="block max-w-full mb-16 "
        />
        <div class="text-center mb-16 xl:mb-20">
          <p class="text-2xl mb-4">Want to check out the finished product?</p>
          <a
            href="https://renterswarehouse.com"
            class="inline-block rounded bg-primary border border-solid border-primary px-10 py-5 text-white text-lg"
            target="_blank"
            >Visit Website</a
          >
        </div>
      </div>
    </section>

    <nav class="portfolio-nav mt-20 ">
      <div class="container flex justify-between ">
        <nuxt-link to="/portfolio/renters-warehouse">
          <span class="block rubik font-bold text-md lg:text-xl mb-2">Renters Warehouse</span>
          <span class="block text-gray-600">&laquo; View Project</span>
        </nuxt-link>
        <nuxt-link to="/portfolio" class="hidden md:inline-block text-right">
          <span class="block rubik font-normal text-xl mb-2">Back to Portfolio</span>
        </nuxt-link>
        <nuxt-link to="/portfolio/roro" class="text-right">
          <span class="block rubik font-bold text-md lg:text-xl mb-2">RORO</span>
          <span class="block text-gray-600">View Project &raquo;</span>
        </nuxt-link>
      </div>
    </nav>
  </div>
</template>

<style lang="postcss"></style>
