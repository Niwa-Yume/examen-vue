import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FilmCard from '@/component/FilmCard.vue'
import { films } from '@/assets/arena-lapraille.js'
import { createPinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'

describe('FilmCard', () => {
  const testFilm = films[0]
  const pinia = createPinia()

  const router = createRouter({
    history: createMemoryHistory('/'),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: {}
      },
      {
        path: '/film/:id',
        name: 'Film',
        component: {}
      }
    ]
  })

  beforeEach(async () => {
    // Navigate to home route before each test
    await router.push('/')
  })

  it('displays the film title', () => {
    const wrapper = mount(FilmCard, {
      props: {
        film: testFilm
      },
      global: {
        plugins: [pinia, router]
      }
    })
    expect(wrapper.text()).toContain('Kung Fu Panda 4')
  })

  it('does not display the film description', () => {
    const wrapper = mount(FilmCard, {
      props: {
        film: testFilm
      },
      global: {
        plugins: [pinia, router]
      }
    })
    expect(wrapper.text()).not.toContain('Le guerrier dragon Po affronte')
  })
})