<script lang="ts">
	import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';

   export let items: any = [];
   export let current: obj = {};
</script>

<div class="px-4 py-2">
<Breadcrumb aria-label="Solid background breadcrumb example" solid>
  <BreadcrumbItem href="/categories" home></BreadcrumbItem>
  {#each items as item, i}
    <BreadcrumbItem href={item.slug}>{item.name}</BreadcrumbItem>
  {/each}
  <BreadcrumbItem>{current.name}</BreadcrumbItem>
</Breadcrumb>
</div>