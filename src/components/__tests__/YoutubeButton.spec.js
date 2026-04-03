import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import YoutubeButton from '@/components/YoutubeButton.vue'

const YOUTUBE_URL = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'

describe('YoutubeButton', () => {
  it('affiche un lien <a>', () => {
    const wrapper = mount(YoutubeButton, { props: { href: YOUTUBE_URL } })

    expect(wrapper.find('a').exists()).toBe(true)
  })

  it('applique le href fourni en prop', () => {
    const wrapper = mount(YoutubeButton, { props: { href: YOUTUBE_URL } })

    expect(wrapper.find('a').attributes('href')).toBe(YOUTUBE_URL)
  })

  it('affiche le contenu du slot', () => {
    const wrapper = mount(YoutubeButton, {
      props: { href: YOUTUBE_URL },
      slots: { default: 'Voir sur Youtube' }
    })

    expect(wrapper.text()).toBe('Voir sur Youtube')
  })

  it('applique la classe CSS "button"', () => {
    const wrapper = mount(YoutubeButton, { props: { href: YOUTUBE_URL } })

    expect(wrapper.find('a').classes()).toContain('button')
  })
})
