<script>
  import FeedbackForm from './components/FeedbackForm.svelte';
  import FeedbackList from './components/FeedbackList.svelte';
  import FeedbackStats from './components/FeedbackStats.svelte';

  // create an array of feedback items each one has an id, a rating, and a comment
  let feedback = [
    { id: 1, rating: 5, comment: 'This is a great product' },
    { id: 2, rating: 4, comment: 'This is a good product' },
    { id: 3, rating: 3, comment: 'This is a ok product' },
    { id: 4, rating: 2, comment: 'This is a bad product' },
    { id: 5, rating: 1, comment: 'This is a very bad product' }
  ];

  $: count = feedback.length;
  $: average = feedback.reduce((acc, curr) => acc + curr.rating, 0) / count;

  const deleteFeedback = e => {
    const itemId = e.detail;
    console.log(e.detail);
    feedback = feedback.filter(item => item.id !== itemId);
  };

  const handleAddFeedbackItem = e => {
    const newFeedback = e.detail;
    feedback = [newFeedback, ...feedback];
  };
</script>

<main class="container">
  <FeedbackForm {feedback} on:submit-item={handleAddFeedbackItem} />
  <FeedbackStats {count} {average} />
  <FeedbackList {feedback} on:delete-item={deleteFeedback} />
</main>

<style></style>
