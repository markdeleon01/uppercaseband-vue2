import { mount } from '@vue/test-utils'
import { expect } from 'chai'
import NavBar from '@/components/NavBar.vue'

describe('NavBar.vue', () => {
  it('ensures navigation bar is displayed with four main links', () => {
    const wrapper = mount(NavBar, {
      stubs: ['router-link', 'router-view']
    })

    expect(wrapper.find('#nav').vm.$children).to.have.lengthOf(4)
  })
})
