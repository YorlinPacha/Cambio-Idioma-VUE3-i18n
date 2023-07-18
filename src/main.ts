import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 2)
import { createI18n } from 'vue-i18n'
//7) nos devolvemos depues de crear la estructura messsege
import { messages } from './lang/messeges'

//3 configuraciones del paquete( i18n) sera usada por toda la app
const i18n = createI18n({
    //8) 3 configuraciones principales
    //- entorno local de trabajo (iniciar)
    locale: 'en',
    //- que ocurre si el texto que queremos aplicar no existe en el lenguaje configurado, mostrarlo en ingles
    fallbackLocale: 'en',
    //- cual es el conjunto de mensajes que va a tener que aplicar
    messages
}) // listo esto, ir a app.vue

// 1) const app=
const app = createApp(App)
app.use(i18n) //4
app.mount('#app')
