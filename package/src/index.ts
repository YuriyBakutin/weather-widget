import { defineCustomElement } from 'vue'
import WeatherWidgetStyles from './WeatherWidget.ce.vue'

const WeatherWidget = defineCustomElement(WeatherWidgetStyles)

customElements.define('weather-widget', WeatherWidget)
