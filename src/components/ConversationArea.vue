<template>
  <div class="conversation-area" id="conversation-area">
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
  position: relative;
  overflow: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
</style>
