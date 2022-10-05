<script lang="ts">
  export let data: any |object;
</script>

<svelte:head>
  <title>Каталог товаров</title>
</svelte:head>

<div class="px-4 py-2 flex flex-col">
  {#each data?.categories as category, i}
    <div class="text-primary dark:text-light">
      <h1>{category.name}</h1>
      {#each category.children as chield}
        <div>
          <a href="/categories/{chield.slug}">{chield.name}</a>
          {#each chield.children as grandchield}
            <div>
              <a href="/categories/{grandchield.slug}">{grandchield.name}</a>
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {/each}
</div>
