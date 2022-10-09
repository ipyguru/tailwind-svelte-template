<script lang="ts">
  import { Hamburger } from "svelte-hamburgers";

  import Logo from "./Includes/Logo.svelte";
  import MobileMenu from "./Includes/MobileMenu.svelte";
  import { darkMode } from "$lib/stores";
  import Menu from "./Includes/Menu.svelte";
  import { darkBg } from "$lib/styles";
  
  export let data: any;
  let open: boolean = false;
</script>

<nav class="sticky top-0 {darkBg}">
  <div class="flex flex-wrap py-2 px-4 justify-between items-center mx-auto">
    <Logo />
    <Menu {data} />
    <div class="md:hidden">
      <Hamburger bind:open type="spring" --color={$darkMode ? "white": "black"}/>
      <MobileMenu bind:open {data} />
    </div>
  </div>
</nav>