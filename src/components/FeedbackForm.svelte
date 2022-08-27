<script>
  import { v4 as uuid } from 'uuid';
  import { FeedbackStore } from '../stores.js';
  import Button from './Button.svelte';
  import Card from './Card.svelte';
  import RatingSelect from './RatingSelect.svelte';

  let selectedRating = 10;
  let comment;
  let btnDisabled = true;
  let message;
  const handleSubmit = () => {
    const newFeedback = {
      id: uuid(),
      rating: Number(selectedRating),
      comment: comment
    };
    selectedRating = 10;
    comment = null;
    FeedbackStore.update(feedback => [newFeedback, ...feedback]);
  };

  // handle the change event of the comment input field
  // if the comment length is less than 10 characters disable the submit buton
  // and set the message to 'Comment must be at least 10 characters long'
  const handleCommentChange = e => {
    comment = e.target.value;
    if (comment.length < 10) {
      btnDisabled = true;
      message = 'Comment must be at least 10 characters long';
    } else {
      btnDisabled = false;
      message = '';
    }
  };

  const handleRatingSelect = e => {
    selectedRating = e.detail;
  };
</script>

<Card>
  <header>How would you rate your service withus?</header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:select-rating={handleRatingSelect} />
    <div class="input-group">
      <!-- comment input and submit button -->
      <input type="text" on:input={handleCommentChange} bind:value={comment} />
      <Button
        disabled={!comment || comment.length < 10 || btnDisabled}
        type="submit"
        on:click={() => handleSubmit()}>Submit</Button
      >
    </div>
    {#if message}
      <div class="message">{message}</div>
    {/if}
  </form>
</Card>

<style>
  header {
    display: flex;
    justify-content: center;
  }
  .input-group {
    display: flex;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message {
    padding-top: 10px;
    text-align: center;
    color: rebeccapurple;
  }
</style>
