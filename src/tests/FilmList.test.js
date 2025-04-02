import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import FilmList from '@/component/FilmList.vue'
import { createPinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import { nextTick } from 'vue'

describe('FilmList', () => {
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
        await router.push('/')
    })

    it('filters films by title', async () => {
        const wrapper = mount(FilmList, {
            global: {
                plugins: [pinia, router]
            }
        })
        const searchInput = wrapper.find('input[type="text"]')

        await searchInput.setValue('Kung Fu')
        await nextTick()

        expect(wrapper.text()).toContain('Kung Fu Panda 4')
        expect(wrapper.text()).not.toContain('Wonka')
    })

    it('filters films by genre', async () => {
        const wrapper = mount(FilmList, {
            global: {
                plugins: [pinia, router]
            }
        })
        const searchInput = wrapper.find('input[type="text"]')

        await searchInput.setValue('Animation')
        await nextTick()

        expect(wrapper.text()).toContain('Kung Fu Panda 4')
        expect(wrapper.text()).toContain('Migration')
    })

    it('shows no results message when no films match', async () => {
        const wrapper = mount(FilmList, {
            global: {
                plugins: [pinia, router]
            }
        })
        const searchInput = wrapper.find('input[type="text"]')

        await searchInput.setValue('xyz123')
        await nextTick()

        expect(wrapper.text()).toContain('Aucun film ne correspond à votre recherche')
    })

    it('clears search when clicking clear button', async () => {
        const wrapper = mount(FilmList, {
            global: {
                plugins: [pinia, router]
            }
        })
        const searchInput = wrapper.find('input[type="text"]')

        await searchInput.setValue('Kung Fu')
        await nextTick()

        const clearButton = wrapper.find('button')
        await clearButton.trigger('click')
        await nextTick()

        expect(searchInput.element.value).toBe('')
        expect(wrapper.text()).toContain('Kung Fu Panda 4')
        expect(wrapper.text()).toContain('Wonka')
    })
})