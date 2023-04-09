import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        data: [],
        dataLength: 0,
        currentPage: 1,
        apiUrl: 'http://localhost:3000/api/data',
        selectedData: {}
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        setDataLength(state, payload) {
            state.dataLength = payload;
        },
        setCurrentPage(state, payload) {
            state.currentPage = payload;
        },
        setSelectedData(state, payload) {
            state.selectedData = payload;
        }
    },
    actions: {
        getData({ state, commit }) {
            try {
                axios.get(`${state.apiUrl}`, {
                    params: {
                        _page: state.currentPage,
                        _limit: 10
                    }
                })
                .then(function (response) {
                    commit('setData', response.data);
                    commit('setDataLength', response.headers['x-total-count']);
                  });
            } catch (error) {
                commit('setData', []);
            }
        },
        getSelectedData({ state, commit }, id) {
            try {
                axios.get(`${state.apiUrl}/${id}`)
                .then(function (response) {
                    commit('setSelectedData', response.data);
                  });
            } catch (error) {
                commit('setSelectedData', []);
            }
        },
        updatePage({state, commit}, page){
            commit('setCurrentPage', page);
        }
    },
    getters: {
        dataArray: state => {
            return state.data;
        },
        dataLengthValue: state => {
            return state.dataLength;
        },
        currentPageValue: state => {
            return state.currentPage;
        },
        currentSelectedData: state => {
            return state.selectedData;
        }
    }
});