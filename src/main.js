import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import DataTable from "primevue/datatable";
import CompButton from 'primevue/button';
import CompColumn from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import CompRow from 'primevue/row';                     //optional for row
import CascadeSelect from 'primevue/cascadeselect';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

// createApp(App).mount('#app')
// app.use(PrimeVue);

const app = createApp(App);
app.use(PrimeVue);
app.component('InputText', InputText);
app.component('CompButton', CompButton);
app.component('DataTable', DataTable);
app.component('CompColumn', CompColumn);
app.component('ColumnGroup', ColumnGroup);
app.component('CompRow', CompRow);
app.component('CascadeSelect', CascadeSelect);
app.mount('#app')