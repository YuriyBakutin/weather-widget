import { defineCustomElement } from 'vue'
import WeatherWidget from './WeatherWidget.ce.vue'
import { createPinia } from 'pinia'

const app = createApp(WeatherWidget)
app.use(createPinia())

const WeatherWidgetElement = defineCustomElement(WeatherWidget)

customElements.define('weather-widget', WeatherWidgetElement)
