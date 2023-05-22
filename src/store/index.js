import Vue from 'vue';
import Vuex from 'vuex';

import { conversation, currentUser } from '@/mockapi';

const fetchUserDetails = () => new Promise((resolve) => {
  resolve(JSON.parse(currentUser));
});

const fetchConversations = () => new Promise((resolve) => {
  resolve(JSON.parse(conversation));
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    messages: [],
  },
  getters: {
    getUser(context) {
      return context.user;
    },
    getConversation(context) {
      return context.messages;
    },
  },
  mutations: {
    SET_CURRENT_USER(state, payload) {
      state.user = payload;
    },
    SET_CONVERSATION(state, payload) {
      state.messages = payload;
    },
    ADD_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
  },
  actions: {
    async setUserDetails({ commit }) {
      try {
        const user = await fetchUserDetails();
        commit('SET_CURRENT_USER', user);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    async setConversationDetails({ commit }) {
      try {
        const messages = await fetchConversations();
        commit('SET_CONVERSATION', messages);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    addMessage(context, payload) {
      context.commit('ADD_MESSAGE', payload);
    },
  },
});
