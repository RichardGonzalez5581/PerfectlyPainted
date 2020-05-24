<template>
  <v-app light>
    <v-navigation-drawer v-model="sideNav" absolute temporary>
    <v-card class="mx-auto" max-width="300" tile>
    <v-list flat>
      <v-subheader>Perfectly Painted</v-subheader>
      <v-list-item-group v-model="item" color="primary">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
  </v-list>
  </v-card>
    </v-navigation-drawer>
    <v-card>
    <v-toolbar dark style="background-color: rgb(102, 45, 145)">
      <v-app-bar-nav-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>Perfectly Painted</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="(item, i) in items" :key= "i" v-text="item.text"></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </v-card>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    sideNav: false,
    items: [
      { text: 'Home'},
      { text: 'Services'},
      { text: 'Gallery'},
      { text: 'Reviews'},
      { text: 'About Us'},
      { text: 'Contact'}
    ]
  }),
};
</script>
