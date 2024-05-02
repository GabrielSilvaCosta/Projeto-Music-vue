import SongItem from '@/components/SongItem.vue'
import { mount, RouterLinkStub } from '@vue/test-utils'

describe('SongItem.vue', () => {
  test('render song.display_name', () => {
    const song = {
      modified_name: 'test'
    }

    const wrapper = mount(SongItem, {
      propsData: {
        song
      },
      global: {
        components: {
          'router-link': RouterLinkStub
        }
      }
    })

    const compositionAuthor = wrapper.find('.text-gray-600')

    expect(compositionAuthor.text()).toBe(song.modified_name)
  })
})
