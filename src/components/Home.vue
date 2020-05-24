<template>
    <v-container>        
        <v-layout no-gutters class="mt-2 mb-2">
            <v-flex xs12 sm6 class="text-sm-right pr-1">
                <v-btn large router to="/Gallery" style="background-color: rgb(164, 236, 33)">Check out more!</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-sm-left">
                <v-btn large router to="/Contact" style="background-color: rgb(164, 236, 33)">Get an estimate</v-btn>
            </v-flex>
        </v-layout>
        <v-layout style="margin-bottom: 10rem">
            <v-flex xs12>
                <v-carousel hide-delimiters height="auto">
                    <v-carousel-item
                    v-for="(banner,i) in banners"
                    :key="i"
                    :src="banner.image"
                    reverse-transition="fade-transition"
                    transition="fade-transition">
                    </v-carousel-item>
                    <v-carousel-item
                    reverse-transition="fade-transition"
                    transition="fade-transition">
                    <iframe width="100%" height="500" :src="bannerMovie" frameborder="0" allow="encrypted-media"></iframe>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data (){
        return{
            banners: [
                {image: require('../assets/banner.png')},
            ],
            bannerMovie: require('../assets/BannerMovie.mp4')
        }
    }
}
</script>