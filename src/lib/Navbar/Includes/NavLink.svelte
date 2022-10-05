<script>
  import { fly } from "svelte/transition";

  export let category;
  export let index;
</script>

<li class="inline-block">
  <h1
    transition:fly={{ y: -15, delay: 50 * index }}
    class="text-primary dark:text-light cursor-pointer hover:text-opacity-40 hover:dark:text-opacity-50 transition-colors"
  >
    <a href="/categories/{category.slug}">{category.name}</a>
  </h1>
</li>

