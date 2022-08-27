<script>
  import { fade, scale } from 'svelte/transition';
  import FeedbackItem from './FeedbackItem.svelte';
  export let feedback = [];
</script>

<!-- for each item in the feedback array create an h3 element that shows its text -->
{#each feedback as item}
  <div in:scale out:fade>
    <FeedbackItem {item} on:delete-item />
  </div>
{/each}
