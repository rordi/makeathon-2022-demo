import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// API mock mode
const MOCK = true
const clusterApiBaselUrl = 'http://localhost/predict'

export const state = () => ({
  loading: true, // app starts in loading mode
  submitted: false,
  title: '',
  abstract: '',
  currentWeather: {}
})

export const getters = {
  isLoading: state => state.loading && state.loading === true
}

export const mutations = {
  START_LOADING: (state) => {
    state.loading = true
  },

  END_LOADING: (state) => {
    state.loading = false
  },

  setSubmitted: (state, submitted) => {
    state.submitted = !!submitted
  },

  setTitle: (state, title) => {
    state.title = title
  },

  setAbstract: (state, abstract) => {
    state.abstract = abstract
  }
}

export const actions = {
  getCluster ({ commit }) {
    commit('START_LOADING')

    return new Promise((resolve, reject) => {
      if (MOCK) {
        const mock = new MockAdapter(axios)
        mock.onGet('http://localhost/predict').reply(200, {
          cluster: 123,
          score: 0.43
        })
      }

      axios.get(clusterApiBaselUrl)
        .then((response) => {
          resolve(response)
        })
        .catch((error) => {
          reject(error)
        })
        .finally(
          commit('END_LOADING')
        )
    })
  }
}
