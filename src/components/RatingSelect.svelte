<script>
  import { createEventDispatcher } from 'svelte';

  let selected = 10;
  const dispatch = createEventDispatcher();
  const handleSelect = e => {
    dispatch('select-rating', e.target.value);
  };
</script>

<!-- unordered list of radio buttons to select a rating from 1 to 10 -->
<ul>
  {#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as i}
    <li>
      <input
        id={'num' + i}
        type="radio"
        name="rating"
        value={i}
        checked={selected === i}
        on:change={handleSelect}
      />
      <label for={'num' + i}>{i}</label>
    </li>
  {/each}
</ul>

<!-- style the rating select as a horizontal list of radio buttons -->
<style>
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    padding: 0;
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 20px;
  }
  input {
    margin: 0;
    padding: 0;
    border: none;
    flex-grow: 1;
  }
  label {
    margin: 0;
    padding: 0;
    flex-grow: 1;
  }
</style>
