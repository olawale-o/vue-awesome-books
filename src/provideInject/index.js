import { provide, inject } from 'vue';

export const provide = (key, value) => provide(key, value);

export const inject = (key) => inject(key);