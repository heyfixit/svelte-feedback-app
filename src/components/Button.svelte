<script>
  export let style = 'primary';
  export let type = 'button';
  export let disabled = false;
</script>

<button {type} class={style} {disabled}>
  <slot />
</button>

<style>
  button {
    border: none;
    background: none;
    cursor: pointer;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    transition: all 0.2s ease-in-out;
  }
  .primary {
    background-color: #4caf50;
  }
  .secondary {
    background-color: #ff9800;
  }
  button:hover {
    background-color: #fff;
    color: #000;
  }
  button:disabled {
    background-color: #eee;
    color: #aaa;
    cursor: not-allowed;
  }
</style>
