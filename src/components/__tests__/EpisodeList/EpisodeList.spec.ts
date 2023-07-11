import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import EpisodeList from '../../EpisodeList/EpisodeList.vue'

describe('EpisodeList Componnet', () => {

  it('renders Episode name', () => {
      const mockTest = {
        name: 'santhos',
        season: 'first',
        image: {
            original: 'random_url'
        },
        runtime: {
            average: 0
        }
    }
    const wrapper = mount(EpisodeList, {
        props: {
            episodeList:[mockTest]
        }
    })
    expect(wrapper.props('episodeList')).toStrictEqual([mockTest])
    const nameElement = wrapper.get('[data-test="name"]')
    expect(nameElement.text()).toBe(mockTest.name)
  });

  it('renders episode season and runtime', () => {
    const mockObject = {
      name: 'santhos',
      season: 'first',
      image: {
          original: 'random_url'
      },
      runtime: {
          average: 0
      }
  }
  const wrapper = mount(EpisodeList, {
      props: {
          episodeList:[mockObject]
      }
  })
  const subtitleElement = wrapper.get('[data-test="subtitle"]');
  const expectedResult = `Season ${mockObject.season} | ${mockObject.runtime.average} Minutes`
  expect(subtitleElement.text()).toEqual(expectedResult)
})
})
