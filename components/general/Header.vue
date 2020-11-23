<template>
  <header class="main-header py-20">
    <div class="container md:flex md:justify-between">
      <div class="branding">
        <span class="rubik block text-4xl font-bold tracking-tightest text-gray-900 mb-4">
          <nuxt-link to="/" class="no-underline">Jeremy Hutchcraft</nuxt-link>
        </span>
        <span class="alternative-heading">Developer &amp; Designer</span>
      </div>

      <nav class="main-nav mt-8 md:mt-0">
        <ul class="flex">
          <li class="main-nav-item">
            <nuxt-link class="main-nav-link" to="/">Home</nuxt-link>
          </li>
          <li class="main-nav-item">
            <nuxt-link class="main-nav-link" to="/portfolio">Portfolio</nuxt-link>
          </li>
          <li class="main-nav-item">
            <nuxt-link class="main-nav-link" to="/contact">Contact</nuxt-link>
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
}

.main-nav-item {
  @apply mr-4;
  @media (min-width: theme('screens.md')) {
    @apply mx-4;
  }
}

.main-nav-link {
  @apply block py-2 tracking-wide relative text-white;
  &:after {
    content: '';
    @apply h-1 w-0 absolute block left-0 bottom-0 bg-accent transition-all duration-500;
  }

  &:hover,
  &:focus {
    @apply text-accent;
    &:after {
      @apply w-4;
    }
  }
  &.nuxt-link-exact-active {
    &:after {
      width: 1rem;
    }
    &:hover {
      @apply text-accent;
    }
  }
}

.light-mode {
  & .main-nav-link {
    @apply text-gray-800;
  }
}
</style>
