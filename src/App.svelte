<script>
  let thing = 35;
  let color = 'blue';
  let showText = false;
  let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Sara' },
    { id: 3, name: 'Bill' },
    { id: 4, name: 'Mary' },
    { id: 5, name: 'Mark' },
    { id: 6, name: 'Paul' },
    { id: 7, name: 'Steve' },
    { id: 8, name: 'Jenny' },
    { id: 9, name: 'Jill' },
    { id: 10, name: 'Jack' }
  ];

  $: test = 'weird' + thing;

  // cycle color through a rainbow of colors
  // also toggle showText
  const cycleThroughRainbow = () => {
    const colors = [
      'red',
      'orange',
      'yellow',
      'green',
      'blue',
      'indigo',
      'violet'
    ];
    const index = colors.indexOf(color);
    const nextIndex = index + 1;
    const nextColor = colors[nextIndex % colors.length];
    color = nextColor;
    showText = !showText;
    // any time we mutate state, we should re-assign
    // add the user Jen to the users array
    users = [...users, { id: 11, name: 'Jen' }];
  };
</script>

<main>
  <h1 style="color: {color}">Hello {test}!</h1>
  {#if showText}
    <p>
      Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
      how to build Svelte apps.
    </p>
  {:else}
    <p>No text</p>
  {/if}

  <button on:click={cycleThroughRainbow}>Change Color</button>
  <!-- display the user id and name for each user -->
  {#each users as user}
    <p>{user.id}: {user.name}</p>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
