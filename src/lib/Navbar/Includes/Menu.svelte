<script lang="ts"> 
  import NavLink from "./NavLink.svelte";

  export let data: any;
</script>

<ul class="hidden md:flex items-center gap-12 inline-flex">
  {#each data as category, i }
    {#if category.productsCount > 0}
      <NavLink {category} index={i} />
    {/if}
  {/each}
</ul>