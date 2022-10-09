<script lang="ts">
  import { fly } from "svelte/transition";

  export let menuItem: any| object;
  export let index: number;
</script>

<li class="inline-block">
  <h1
    transition:fly={{ y: -15, delay: 50 * index }}
    class="text-primary dark:text-light cursor-pointer hover:text-opacity-40 hover:dark:text-opacity-50 transition-colors"
  >
    <a href=".">{menuItem.name}</a>
  </h1>
</li>

