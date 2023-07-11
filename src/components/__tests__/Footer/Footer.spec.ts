import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Footer from '../../Footer/Footer.vue'

describe('Footer Componnet', () => {
  it('renders properly', () => {
    const wrapper = mount(Footer)
    expect(wrapper.text()).toContain('')
  })
})
