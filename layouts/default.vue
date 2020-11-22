<template>
  <div class="layout-wrapper">
    <Header />
    <Nav />
    <ColorModePicker />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/general/Header.vue'
import ColorModePicker from '~/components/general/ColorModePicker.vue'

export default {
  components: {
    Header,
    ColorModePicker
  }
}
</script>
