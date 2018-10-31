import Vue from 'vue';
import Hello from '@/components/Hello';

const app = new Vue({
  el: '#app',
  template: `
  <hello />
  `,
  data: {},
  components: {
    Hello
  }
})
