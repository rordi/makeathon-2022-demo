import axios from 'axios'

/*
 * Config for the OpenWeather API
 * @see https://openweathermap.org/
 */
const weatherApiKey = '3978da9f7417a95247e8f31df0cf1f27'
const weatherApiBaselUrl = `http://api.openweathermap.org/data/2.5/weather?appid=${weatherApiKey}`

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
  getWeather ({ commit }) {
    commit('START_LOADING')

    return new Promise((resolve, reject) => {
      // todo - pull weather data for Basel
      const url = weatherApiBaselUrl
      axios.get(url)
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
