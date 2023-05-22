<template>
  <div class="conversation-area">
    <template v-for="message in messages">
      <message-component :key="message.id" :message="message"></message-component>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import MessageComponent from './Message.vue';

export default {
  name: 'ConversationArea',
  components: {
    MessageComponent,
  },
  computed: {
    ...mapState(['messages']),
  },
};
</script>

<style lang="scss" scoped>
.conversation-area {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
}
</style>
