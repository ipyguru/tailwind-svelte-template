<script lang="ts">
  import Breadcrumbs from "$lib/Categories/Breadcrumbs.svelte";
  export let data: any = [];
</script>

<!-- breadcrumbs -->
<Breadcrumbs items={data.category.ancestors} current={data.category} />
