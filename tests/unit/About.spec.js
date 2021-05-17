import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { expect } from 'chai'
import About from '@/views/About.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('About.vue', () => {
  let state
  let store

  beforeEach(() => {
    // mock the state
    state = {
      members: [
        {
          name: 'Mark de Leon',
          role: 'vocals, guitars',
          'image-url': 'mark-deleon.png'
        },
        {
          name: 'Allan Lagat',
          role: 'bass',
          'image-url': 'allan-lagat.png'
        },
        {
          name: 'Joey Giagonia',
          role: 'lead guitars',
          'image-url': 'joey-giagonia.png'
        },
        {
          name: 'Kyle Saliva',
          role: 'drums',
          'image-url': 'kyle-saliva.png'
        }
      ]
    }

    // create a mock store with namespaced module and mocked state
    store = new Vuex.Store({
      modules: {
        members: {
          state,
          namespaced: true
        }
      }
    })
  })

  it('ensures the About page is rendered containing key sections', () => {
    const wrapper = shallowMount(About, { store, localVue })

    expect(wrapper.find('.about').exists()).to.equal(true)
    expect(wrapper.findAll('.member-item')).to.have.lengthOf(4)
    expect(wrapper.find('.band-pic').exists()).to.equal(true)
    expect(wrapper.find('.biography').exists()).to.equal(true)
  })
})
