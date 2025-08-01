<template>

  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-avatar
        v-bind="props"
        size="50"
        icon="mdi-face-agent"
        :color="isHovering ? 'amber' : 'primary'"
        style="position: fixed; bottom: 60px; right: 10px; z-index: 999;"
        @click="scrollToFooter"
      ></v-avatar>
    </template>
  </v-hover>

  <v-container max-width="1200" class="max-auto">
    <v-row no-gutters>
      <v-col
        cols="12"
        class="d-flex align-center justify-space-between"
      >
        <img :src="getLogo('logo-black.png')" width="169" height="48"/>
        
        <v-menu
          :close-on-content-click="false"
        >
          <template v-slot:activator="{ props }">
            <img
              v-bind="props"
              :src="getFlag(`${locale}.svg`)" width="32" height="25"
              class="rounded-lg border-thin"
            />
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in locales"
              :key="index"
              :value="index"
              :title="item.name"
              @click="setLocale(item.code)"
              link
              :class="{ 'bg-primary': item.code === locale }"
            >
              <template #prepend>
                <img
                  :src="getFlag(`${item.code}.svg`)" width="32" height="25" class="mr-2 rounded-lg border-thin"
                />
              </template>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>

  <v-container max-width="1200" class="max-auto">
    <v-row>
      <v-col
        v-if="$vuetify.display.xs"
        cols="12"
        sm="6"
      >
        <v-card class="rounded-lg elevation-2" flat>
          <v-responsive :aspect-ratio="16/9">
            <v-img
              :src="getImage('banner.png')"
              cover
              elevation="2"
            ></v-img>
          </v-responsive>
        </v-card>
      </v-col>

      <v-col
        cols="12" sm="6" md="6" lg="6"
        class="d-flex flex-column justify-center align-center"
      >
        <h1 class="text-center mb-4 text-h1 header-font" style="color: #0a7d83;">{{ $t('banner_title') }}</h1>
        <p class="text-center text-body-1 mb-6">{{ $t('banner_subtitle') }}</p>
        <v-btn
          :text="$t('banner_button')"
          rounded="lg"
          width="50%"
          variant="tonal"
          size="x-large"
          class="text-none font-weight-bold"
          @click="scrollToFooter"
        ></v-btn>
      </v-col>

      <v-col
        v-if="$vuetify.display.smAndUp"
        cols="6"
      >
        <v-card class="rounded-lg elevation-2" flat>
          <v-responsive :aspect-ratio="16/9">
            <v-img
              :src="getImage('banner.png')"
              cover
              elevation="2"
            ></v-img>
          </v-responsive>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="bg-grey-lighten-4 py-8">
    <v-container max-width="1200" class="max-auto px-0">
      <v-card
        flat
        class="text-center bg-transparent elevation-0"
      >
        <template #title>
          <h2 class="text-center">{{ $t('services_title') }}</h2>
        </template>
        <template #text>
          <p class="text-body-1">{{ $t('services_description') }}</p>
        </template>
      </v-card>

      <v-row>
        <v-col
          cols="12" sm="6" md="4"
          v-for="(service, index) in $tm('services_list')"
        >
          <v-card class="py-4 rounded-lg elevation-4" min-height="230">
            <template #title>
              <div class="d-flex flex-column align-center">
                <v-avatar
                  size="56" tile class="d-flex align-center justify-center"
                  :image="getImage($rt(service.image))"
                ></v-avatar>
                <h3 class="text-h5 text-center">{{ $rt(service.name) }}</h3>
              </div>
            </template>
            <template #text>
              <p class="text-body-1">{{ $rt(service.description) }}</p>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

  <v-container max-width="1200" class="max-auto my-6">
    <v-card flat>
      <template #title>
        <h2 class="text-center">{{ $t('price_title') }}</h2>
      </template>
      <template #text>
        <p class="text-body-1 text-center">{{ $t('price_description') }}</p>
      </template>
    </v-card>
    <v-row>
      <v-col
        cols="12" sm="6" md="6"
        v-for="(price, index) in $tm('price_list')"
      >
        <v-card
          class="rounded-lg elevation-4 py-4"
          flat
          :min-height="xs ? 200 : 360"
        >
          <v-card-title class="text-h5 text-center font-weight-bold">{{ $rt(price.name) }}</v-card-title>
          <v-list-item
            class="border-b-thin mx-4 px-0"
            v-for="(item, index) in price.items"
          >
            <template #prepend>
              <span class="text-h6">{{ $rt(item.name) }}</span>
            </template>
            <template #append>
              <span class="text-h6 font-weight-bold">{{ $rt(item.price) }}</span>
            </template>
          </v-list-item>
          <p class="font-italic px-4" v-if="price.description">{{ $rt(price.description) }}</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="bg-teal-lighten-5 py-8">
    <v-container max-width="1200" class="max-auto px-0">
      <v-row>
        <v-col cols="12" sm="6" md="6" class="d-flex align-center justify-center">
          <v-img
            :src="getImage('about-us.jpg')"
            class="rounded-lg"
            cover
            height="380"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-card class="py-4 px-0 bg-transparent" flat>
            <template #title>
              <p class="text-h4 text-center font-weight-bold">{{ $t('about_title') }}</p>
            </template>
            <v-card-text class="px-0">
              <p class="text-body-1">{{ $t('about_description') }}</p>
              <p class="text-body-1 mt-3">{{ $t('about_mission') }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

  <v-container max-width="1200" class="max-auto my-6">
    <v-card flat>
      <template #title>
        <h2 class="text-center">{{ $t('testimonials_title') }}</h2>
      </template>
      <template #text>
        <p class="text-body-1 text-center">{{ $t('testimonials_subtitle') }}</p>
      </template>
    </v-card>

    <v-row>
      <v-col
        cols="12" sm="6" md="4"
        v-for="(testimonial, index) in $tm('testimonials_list')"
      >
        <v-card class="py-4" min-height="230">
          <template #title>
            <v-list-item
              :prepend-avatar="$rt(testimonial.avatar)"
              :title="$rt(testimonial.name)"
              :subtitle="$rt(testimonial.from)"
            ></v-list-item>
          </template>
          <template #text>
            <p class="text-body-1">{{ $rt(testimonial.feedback) }}</p> 
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="py-8" style="background-color: #00323b;" id="footer">
    <v-container max-width="1200" class="max-auto py-0">
      <v-row>
        <v-col cols="12" sm="6" md="6" :class="smAndDown ? 'text-center' : 'text-left'">
          <img
            :src="getLogo('logo-white.png')"
            cover
            height="70"
          />
        </v-col>
        <v-col cols="12" sm="6" md="6" :class="['d-flex flex-column justify-end', smAndDown ? 'align-center' : 'align-end']">
          <p class="text-white my-2">{{ $t('contact_title')}}:</p>
          <div class="d-flex align-center ga-3">
            <v-avatar
              size="32"
              :image="getContact('phone.svg')"
              @click=""
            ></v-avatar>
            <v-avatar
              size="32"
              :image="getContact('facebook.svg')"
            ></v-avatar>
            <v-avatar
              size="32"
              :image="getContact('kakaotalk.svg')"
            ></v-avatar>
            <v-avatar
              size="32"
              :image="getContact('wechat.svg')"
            ></v-avatar>
            <v-avatar
              size="32"
              :image="getContact('whatsapp.svg')"
            ></v-avatar>
            <v-avatar
              size="32"
              :image="getContact('zalo.svg')"
              class="bg-white"
            ></v-avatar>
          </div>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12" :class="['mt-4', smAndDown ? 'text-center' : 'text-left']">
          <p class="text-white text-caption">© 2023 Massage Tại Nhà Đà Nẵng. All rights reserved.</p>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script setup lang="ts">
const { smAndDown, xs } = useDisplay();
const { locales, setLocale, locale } = useI18n();
console.log('Current locale:', locale.value);

const scrollToFooter = () => {
  const footerElement = document.getElementById('footer');
  if (footerElement) {
    footerElement.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>