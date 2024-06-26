import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import SongItem from '@/components/SongItem.vue'

describe('Home.vue', () => {
  it('renders list of songs', () => {
    const songs = [{}, {}, {}]
    const component = shallowMount(Home, {
      data() {
        return {
          songs
        }
      },
      global: {
        mocks: {
          $t: (msg) => msg
        }
      }
    })

    const items = component.findAllComponents(SongItem)
    expect(items).toHaveLength(songs.length)

    items.forEach((item, i) => {
      expect(item.props('song')).toStrictEqual(songs[i])
    })
  })
})
