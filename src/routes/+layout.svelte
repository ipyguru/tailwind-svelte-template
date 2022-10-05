<script lang="ts">
  import "../app.css";

  import { onMount } from "svelte";
  import Loading from "$lib/Loading.svelte";
  import Navbar from "$lib/Navbar/Index.svelte";
  import Header from "$lib/Header/Index.svelte";
  import Footer from "$lib/Footer.svelte";
  import Catalog from "$lib/Catalog/Index.svelte";

  let isPageLoaded = false;
  onMount(() => {
    isPageLoaded = true;
  });

  export let data: any | object;
</script>

<Header />
<Navbar data={data?.categories} />

<main>
  {#if !isPageLoaded}<Loading />{/if}
  <slot />
  <Catalog />
</main>

<Footer />
