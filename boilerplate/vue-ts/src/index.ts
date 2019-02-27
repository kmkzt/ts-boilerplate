import Vue from 'vue'
import Hello from '@/components/Hello.vue'

const app = new Vue({
  el: '#app',
  template: `
  <hello />
  `,
  data: {},
  components: {
    Hello,
  },
})
