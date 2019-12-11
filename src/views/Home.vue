<template>
  <div class="home">
    <SiteHeader />
    <ProductList
      title='Popular Movies to Watch Now'
      subtitle="Most watched movies by days"
      :movies="moviesB1"
    />
    <ProductList title="Romantic for Valentines Day" :movies="moviesB2" />
    <ProductList title="Action & Drama Movies" :movies="moviesB3" />
    <site-footer></site-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductList from '@/components/ProductList.vue';

export default {
  name: 'home',
  components: {
    ProductList
  },
  data() {
    return {
      moviesB1: [
        {
          id: 0,
          year: '2017',
          title: 'Delta Bravo',
          categories: 'Action',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg'
        },
        {
          id: 1,
          year: '2016',
          title: 'Mad',
          categories: 'Drama',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/43-only-lovers-left-alive-300x450.jpg'
        },
        {
          id: 2,
          year: '2018',
          title: 'Oh Lucy',
          categories: 'Action, Comedy',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/33-a-woman-under-the-influence-300x450.jpg'
        },
        {
          id: 3,
          year: '2018',
          title: 'Euphoria',
          categories: 'Action, Adventure',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/23-300x450.jpg'
        },
        {
          id: 4,
          year: '2018',
          title: 'Black Mirror',
          categories: 'Action, Mystery',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg'
        },
        {
          id: 5,
          year: '2016',
          title: 'The Convenient Groom',
          categories: 'Action, Adventure, Romance',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/1-300x450.jpg'
        },
        {
          id: 6,
          year: '2017',
          title: 'Paradigm Lost',
          categories: 'Action, Documentary',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg'
        },
        {
          id: 7,
          year: '2018',
          title: 'Pacific Rim: Uprising',
          categories: 'Action, Sci-Fi',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/50-the-300x450.jpg'
        },
        {
          id: 8,
          year: '2018',
          title: 'Dirt',
          categories: 'Action, Sport',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/49-the-sure-thing-300x450.jpg'
        },
        {
          id: 9,
          year: '2016',
          title: 'Fantastic Beasts and Where to Find Them',
          categories: 'Action, Annimation, Family',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/48-take-shelter-300x450.jpg'
        },
        {
          id: 10,
          year: '2008',
          title: 'Sunday',
          categories: 'Action, Adventure, Mystery',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/47-sila-spokoju-300x450.jpg'
        },
        {
          id: 11,
          year: '2018',
          title: 'Bpm',
          categories: 'Action, Drama',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-she-is-funny-that-way-300x450.jpg'
        }
      ],
      moviesB2: [
        {
          id: 0,
          year: '2017',
          title: 'War for the Planet of the Apes',
          categories: 'Action, Adventure, Animation, Thriller',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/37-dangerous-mind-300x450.jpg'
        },
        {
          id: 1,
          year: '2018',
          title: 'The Tale',
          categories: 'Action, Thriller',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/40-murder-by-death-300x450.jpg'
        },
        {
          id: 2,
          year: '2018',
          title: 'The Strangers: Prey At Night',
          categories: 'Action, Horror',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/10-300x450.jpg'
        },
        {
          id: 3,
          year: '2018',
          title: 'The Mercy',
          categories: 'Action, Biography',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/14-300x450.jpg'
        },
        {
          id: 4,
          year: '2014',
          title: 'The Maze Runner',
          categories: 'Action, Adventure, Mystrey',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/17-300x450.jpg'
        },
        {
          id: 5,
          year: '2018',
          title: 'The Lost Viking',
          categories: 'Action, Adventure',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/4-300x450.jpg'
        },
        {
          id: 6,
          year: '2018',
          title: 'The Last Witness',
          categories: 'Action, Thriller',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/31-300x450.jpg'
        },
        {
          id: 7,
          year: '2017',
          title: 'The killing Of The Sacred Deer',
          categories: 'Action, Thiller',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/16-300x450.jpg'
        },
        {
          id: 8,
          year: '2016',
          title: 'The Convenient Groom',
          categories: 'Action, Adventure, Romance',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/1-300x450.jpg'
        },
        {
          id: 9,
          year: '2017',
          title: 'The Big Sick',
          categories: 'Adventure, Comedy, Romance',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/36-cztery-lwy-300x450.jpg'
        },
        {
          id: 10,
          year: '2016',
          title: 'The Accountant',
          categories: 'Action, Adventure, Comedy',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/43-only-lovers-left-alive-300x450.jpg'
        },
        {
          id: 11,
          year: '2008',
          title: 'Sunday',
          categories: 'Action, Adventure, Mystery',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/47-sila-spokoju-300x450.jpg'
        },
        {
          id: 12,
          year: '2017',
          title: 'Spiderman 3',
          categories: 'Adventure, History, Sci-Fi',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg'
        },
        {
          id: 13,
          year: '2018',
          title: 'Renegades',
          categories: 'Action, Adventure',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/35-brothers-bloom-300x450.jpg'
        },
        {
          id: 14,
          year: '2017',
          title: 'Project Cars 3',
          categories: 'Action, Adventure, Animation',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/19-300x450.jpg'
        }
      ],
      moviesB3: [
        {
          id: 0,
          year: '2016',
          title: 'Fantastic Beasts and Where to Find Them',
          categories: 'Action, Annimation, Family',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/48-take-shelter-300x450.jpg'
        },
        {
          id: 1,
          year: '2008',
          title: 'Sunday',
          categories: 'Action, Adventure, Mystery',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/47-sila-spokoju-300x450.jpg'
        },
        {
          id: 2,
          year: '2018',
          title: 'Bpm',
          categories: 'Action, Drama',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/46-she-is-funny-that-way-300x450.jpg'
        },
        {
          id: 3,
          year: '2018',
          title: 'Renegades',
          categories: 'Action, Adventure',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/35-brothers-bloom-300x450.jpg'
        },
        {
          id: 4,
          year: '2018',
          title: 'Have a Nice Day',
          categories: 'Action, Animation',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/26-300x450.jpg'
        },
        {
          id: 5,
          year: '2018',
          title: '12 Strong',
          categories: 'Action, History',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/34-al-jazda-300x450.jpg'
        },
        {
          id: 6,
          year: '2017',
          title: 'Lady Bird',
          categories: 'Action, Comedy',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/38-layer-cake-300x450.jpg'
        },
        {
          id: 7,
          year: '2017',
          title: 'Spiderman 3',
          categories: 'Adventure, History, Sci-Fi',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg'
        },
        {
          id: 8,
          year: '2018',
          title: 'Freak Show',
          categories: 'Action, Comedy',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/41-na-ostrzu-300x450.jpg'
        },
        {
          id: 9,
          year: '2017',
          title: 'Mary Shelley',
          categories: 'Action, Adventure, Biography',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/30-300x450.jpg'
        },
        {
          id: 10,
          year: '2017',
          title: 'Gnome Alone',
          categories: 'Action, Animation',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/27-300x450.jpg'
        },
        {
          id: 11,
          year: '2017',
          title: 'Paradigm Lost',
          categories: 'Action, Documentary',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/51-walk-hard-300x450.jpg'
        },
        {
          id: 12,
          year: '2014',
          title: 'A Walk Among The Tombstones',
          categories: 'Action, Adventure, Crime',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/44-playing-it-cool-300x450.jpg'
        },
        {
          id: 13,
          year: '2018',
          title: 'The Last Witness',
          categories: 'Action, Thriller',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/31-300x450.jpg'
        },
        {
          id: 14,
          year: '2017',
          title: 'Bad Genius',
          categories: 'Comedy, Crime, Sci-Fi',
          thumb:
            'https://demo2.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/25-300x450.jpg'
        }
      ]
    };
  },
  created() {
    $(function() {
      $('[data-toggle="popover"]').popover();
    });
  }
};
</script>
