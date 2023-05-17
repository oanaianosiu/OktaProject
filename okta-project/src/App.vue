<template>
  <div>
    <nav class="ui inverted top fixed menu">
      <div class="ui container" >
        <router-link to="/loggedOut" class="header item" style="display: inline-flex; align-items: center;">
          <img class="ui mini image" src="./assets/logo.png" style="width: 60px; height: 60px;">
          <span style="font-size: 20px; margin-left: 10px;">Baton Fagaras</span>
        </router-link>
        <ul class="right">
          <li><a @click.prevent="login" v-if="!activeUser">Login</a></li>
          <li><a @click.prevent="logout" v-if="activeUser">Logout</a></li>
        </ul>
        <router-link to="/hello" class ="middle" style="display: inline-flex; align-items: center;">
          Profil
        </router-link>
        <!-- <ul class="middle">
          <li><a @click.prevent="profile" v-if="activeUser.name == 'Leo Parvan'">Profil</a></li>
        </ul> -->
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
      return {
        activeUser: {
          name: null
        },
      }
    },
  async created() {
    await this.refreshActiveUser()
  },
  watch: {
    '$route': 'refreshActiveUser'
  },
  methods: {
    login() {
      this.$auth.signInWithRedirect()
    },
    async refreshActiveUser() {
      this.activeUser = await this.$auth.getUser()
    },
    async logout() {
      await this.$auth.signOut()
    },
    profile() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 65px;
}

body {
  background-color: #EAEDED;
}

.custom-contain {
  margin-top: 100px;
}
</style>
