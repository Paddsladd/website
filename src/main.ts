import { mount } from 'svelte';
import './reset.scss';
import './main.scss';
import App from './App.svelte';

const app = mount(App, {
  target: document.getElementById('app')!
});

export default app;
