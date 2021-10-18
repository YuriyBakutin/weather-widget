[defineCustomElement]: https://v3.vuejs.org/guide/web-components.html#definecustomelement
[vueCustomElementExample]: https://github.com/ElMassimo/vue-custom-element-example
[vueDevTool]: https://devtools.vuejs.org
# Vue Custom Element — WeatherWidget

You can test this widget [here](https://yuriybakutin.github.io/weather-widget/)

This package is a training project for developing a Vue Custom Element by using the [defineCustomElement][defineCustomElement] API in Vue 3.

This package created based on [vue-custom-element-example][vueCustomElementExample].

It includes two repositories: a separate repository `vue-playground` for development Custom Element as Vue Component in Vue App environment using [Vue dev-tool][vueDevTool], and a separate repository `VueCustomElement` with the Vue Component itself, where the final Custom Element is builded.

At the root there is a `index.html` file for testing the resulting Custom Element. This file can be opened directly in the browser.

## Vue Component development process

To start the Vue Component development process in the Vue Application environment, go to `vue-playground` folder:

```bash
cd vue-playground
```

install dependencies:

```bash
pnpm i
```

and run the Vite dev server:

```bash
pnpm run dev
```

## Build Custom Element

When we achieve the desired behavior of the Vue Component, we can build an Custom Element based on it. To do this, go to `VueCustomElement` folder from the root of the project:

```bash
cd VueCustomElement
```

install dependencies:

```bash
pnpm i
```

and run the build:

```bash
pnpm run build
```

You can test the behavior of the builded element by directly opening `index.html` file in the browser.
