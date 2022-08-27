<script>
  import { fade, scale } from 'svelte/transition';
  import FeedbackItem from './FeedbackItem.svelte';
  import { FeedbackStore } from '../stores.js';

</script>

<!-- for each item in the feedback array create an h3 element that shows its text -->
{#each $FeedbackStore as item (item.id)}
  <div in:scale out:fade>
    <FeedbackItem {item} />
  </div>
{/each}
