import { provide, inject } from 'vue';

export const provider = (key, value) => provide(key, value);

export const inject = (key) => inject(key);