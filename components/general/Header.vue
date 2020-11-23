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
  @apply mx-4;
}

.main-nav-link {
  @apply block py-2 tracking-wide relative;
  &:after {
    content: '';
    @apply h-1 w-0 absolute block left-0 bottom-0 bg-accent transition-all duration-500;
  }

  &:hover {
    @apply text-accent;
    &:after {
      @apply w-4;
    }
  }
  &.nuxt-link-active {
    &:after {
      width: 1rem;
    }
    &:hover {
      @apply text-primary-800;
    }
  }

  .light-mode & {
    &:hover {
    }
  }
}
</style>
