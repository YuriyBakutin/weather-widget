import { defineCustomElement } from 'vue'
import VueCustomElementWithStyles from './VueCustomElement.ce.vue'

const VueCustomElement = defineCustomElement(VueCustomElementWithStyles)

customElements.define('vue-custom-element', VueCustomElement)
