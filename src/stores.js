import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  { id: 1, rating: 5, comment: 'This is a great product' },
  { id: 2, rating: 4, comment: 'This is a good product' },
  { id: 3, rating: 3, comment: 'This is a ok product' },
  { id: 4, rating: 2, comment: 'This is a bad product' },
  { id: 5, rating: 1, comment: 'This is a very bad product' }
]);
