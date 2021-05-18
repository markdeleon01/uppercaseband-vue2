import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import { expect } from 'chai'
import Discography from '@/views/Discography.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Discography.vue', () => {
  let state
  let store

  beforeEach(() => {
    // mock the state
    state = {
      releases: [
        {
          title: "'Time Space Warp'",
          releaseType: 'ALBUM',
          releaseDate: 'May 17 2013',
          imageUrl: 'timespacewarp_albumcover.png',
          spotifyUrl:
            'https://open.spotify.com/album/42XqkGCyqyjzf4kB0kFdvu?si=tn4ChbihRoy9PIfaSjPyYg'
        },
        {
          title: "'Ere'",
          releaseType: 'SINGLE',
          releaseDate: 'Dec 02 2014',
          imageUrl: 'ere_cover.png',
          spotifyUrl:
            'https://open.spotify.com/track/1QIwnzacd5KVjLsf3CZK2Y?si=25c450d9ed8f4623'
        },
        {
          title: "'Bukas Makalawa'",
          releaseType: 'EP',
          releaseDate: 'Mar 26 2017',
          imageUrl: 'bukas_makalawa.jpg',
          spotifyUrl:
            'https://open.spotify.com/album/4233FXws5N1g4lcllYxram?si=10Ka3-G2SxCWFJ6AjEdhag'
        },
        {
          title: "'Babalik'",
          releaseType: 'SINGLE',
          releaseDate: 'Dec 02 2017',
          imageUrl: 'ub_babalik_cover.jpg',
          spotifyUrl:
            'https://open.spotify.com/album/4fvgQ2m4ukSzEzHZATEMDc?si=zNMTPrCuTXS0fTCS_tbZrQ'
        },
        {
          title: "'Tanging Ikaw'",
          releaseType: 'SINGLE',
          releaseDate: 'Feb 09 2019',
          imageUrl: 'tanging-ikaw-cover-artwork.png',
          spotifyUrl:
            'https://open.spotify.com/album/4qkXXPQF8aiScuCMRuiqM1?si=iRCaY-2kQ9qZp740G-VodQ'
        }
      ]
    }

    // create a mock store with namespaced module and mocked state
    store = new Vuex.Store({
      modules: {
        discography: {
          state,
          namespaced: true
        }
      }
    })
  })

  it('ensures the Discography page is rendered containing key sections', () => {
    const wrapper = mount(Discography, { store, localVue })

    expect(wrapper.find('.discography').exists()).to.equal(true)
    expect(wrapper.findAll('.release-item')).to.have.lengthOf(5)
    expect(wrapper.findAll('.release-thumbnail')).to.have.lengthOf(5)
    expect(wrapper.findAll('.release-item > a')).to.have.lengthOf(5)
  })
})
