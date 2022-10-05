<script lang="ts">
  import { darkMode } from "$lib/stores";
  import classNames from 'classnames';

  export let className: string = 'w-12';

</script>

<a href="/" class="inline-flex">
    <img alt="logo" class={classNames(className, $$props.class)} 
    src="{$darkMode? '/images/logo-dark.png': '/images/logo-light.png'}"
    />
</a>
