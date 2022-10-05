<script>
  import { Sun, Moon } from "svelte-heros-v2";
  import { darkMode } from "$lib/stores";
  import { browser } from "$app/environment";
  
  $darkMode = false
  
  function handleSwitchDarkMode() {
    $darkMode = !$darkMode;

    $darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }
  if (browser) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      $darkMode = true;
    } else {
      document.documentElement.classList.remove("dark");
      $darkMode = false;
    }
  }
</script>

<div class="rounded-md border border-slate-500 dark:border-white p-1">
  {#if $darkMode}
    <Sun on:click={handleSwitchDarkMode} class="text-light w-5 h-5" />
  {:else}
    <Moon on:click={handleSwitchDarkMode} class="w-5 h-5"/>
  {/if}
</div>
