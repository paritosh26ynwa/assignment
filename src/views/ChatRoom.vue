<template>
    <div class="chat-room">
      <conversation-area></conversation-area>
      <compose-section v-model="message" @submit="sendReply"></compose-section>
    </div>
</template>

<script>
import ConversationArea from '@/components/ConversationArea.vue';
import ComposeSection from '@/components/ComposeSection.vue';
import { mapState } from 'vuex';

export default {
  name: 'ChatRoom',
  components: {
    ConversationArea,
    ComposeSection,
  },
  data() {
    return {
      message: '',
    };
  },
  computed: {
    ...mapState(['messages']),
  },
  watch: {
    message: {
      async  handler(newValue) {
        if (newValue) {
          const id = this.messages.length + 1;
          try {
            await this.$store.dispatch('addMessage', {
              id,
              from: {
                id: 23,
                firstName: 'Bob',
                lastName: 'Greatlance',
                thumbnail: 'https://images.generated.photos/c_mH5kvsgrsGhrN5GhQIIRdIIvoHP6G2ujkTs4c8XFM/rs:fit:512:512/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzAxMTk5OTguanBn.jpg',
              },
              message: newValue,
              date: new Date().toLocaleDateString(),
            });
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error(error);
          } finally {
            this.message = '';
            setTimeout(() => {
              this.scrollToBottom();
            }, 50);
          }
        }
      },
    },
  },
  methods: {
    sendReply(newMessage) {
      this.message = newMessage;
    },
    scrollToBottom() {
      const wrapper = document.getElementById('conversation-area');
      wrapper.scrollTop = wrapper.scrollHeight;
    },
  },
};
</script>

<style lang="scss" scoped>
.chat-room {
  width: 500px;
  height: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFFFFF;
  border-top-right-radius: 22px;
  border-top-left-radius: 22px;
}
</style>
