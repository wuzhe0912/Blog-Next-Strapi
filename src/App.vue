<template lang="pug">
  v-app#inspire
    v-navigation-drawer(v-model="drawer" app)
      v-list-item
        v-list-item-content
          v-list-item-title(class="title") European bison
      v-divider
      v-list(dense nav)
        v-list-item(
          v-for="node in list"
          :key="node.title" link
          :to="node.link"
        )
          v-list-item-icon
            v-icon {{ node.icon }}
          v-list-item-content
            v-list-item-title {{ node.title }}
    v-app-bar(app)
      v-app-bar-nav-icon(@click="drawer = !drawer")
      v-toolbar-title 動態標題(temp)
    v-main
      router-view
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    list: [
      { title: 'Todo', icon: 'mdi-view-dashboard', link: '/' },
      { title: 'Photos', icon: 'mdi-image', link: '/photos' },
      { title: 'Video', icon: 'mdi-video-box', link: '/video' },
    ],
  }),
};
</script>
