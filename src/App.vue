<template>
  <div id="app">
    <chat-room></chat-room>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import ChatRoom from './views/ChatRoom.vue';

export default {
  name: 'App',
  components: {
    ChatRoom,
  },
  methods: {
    ...mapActions(['setUserDetails', 'setConversationDetails']),
    initializeApplication() {
      this.setUserDetails();
      this.setConversationDetails();
    },
  },
  beforeMount() {
    this.initializeApplication();
  },
};
</script>

<style lang="scss">
#app {
  background-color: #D9DCE9;
  height: calc(100vh - 20px);
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
