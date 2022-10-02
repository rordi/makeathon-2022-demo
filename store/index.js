import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

// API mock mode
const MOCK = false
const clusterApiBaselUrl = 'http://127.0.0.1:5000/post-json'

export const state = () => ({
  loading: true, // app starts in loading mode
  submitted: false,
  title: '',
  abstract: '',
  cluster: null
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

  setCluster: (state, cluster) => {
    state.cluster = cluster
  },

  setTitle: (state, title) => {
    state.title = title
  },

  setAbstract: (state, abstract) => {
    state.abstract = abstract
  }
}

export const actions = {
  getCluster ({ commit, state }) {
    commit('setSubmitted', false)
    commit('setCluster', null)

    return new Promise((resolve, reject) => {
      if (MOCK) {
        const mock = new MockAdapter(axios)
        mock.onPost(clusterApiBaselUrl).reply(200, {
          cluster: Math.round(Math.random() * 600),
          score: 0.43
        })
      }

      axios.post(clusterApiBaselUrl, {
        title: state.title,
        abstract: state.abstract
      })
        .then((response) => {
          commit('setSubmitted', true)
          if (response.data.cluster) {
            commit('setCluster', response.data.cluster)
          }
          resolve(response)
        })
        .catch((error) => {
          console.error(error)
          reject(error)
        })
    })
  }
}
