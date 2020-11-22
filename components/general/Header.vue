<template>
  <header class="main-header py-20">
    <div class="container flex justify-between">
      <div class="branding">
        <span class="rubik block text-4xl font-bold tracking-tightest text-gray-900 mb-4">
          <nuxt-link to="/" class="no-underline">Jeremy Hutchcraft</nuxt-link>
        </span>
        <span class="alternative-heading">Developer &amp; Designer</span>
      </div>

      <nav class="main-nav">
        <ul class="flex">
          <li class="">
            <nuxt-link class="block px-4 py-2 tracking-wide" to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li class="">
            <a class="block px-4 py-2 tracking-wide" href="mailto:hutch78@me.com">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="postcss" scoped>
.main-nav {
  .nuxt-link-exact-active {
    @apply text-accent-100;
    &:hover {
      /* @apply ; */
    }
  }
  .light-mode {
    & .nuxt-link-exact-active {
      @apply text-accent-600;
      &:hover {
        @apply text-white;
      }
    }
  }
}
</style>
