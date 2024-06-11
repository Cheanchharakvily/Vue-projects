<template>
  <div class="container">
    <div class="navbar">
      <Navigation />
    </div>
    <div class="right-tabs">
      <Righttab />
    </div>
    <div class="playlist-tabs">
      <PlaylistView />
    </div>
    <div class="songs-tabs">
      <SongsView />
    </div>
    <div class="bottom-tabs">
      <BottomView />
    </div>
  </div>
</template>

<script>
// Import the component
import Navigation from './components/Navigation-bar.vue'
import Righttab from './components/Right-tabs.vue'
import PlaylistView from './components/PlaylistView.vue'
import SongsView from './components/SongsView.vue'
import BottomView from './components/BottomView.vue'

export default {
  name: 'NameComponents', // Updated to a multi-word name
  components: {
    Navigation,
    Righttab,
    PlaylistView,
    SongsView,
    BottomView
  }
}
</script>

<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300&display=swap');

* {
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: 'Almarai', sans-serif;
  background-color: #191717;
}

.container {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 80% auto;
  grid-template-rows: 60px 270px auto auto;
}

.navbar {
  grid-column-start: 1;
  grid-column-end: 2;
}

.right-tabs {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 4;
}

.playlist-tabs {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}

.songs-tabs {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 4;
}

.bottom-tabs {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 4;
  grid-row-end: 5;
}</style>
