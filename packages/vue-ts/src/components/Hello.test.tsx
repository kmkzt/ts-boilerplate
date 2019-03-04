import { mount } from '@vue/test-utils'
import Hello from './Hello.vue'

describe('Hello.vue', () => {
  it('render', () => {
    const wrapper = mount(Hello)
    expect(wrapper.element).toMatchSnapshot()
  })
})
