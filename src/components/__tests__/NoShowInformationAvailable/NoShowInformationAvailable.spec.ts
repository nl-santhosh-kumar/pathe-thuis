import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import NoShowInformationAvailable from '../../NoShowInformationAvailable/NoShowInformationAvailable.vue'

describe('SearchBar Componnet', () => {
  it('renders properly', () => {
    const wrapper = mount(NoShowInformationAvailable)
    expect(wrapper.text()).toBe("No Show Information Available, please refine your search. Go to Home Page")
  });
  })
