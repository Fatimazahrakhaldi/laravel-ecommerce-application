window._ = require('lodash');
console.log(window.Laravel.csrfToken);

/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */
// vue2
// window.Vue = require('vue').default;
// vue3


import { createApp } from 'vue';

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// window.axios.defaults.headers.common['X-CSRF-TOKEN'] = window.Laravel.csrfToken;

/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

let token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');;

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));



// vue2
// Vue.component('attribute-values', require('./components/AttributeValues.vue').default);
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// vue3


const Vue = createApp({})
import AttributeValues from './components/AttributeValues.vue'
import ProductAttributes from './components/ProductAttributes.vue'

Vue.component('attribute-values', AttributeValues)
Vue.component('product-attributes', ProductAttributes)


import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

// import VueResource from 'vue-resource';
// Vue.use(VueResource);


// Vue.http.options. emulateJSON = true;
// Vue.http.options.emulateHTTP = true;

// Vue.http.interceptors.push(function(request, next) {
//     request.headers['X-CSRF-TOKEN'] = Laravel.csrfToken;
//     next();
// });

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
// vue2
// const app = new Vue({
//     el: '#app'
// vue3


Vue.mount('#app')
