<script lang="ts">
  import NavLink from "./NavLink.svelte";

  export let data: any;
  console.log(data);
</script>

<ul class="hidden md:flex items-center gap-12 inline-flex">
  {#each data.rockets as rocket, i}
    <NavLink menuItem={rocket} index={i} />
  {/each}
</ul>
