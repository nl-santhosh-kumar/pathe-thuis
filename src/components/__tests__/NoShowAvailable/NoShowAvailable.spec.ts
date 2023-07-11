import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NoShowAvailable from '../../NoShowAvailable/NoShowAvailable.vue';

describe('NoShowAvailable Componnet', () => {
  it('renders properly', () => {
    const wrapper = mount(NoShowAvailable)
    expect(wrapper.text()).toBe("No Show Available, please refine your search.")
  });
  })
