import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BreadCrumb from '../../BreadCrumb/BreadCrumb.vue';

describe('BreadCrumb Componnet', () => {
  it('renders properly', () => {
    const wrapper = mount(BreadCrumb)
    expect(wrapper.text()).toContain('HomeShow Information')
  })
})
