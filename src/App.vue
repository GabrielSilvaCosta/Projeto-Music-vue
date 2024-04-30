<template>
  <!-- App Header -->
  <Header> </Header>

  <!-- rota de visualizacao -->
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <!-- Player -->
  <AppPlayer> </AppPlayer>

  <Auth> </Auth>
</template>

<script>
import Header from './components/Header.vue'
import Auth from './components/Auth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/modal'
import { auth } from '@/includes/firebase'
import AppPlayer from './components/Player.vue'
export default {
  name: 'App',
  components: {
    Header,
    Auth,
    AppPlayer
  },
  // mapeamos o userLoggedIn para o useUserStore

  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  // colocamos o userLoggedIn para true se o usuario estiver logado depois que ele for criado
  // pode verificar olhando o devTolls
  // se nao estiver logado e false
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
.fade-leave-active {
  opacity: 0;
}
</style>
