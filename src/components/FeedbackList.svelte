<script>
  import FeedbackItem from './FeedbackItem.svelte';
  export let feedback = [];
</script>

<!-- for each item in the feedback array create an h3 element that shows its text -->
{#each feedback as item}
  <FeedbackItem {item} on:delete-item />
{/each}
