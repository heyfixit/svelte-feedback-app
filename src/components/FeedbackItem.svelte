<script>
  import { createEventDispatcher } from 'svelte';
  import Card from './Card.svelte';
  export let item;
  const dispatch = createEventDispatcher();
  const handleDelete = itemId => {
    dispatch('delete-item', itemId);
  };
</script>

<Card>
  <!-- div element that displays the item's rating -->
  <div class="num-display">{item.rating}</div>
  <!-- div close element that displays an X icon -->
  <button class="close-icon" on:click={() => handleDelete(item.id)}>x</button>
  <p class="comment-display">{item.comment}</p>
</Card>

<style>
  /* make the num-display element a circle
     make its background color dark pink
     make its text white
     center its text vertically and horizontally
     give it a white border and text
     position it in the top left corner of the card
  */
  .num-display {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border: 1px solid white;
    border-radius: 50%;
    background-color: #ff69b4;
    color: #fff;
    font-size: 19px;
    position: absolute;
    top: -10px;
    left: -10px;
  }
  /* position the close-icon element in the top-right of the card */
  .close-icon {
    position: absolute;
    top: 10px;
    right: 20px;
    border: none;
    background: none;
    cursor: pointer;
  }
</style>
