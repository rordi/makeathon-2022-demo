<template>
  <div>
    <div v-if="isLoading()">
      Loading app...
    </div>
    <div v-else>
      <h1>Domain Experts Matching</h1>

      <div v-if="!submitted" class="form">
        <div class="row">
          <label for="title">Title</label>
          <input id="title" v-model="title" />
        </div>
        <div class="row">
          <label for="abstract">Abstract</label>
          <textarea id="abstract" v-model="abstract" />
        </div>
        <div class="row submit">
          <button>
            Find Experts
          </button>
          <button class="random" @click="fillRandomData()">
            Fill Random Data
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  layout: 'default',
  data () {
    return {
      random: [
        {
          title: 'Design Requirements for a Monitoring System for a Mobile Hemodialysis Device: Patients’ and Care Partners’ Perspectives',
          abstract: 'Although mobile hemodialysis treatments have been found to be an effective alternative to current in-center and home-based hemodialysis treatments, many barriers to its successful implementation remain. These barriers include the lack of considering user-centered monitoring protocols. This study investigates 24 patients’ and 12 care partners’ expectations for monitoring procedures for a mobile hemodialysis device. Individual semi-structured interviews were conducted at three locations within the Veterans Affairs Health Care System: Seattle, WA; Nashville, TN; and Louisville, KY. All interviews were transcribed and analyzed using inductive or deductive content analysis approaches. We identified 10 categories of indicators suggesting patients’ needs to receive dialysis treatment and 11 categories of indicators suggesting patients’ successful dialysis treatment. Furthermore, we identified six categories of patients’ and care partners’ design expectations for monitoring procedures. The findings from this study have the potential to guide the development of a monitoring system to help ensure users’ acceptance of future mobile hemodialysis devices.'
        },
        {
          title: 'This is a bioinformatics title 2',
          abstract: 'This is some lorem ipsum bioinformatics title 2.'
        }
      ]
    }
  },
  computed: {
    submitted: {
      get () {
        return this.$store.state.submitted
      },
      set (value) {
        this.$store.commit('setSubmitted', value)
      }
    },
    title: {
      get () {
        return this.$store.state.title
      },
      set (value) {
        this.$store.commit('setTitle', value)
      }
    },
    abstract: {
      get () {
        return this.$store.state.abstract
      },
      set (value) {
        this.$store.commit('setAbstract', value)
      }
    }
  },
  mounted () {
    this.END_LOADING()
  },
  methods: {
    ...mapActions({
      ...mapGetters(['isLoading']),
      ...mapMutations(['END_LOADING']),
      ...mapActions(['getWeather'])
    }),
    fillRandomData () {
      console.log('clicked...')
      let rand = Math.round(Math.random(0, 1) * (this.random.length - 1))
      console.log(rand)
      this.title = this.random[rand].title
      this.abstract = this.random[rand].abstract
      rand = 0
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  @apply text-2xl font-bold pt-4 pb-8;
}

h2 {
  @apply text-lg text-gray-700 font-bold pt-4 pb-4;
}

p {
  @apply max-w-4xl pb-4;
}

ul {
  @apply list-disc ml-4;
}

ol {
  @apply list-decimal ml-4;
}

a {
  @apply text-blue-800;
}

code {
  @apply font-mono text-xs bg-gray-700 text-gray-100 p-0.5 rounded;
}

label {
  @apply inline-block w-40 font-medium;
}

input {
  @apply inline-block border-b border-gray-700 px-2 py-1;

  width: calc(100% - 12rem);
}

button {
  @apply inline-block w-36 bg-semafours text-white mt-4 px-2 py-1 text-base;
  @apply cursor-pointer rounded mr-6;

  &:hover {
    @apply bg-black;
  }

  &.random {
    @apply bg-gray-300 text-gray-800;
  }
}

textarea {
  @apply inline-block border-b border-gray-700 px-2 py-1 h-40 text-base;

  width: calc(100% - 12rem);
}

.row {
  @apply flex mb-4;

  &.submit {
    @apply pl-40;
  }
}
</style>
