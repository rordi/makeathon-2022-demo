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
          <button @click="submitData()">
            Find Experts
          </button>
          <button class="random" @click="fillRandomData()">
            Fill Random Data
          </button>
        </div>
      </div>
      <div v-else>
        <div class="flex w-full">
          <div class="w-40 font-bold">
            Cluster
          </div>
          <div class="w-full font-bold text-semafours">
            <a
              :href="`http://162.19.169.174:10214/resource/?uri=http%3A%2F%2Fsemafours.ch%2Fresource%2Fcluster%2F${cluster}`"
              target="_blank"
            >
              {{ cluster }}
            </a>
          </div>
        </div>
        <div class="flex w-full mt-4">
          <div class="w-40 font-bold">
            Title
          </div>
          <div class="w-full">
            {{ title }}
          </div>
        </div>
        <div class="flex w-full mt-4">
          <div class="w-40 font-bold">
            Abstract
          </div>
          <div class="w-full">
            {{ abstract }}
          </div>
        </div>

        <button class="again" @click="submitted = false">
          Reset Form
        </button>
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
          title: 'Exploring the ability of stroke survivors in using the contralesional hemisphere to control a brain–computer interface',
          abstract: 'Brain-computer interfaces (BCIs) have recently been shown to be clinically effective as a novel method of stroke rehabilitation. In many BCI-based studies, the activation of the ipsilesional hemisphere was considered a key factor required for motor recovery after stroke. However, emerging evidence suggests that the contralesional hemisphere also plays a role in motor function rehabilitation. The objective of this study is to investigate the effectiveness of the BCI in detecting motor imagery of the affected hand from contralesional hemisphere. We analyzed a large EEG dataset from 136 stroke patients who performed motor imagery of their stroke-impaired hand. BCI features were extracted from channels covering either the ipsilesional, contralesional or bilateral hemisphere, and the offline BCI accuracy was computed using 10 ×\n' +
            '× 10-fold cross-validations. Our results showed that most stroke patients can operate the BCI using either their contralesional or ipsilesional hemisphere. Those with the ipsilesional BCI accuracy of less than 60% had significantly higher motor impairments than those with the ipsilesional BCI accuracy above 80%. Interestingly, those with the ipsilesional BCI accuracy of less than 60% achieved a significantly higher contralesional BCI accuracy, whereas those with the ipsilesional BCI accuracy more than 80% had significantly poorer contralesional BCI accuracy. This study suggests that contralesional BCI may be a useful approach for those with a high motor impairment who cannot accurately generate signals from ipsilesional hemisphere to effectively operate BCI.'
        },
        {
          title: 'SLE classification criteria: Science-based icons or algorithmic distractions – an intellectually demanding dilemma',
          abstract: 'It is, so to say, not a prerogative authority assigned to SLE classification criteria that allow them to declare something definitively important about SLE. This is particularly true as criteria-based classification processes overrule the highly needed evolution of concise diagnostic criteria. It is classification criteria that allocate SLE patients into cohorts intended to describe the nature of their disease. Therefore, all major SLE classification criteria since the 1971 preliminary criteria usurp the role of diagnostic criteria. Today´s practice silently accept that the SLE classification process “diagnose” SLE patients despite the fact that classification criteria are not accepted as diagnostic criteria! This is a central paradox in contemporary SLE research strategies. Contemporary SLE cohorts are designed to investigate SLE´s etiological features. However, each cohort that is categorized by classification criteria has one central inherent problem. From theoretical and practical arguments, they embody multiple distinct clinical phenotypes. This raises the critical and principal question if phenotypically heterogenic SLE cohorts are useful to identify basic SLE-specific etiology(ies) and disease process(es). In times to come, we must prioritize development of firm diagnostic criteria for SLE, as the classification criteria have not contributed to reduce the enigmatic character of the syndrome. No radical improvements are visible in the horizon that may lead to concise investigations of SLE in well-defined homogenous SLE cohorts. We must develop new strategies where studies of phenotypically standardized cohorts of SLE must be central elements. Problems related to contemporary SLE classification criteria are contemplated, analyzed, and critically discussed in this study.'
        },
        {
          title: 'Dual Polarization Modality Fusion Network for Assisting Pathological Diagnosis',
          abstract: 'Polarization imaging is sensitive to sub-wavelength microstructures of various cancer tissues, providing abundant optical characteristics and microstructure information of complex pathological specimens. However, how to reasonably utilize polarization information to strengthen pathological diagnosis ability remains a challenging issue. In order to take full advantage of pathological image information and polarization features of samples, we propose a dual polarization modality fusion network (DPMFNet), which consists of a multi-stream CNN structure and a switched attention fusion module for complementarily aggregating the features from different modality images. Our proposed switched attention mechanism could obtain the joint feature embeddings by switching the attention map of different modality images to improve their semantic relatedness. By including a dual-polarization contrastive training scheme, our method can synthesize and align the interaction and representation of two polarization features. Experimental evaluations on three cancer datasets show the superiority of our method in assisting pathological diagnosis, especially in small datasets and low imaging resolution cases. Grad-CAM visualizes the important regions of the pathological images and the polarization images, indicating that the two modalities play different roles and allow us to give insightful corresponding explanations and analysis on cancer diagnosis conducted by the DPMFNet. This technique has potential to facilitate the performance of pathological aided diagnosis and broaden the current digital pathology boundary based on pathological image features.'
        },
        {
          title: 'Diabetes Prediction System',
          abstract: 'This model of retrieving useful information and models from the data is also called database knowledge discovery, which involves certain phases such as data selection, classification and transformation evaluation. Machine learning algorithms are primarily classified as supervised and unsupervised. A supervised learning algorithm uses past experience to make predictions about new or invisible data, whereas unsupervised algorithms can draw interferences from data sets. Supervised learning is also described as classification. This study uses classification technique to produce a more accurate belong to class. The classification algorithms have been applied to the Indian Diabetes Dataset of the PIMA of the National Institute of Diabetes, Digestive and Kidney Disease which contains data on diabetic women.'
        },
        {
          title: 'Escapism and Excessive Online Behaviors: A Three-Wave Longitudinal Study in Finland during the COVID-19 Pandemic',
          abstract: 'Excessive online behaviors refer to harmful or disproportionate use of digital network applications. Such behaviors are likely to be associated with escapist motives. Our aim was to analyze whether escapism predicts excessive gambling, excessive gaming, and excessive internet use over time. A longitudinal sample of Finnish residents aged 18–75 years (n = 1022, 51.27% male) was surveyed at three time points during the COVID-19 pandemic in 6-month intervals: April 2021 (Time 1), October–November 2021 (Time 2), and April–May 2022 (Time 3). Of the original Time 1 respondents, 66.80% took part in the surveys at both Time 2 and Time 3. All surveys included measures for excessive gambling (Problem Gambling Severity Index), excessive gaming (Internet Gaming Disorder Test), and excessive internet use (Compulsive Internet Use Scale). Three escapism-specific questions were used to construct a dedicated escapism variable. Socio-demographic variables, alcohol consumption, and psychological distress were used as controls. The study was conducted with multilevel regression analyses using hybrid models. Our research showed that escapism had strong within-person effects on excessive gambling, B = 0.18, p = 0.003; excessive gaming, B = 0.50, p < 0.001; and excessive internet use, B = 0.77, p < 0.001 over time. The between-person effect of escapism was demonstrated on excessive gaming B = 0.91, p < 0.001, and excessive internet use B = 0.61, p = 0.036. Adverse societal events and uncertain times can manifest in excessive online behaviors motivated by escapism, highlighting a need to focus prevention efforts on healthy coping methods.'
        },
        {
          title: 'In Silico Analysis of Plant-Based Bioactive Compounds Targeting Progesterone Receptors for the Treatment of Uterine Leiomyoma',
          abstract: 'Uterine leiomyomas are the most common benign gynaecological tumours that affect 50% - 60% of females belonging to reproductive age. The role of progesterone in the growth and development of leiomyomas is evident. Progesterone is regulated by progesterone receptors and it acts by activating PI3K/AKT pathway, by increasing proliferating cell nuclear antigen (PCNA) levels and Bcl-2 expression. Thus, modulating the receptor can help in the treatment of leiomyomas. The current study involves testing the efficiency of the various plant-based bioactive compounds to bind to the progesterone receptors, which may possess inhibitory or modulatory effects on or against progesterone receptors. These compounds can be further experimented with using other in vivo and in vitro methods to produce phytomedicine based on drugs for the treatment of uterine leiomyomas. This study is an in silico analysis performed using various bioinformatics databases and software. The receptor and ligand structures were retrieved from PDB and PubChem databases. Their pharmacokinetics and pharmacodynamics properties were analyzed using various databases. AutoDock4.2.6 was used for molecular docking, and the results were visualized using LigPlot+. Among 15 compounds selected, 8 compounds had higher binding energies than the control drug Ulipristal acetate i.e., -8.21Kcal/mol. Of which Ursolic acid, Vitamin-D2, and Betulinic acid had binding energies above -9.0 Kcal/mol. This concludes that these compounds can modulate the progesterone receptors, thus decreasing the proliferation and growth of uterine leiomyomas. Further studies can bring out the potential therapeutic effects of these bioactive compounds and they can act as a potential lead compound in the design of novel drug targets for the treatment of uterine leiomyoma.'
        },
        {
          title: 'Deep Learning Approaches to Automatic Chronic Venous Disease Classification',
          abstract: 'Chronic venous disease (CVD) occurs in a substantial proportion of the world’s population. If the onset of CVD looks like a cosmetic defect, over time, it might be transformed into serious problems that will require surgical intervention. The aim of this work is to use deep learning (DL) methods for automatic classification of the stage of CVD for self-diagnosis of a patient by using the image of the patient’s legs. The images of legs with CVD required for DL algorithms were collected from open Internet resources using the developed algorithms. For image preprocessing, the binary classification problem “legs–no legs” was solved based on Resnet50 with accuracy of 0.998. The application of this filter made it possible to collect a dataset of 11,118 good-quality leg images with various stages of CVD. For classification of various stages of CVD according to the CEAP classification, the multi-classification problem was set and resolved by using four neural networks with completely different architectures: Resnet50 and transformers such as data-efficient image transformers (DeiT) and a custom vision transformer (vit-base-patch16-224 and vit-base-patch16-384). The model based on DeiT without any tuning showed better results than the model based on Resnet50 did (precision = 0.770 (DeiT) and 0.615 (Resnet50)). vit-base-patch16-384 showed the best results (precision = 0.79). To demonstrate the results of the work, a Telegram bot was developed, in which fully functioning DL algorithms were implemented. This bot allowed evaluating the condition of the patient’s legs with fairly good accuracy of CVD classification.'
        },
        {
          title: 'Investigation of the Role of PUFA Metabolism in Breast Cancer Using a Rank-Based Random Forest Algorithm',
          abstract: 'Polyunsaturated fatty acid (PUFA) metabolism is currently a focus in cancer research due to PUFAs functioning as structural components of the membrane matrix, as fuel sources for energy production, and as sources of secondary messengers, so called oxylipins, important players of inflammatory processes. Although breast cancer (BC) is the leading cause of cancer death among women worldwide, no systematic study of PUFA metabolism as a system of interrelated processes in this disease has been carried out. Here, we implemented a Boruta-based feature selection algorithm to determine the list of most important PUFA metabolism genes altered in breast cancer tissues compared with in normal tissues. A rank-based Random Forest (RF) model was built on the selected gene list (33 genes) and applied to predict the cancer phenotype to ascertain the PUFA genes involved in cancerogenesis. It showed high-performance of dichotomic classification (balanced accuracy of 0.94, ROC AUC 0.99) We also retrieved a list of the important PUFA genes (46 genes) that differed between molecular subtypes at the level of breast cancer molecular subtypes. The balanced accuracy of the classification model built on the specified genes was 0.82, while the ROC AUC for the sensitivity analysis was 0.85. Specific patterns of PUFA metabolic changes were obtained for each molecular subtype of breast cancer. These results show evidence that (1) PUFA metabolism genes are critical for the pathogenesis of breast cancer; (2) BC subtypes differ in PUFA metabolism genes expression; and (3) the lists of genes selected in the models are enriched with genes involved in the metabolism of signaling lipids.'
        }
      ]
    }
  },
  computed: {
    cluster: {
      get () {
        return this.$store.state.cluster
      }
    },
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
      ...mapActions(['getCluster'])
    }),
    fillRandomData () {
      console.log('clicked random...')
      let rand = Math.round(Math.random() * (this.random.length - 1))
      this.title = this.random[rand].title
      this.abstract = this.random[rand].abstract
      rand = 0
    },
    submitData () {
      console.log('clicked submit...')
      this.getCluster().then((res) => {
        console.log(res)
      })
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

  &.again {
    @apply bg-red-800 text-gray-100 mt-24;
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
