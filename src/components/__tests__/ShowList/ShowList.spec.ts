import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import ShowList from '../../ShowList/ShowList.vue'

describe('ShowList Component', async() => {
  it('renders ShowList Input Field', () => {
    const mockRoute = {
        params: {
          id: 1
        }
      }

      const mockData = [{
        name: 'santhos',
        id: 0,
        image: {
            original: 'random_url'
        },
        runtime: {
            average: 0
        },
        genres:[],
        language: 'english',
        summary: 'summary'
    }]
    const wrapper = mount(ShowList, {
        props: {
            allShows:mockData
        },
        global: {
            mocks: {
                $route: mockRoute,
            }
        }
    })
    expect(wrapper.props('allShows')).toStrictEqual(mockData)
    const showname = wrapper.get('[data-test="show-name"]')
    expect(showname.text()).toBe('santhos')
    const showInformation = wrapper.get('[data-test="show-information"]')
    expect(showInformation.text()).toBe('english | 0 Minutes |')
  });

  it('render NoShowAvailable', () => {
   
      const mockData = [{
        name: 'santhos',
        id: 0,
        image: {
            original: 'random_url'
        },
        runtime: {
            average: 0
        },
        genres:[],
        language: 'english',
        summary: 'summary'
    }]
    const wrapper = mount(ShowList, {
        props: {
            allShows:[]
        }
    })
    expect(wrapper.props('allShows')).toStrictEqual([])
    const showname = wrapper.get('[data-test="no-show-available"]');
    expect(showname.text()).toBe('No Show Available, please refine your search.')
  });
})
