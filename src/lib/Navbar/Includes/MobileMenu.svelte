<script>
  import NavLink from "./NavLink.svelte";

  export let open;
  export let data;
</script>

<!-- Mobile menu -->
{#if open}
  <div class="absolute top-[76px] left-0 -right-full">
    <ul class="flex flex-col inline-flex">
      {#each data as category, i}
        {#if category.productsCount > 0}
          <NavLink {category} index={i} />
        {/if}
      {/each}
    </ul>
  </div>
{/if}
