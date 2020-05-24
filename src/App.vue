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
          :to="item.link">
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
      <v-toolbar-title>
        <v-layout row align-center justify-center fill-height pt-1 style="width: 16%">
          <v-flex><span><router-link to="/" tag="span" style="cursor:pointer"><v-img :src="banner_logo" ></v-img></router-link></span></v-flex>
        </v-layout>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn text v-for="(item, i) in items" 
        :key= "i" 
        v-text="item.text"
        :to="item.link"></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </v-card>
    <main>
      <router-view></router-view>
    </main>
    <v-footer dark color="black" style="position: absolute; right: 0; bottom:0; left:0;">
    <v-card flat tile class="black lighten-1 white--text text-center mx-auto">
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
          :href='icon.link'
          target='_blank'
        >
          <v-icon size="24px">{{ icon.logo }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Phone - (732)-507-5770 
      </v-card-text>
      <v-card-text class="white--text pt-0">
        Email - Email@gmail.com 
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    sideNav: false,
    items: [
      { text: 'Home', link: '/'},
      { text: 'Services', link: '/Services'},
      { text: 'Gallery', link: '/Gallery'},
      { text: 'Reviews', link: '/Reviews'},
      { text: 'About Us', link: '/About'},
      { text: 'Contact', link: '/Contact'}
    ],
    icons: [
        {logo: 'mdi-facebook', link: 'https://www.facebook.com/Perfectly-Painted-101008504584374'},
        {logo: 'mdi-instagram', link: 'https://www.instagram.com/perfectlypainted.co/'}
      ],
      banner_logo: require('./assets/navbar_logo.png')
  }),
};
</script>
