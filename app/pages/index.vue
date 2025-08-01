<template>
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
              :src="getFlag('vi.svg')" width="32" height="25"
              class="rounded-lg"
            />
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in locales"
              :key="index"
              :value="index"
              :title="item.title"
            >
              <template #prepend>
                <img
                  :src="getFlag(item.icon)" width="32" height="25" class="mr-2 rounded-lg border-thin"
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
        <h1 class="text-center mb-4 text-h1 header-font">Massage Tại Nhà</h1>
        <p class="text-center text-body-1 mb-6">Trải nghiệm sự thư giãn tuyệt đối với dịch vụ massage chuyên nghiệp ngay tại ngôi nhà của bạn.</p>
        <v-btn
          text="Đặt Lịch Ngay"
          rounded="lg"
          width="50%"
          variant="tonal"
          class="text-none font-weight-bold"
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
          <h2 class="text-center">Dịch Vụ Của Chúng Tôi</h2>
        </template>
        <template #text>
          <p class="text-body-1">Chúng tôi cung cấp các dịch vụ massage chuyên nghiệp, giúp bạn thư giãn và phục hồi sức khỏe.</p>
        </template>
      </v-card>

      <v-row>
        <v-col cols="12" sm="6" md="4">
          <v-card class="py-4 rounded-lg elevation-4">
            <template #title>
              <div class="d-flex flex-column align-center">
                <v-avatar
                  size="56" tile class="d-flex align-center justify-center"
                  :image="getImage('massage-body.svg')"
                ></v-avatar>
                <h3 class="text-h5 text-center">Massage Toàn Thân</h3>
              </div>
            </template>
            <template #text>
              <p class="text-body-1">Trải nghiệm massage toàn thân giúp giảm căng thẳng, cải thiện tuần hoàn máu và mang lại cảm giác thư giãn tuyệt đối.</p>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="py-4 rounded-lg elevation-4">
            <template #title>
              <div class="d-flex flex-column align-center">
                <v-avatar
                  size="56" tile class="d-flex align-center justify-center"
                  :image="getImage('massage-body.svg')"
                ></v-avatar>
                <h3 class="text-h5 text-center">Massage Toàn Thân</h3>
              </div>
            </template>
            <template #text>
              <p class="text-body-1">Trải nghiệm massage toàn thân giúp giảm căng thẳng, cải thiện tuần hoàn máu và mang lại cảm giác thư giãn tuyệt đối.</p>
            </template>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <v-card class="py-4 rounded-lg elevation-4">
            <template #title>
              <div class="d-flex flex-column align-center">
                <v-avatar
                  size="56" tile class="d-flex align-center justify-center"
                  :image="getImage('massage-body.svg')"
                ></v-avatar>
                <h3 class="text-h5 text-center">Massage Toàn Thân</h3>
              </div>
            </template>
            <template #text>
              <p class="text-body-1">Trải nghiệm massage toàn thân giúp giảm căng thẳng, cải thiện tuần hoàn máu và mang lại cảm giác thư giãn tuyệt đối.</p>
            </template>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

  <v-container max-width="1200" class="max-auto my-6">
    <v-card flat>
      <template #title>
        <h2 class="text-center">Bảng Giá</h2>
      </template>
      <template #text>
        <p class="text-body-1 text-center">Chúng tôi cung cấp các gói dịch vụ đa dạng với mức giá hợp lý, phù hợp với nhu cầu của bạn.</p>
      </template>
    </v-card>
    <v-row>
      <v-col cols="12" sm="6" md="6">
        <v-card class="rounded-lg elevation-4" flat min-height="280">
          <v-card-title class="text-h5 text-center font-weight-bold">Massage</v-card-title>
          <v-list-item class="border-b-thin mx-4 px-0">
            <template #prepend>
              <span class="text-h6">60 phút</span>
            </template>
            <template #append>
              <span class="text-h6 font-weight-bold">350k ₫</span>
            </template>
          </v-list-item>
          <v-list-item>
            <template #prepend>
              <span class="text-h6">90 phút</span>
            </template>
            <template #append>
              <span class="text-h6">450k ₫</span>
            </template>
          </v-list-item>
          <v-list-item>
            <template #prepend>
              <span class="text-h6">120 phút</span>
            </template>
            <template #append>
              <span class="text-h6">550k ₫</span>
            </template>
          </v-list-item>
          <v-list-item>
            <template #prepend>
              <span class="text-h6">Đá Nóng</span>
            </template>
            <template #append>
              <span class="text-h6">+50k ₫</span>
            </template>
          </v-list-item>
          <v-list-item>
            <template #prepend>
              <span class="text-h6">Giác hơi</span>
            </template>
            <template #append>
              <span class="text-h6">+50k ₫</span>
            </template>
          </v-list-item>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="6">
        <v-card class="rounded-lg elevation-4" flat :min-height="xs ? 200 : 280">
          <v-card-title class="text-h5 text-center font-weight-bold">VIP Massage</v-card-title>
          <v-list-item>
            <template #prepend>
              <span class="text-h6">60 phút</span>
            </template>
            <template #append>
              <span class="text-h6">350k ₫</span>
            </template>
          </v-list-item>
          <v-list-item>
            <template #prepend>
              <span class="text-h6">90 phút</span>
            </template>
            <template #append>
              <span class="text-h6">450k ₫</span>
            </template>
          </v-list-item>
          <p class="font-italic px-4">* Trị liệu, thư giãn sâu kết hợp với đá nóng và giác hơi</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="bg-grey-lighten-4 py-8">
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
              <p class="text-h4 text-center font-weight-bold">Về Chúng Tôi</p>
            </template>
            <v-card-text class="px-0">
              <p class="text-body-1">Massage Tại Nhà Đà Nẵng tự hào là đơn vị cung cấp dịch vụ massage chuyên nghiệp, uy tín hàng đầu tại Đà Nẵng. Với đội ngũ kỹ thuật viên giàu kinh nghiệm, được đào tạo bài bản, chúng tôi cam kết mang đến cho quý khách những trải nghiệm thư giãn tuyệt vời nhất, ngay tại không gian riêng tư và thoải mái của bạn. Sứ mệnh của chúng tôi là giúp bạn tái tạo năng lượng, giảm căng thẳng và cải thiện sức khỏe toàn diện sau những giờ làm việc mệt mỏi. Hãy để chúng tôi chăm sóc bạn!</p>
              <p class="text-body-1 mt-3">Sứ mệnh của chúng tôi là giúp bạn tái tạo năng lượng, giảm căng thẳng và cải thiện sức khỏe toàn diện sau những giờ làm việc mệt mỏi. Hãy để chúng tôi chăm sóc bạn!</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>

  <v-container max-width="1200" class="max-auto my-6">
    <v-card flat>
      <template #title>
        <h2 class="text-center">Khách Hàng Nói Gì</h2>
      </template>
      <template #text>
        <p class="text-body-1 text-center">Đọc những đánh giá từ khách hàng của chúng tôi để hiểu rõ hơn về chất lượng dịch vụ.</p>
      </template>
    </v-card>

    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card class="py-4">
          <template #title>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
              title="Nguyễn Thị Lan"
              subtitle="Đà Nẵng, Việt Nam"
            ></v-list-item>
          </template>
          <template #text>
            <p class="text-body-1">Dịch vụ tuyệt vời! Kỹ thuật viên rất chuyên nghiệp và thân thiện. Tôi cảm thấy thư giãn hoàn toàn sau buổi massage.</p> 
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="py-4">
          <template #title>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/26.jpg"
              title="Trần Văn An"
              subtitle="Đà Nẵng, Việt Nam"
            ></v-list-item>
          </template>
          <template #text>
            <p class="text-body-1">Dịch vụ tuyệt vời! Kỹ thuật viên rất chuyên nghiệp và thân thiện. Tôi cảm thấy thư giãn hoàn toàn sau buổi massage.</p> 
          </template>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" md="4">
        <v-card class="py-4">
          <template #title>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/17.jpg"
              title="Nguyễn Thị Lan"
              subtitle="Đà Nẵng, Việt Nam"
            ></v-list-item>
          </template>
          <template #text>
            <p class="text-body-1">Dịch vụ tuyệt vời! Kỹ thuật viên rất chuyên nghiệp và thân thiện. Tôi cảm thấy thư giãn hoàn toàn sau buổi massage.</p> 
          </template>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-container fluid class="py-8" style="background-color: #00323b;">
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
          <p class="text-white my-2">Liên hệ:</p>
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
const locales = [
  { code: 'vi', title: 'Tiếng Việt', icon: 'vi.svg' },
  { code: 'en', title: 'English', icon: 'us.svg' },
  { code: 'cn', title: '中文', icon: 'cn.svg'  },
  { code: 'jp', title: '日本語', icon: 'jp.svg'  },
  { code: 'kr', title: '한국어', icon: 'kr.svg'  },
];
</script>