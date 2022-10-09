<script lang="ts">
  import { NavBrand} from 'flowbite-svelte'

  import classNames from 'classnames';

  export let className: string = 'self-center whitespace-nowrap text-xl font-semibold dark:text-white';

</script>


<NavBrand href="/">
  <span class={classNames(className, $$props.class)}>
    SPACEX
  </span>
</NavBrand>
