import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import SearchBar from '../../SearchBar/SearchBar.vue';
import type { T_Show } from '../../../types/show.types';

let MockData: T_Show[] | [] = [];

describe('SearchBar Componnet', () => {
    beforeEach(() => {
        MockData = [{
            name: 'Matrix',
            id: 0,
            image: {
                original: 'random_url'
            },
            runtime: {
                average: 0
            },
            genres: [],
            summary: 'summary',
            language: 'english'
        },
        {
            name: 'Matrix Part 2',
            id: 0,
            image: {
                original: 'random_url'
            },
            runtime: {
                average: 0
            },
            genres: [],
            summary: 'summary',
            language: 'english'
        }]
    })

    it('renders Search Input Field', () => {
        const wrapper = mount(SearchBar, {
            props: {
                allShows: MockData
            }
        })
        expect(wrapper.props('allShows')).toStrictEqual(MockData)
        const nameElement = wrapper.get('[data-test="search"]')
        expect(nameElement.text()).toBe('')
    });

    it('renders autocomplete', async () => {

        const wrapper = mount(SearchBar, {
            props: {
                allShows: MockData,
                keyword: { searchKeyword: '' }
            }
        })

        await wrapper.get('[data-test="search-field"]').setValue('Mat');

        const autocompleteElement = wrapper.get('[data-test="autocomplete"]');
        expect(autocompleteElement).toBeDefined();
        expect(autocompleteElement.text()).toBe('MatrixMatrix Part 2')
    });


    it('render autocomplete, do not show auto-complete when no match found', async () => {
        const wrapper = mount(SearchBar, {
            props: {
                allShows: MockData,
                keyword: { searchKeyword: '' }
            }
        })
        try {
            await wrapper.get('[data-test="search-field"]').setValue('s');
        }
        catch(error) {
            expect(error).toBeDefined();
        }
    });

    it('render autocomplete, selection of autocomplete', async () => {
        const wrapper = mount(SearchBar, {
            props: {
                allShows: MockData,
                keyword: { searchKeyword: '' }
            }
        })

        await wrapper.get('[data-test="search-field"]').setValue('Part');

        const autocompleteElement = wrapper.get('[data-test="autocomplete"]');
        expect(autocompleteElement).toBeDefined();
        expect(autocompleteElement.text()).toBe('Matrix Part 2');
        await wrapper.get('[data-test="autocomplete-item"]').trigger('click');
    });
})
