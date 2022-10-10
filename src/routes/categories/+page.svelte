<script lang="ts">
  import BrandSmallCard from "$lib/Brands/BrandSmallCard.svelte";
import HighlightSmallCard from "$lib/Highlights/HighlightSmallCard.svelte";

  export let data: any | object;

  let selectedCategory: any | object = null;
  if (data && data.categories) {
    selectedCategory = data.categories[0];
  }

  function toggleCategoryRoot(item: any | object) {
    selectedCategory = item;
  }

  let classActive = "border-red-500 font-semibold";
  let classHover = "hover:underline decoration-red-500 underline-offset-2";
</script>

<svelte:head>
  <title>Каталог товаров</title>
</svelte:head>

<section class="px-2 py-4 text-slate-100">
  <!-- <div>
    <ul>
      {#each data.categories as item, i}
        <li on:click={toggleCategoryRoot(item)} class="cursor-pointer">    
          {item.name}
        </li>
      {/each}
    </ul>
  </div> -->

  <div class="flex flex-col md:flex-row">
    <!-- Root category -->
    <ul class="basis-1/4 dark:bg-slate-600  px-6 md:px-2 py-2 space-y-4 cursor-pointer">
      <li class="border-l-4 border-transparent px-1 hover:border-blue-500">
        Category-long-1
      </li>
      <li class="border-l-4 border-transparent px-1 hover:border-blue-500">
        Category-long-long-2
      </li>
      <li class="border-l-4 border-transparent px-1 hover:border-blue-500">
        Category-long-long-long-3
      </li>
      <li class="border-l-4 border-transparent px-1 hover:border-blue-500">
        Category-long-long-long-long-4
      </li>
      <li
        class="border-l-4 {classActive} px-1 hover:border-blue-500 {classActive}"
      >
        Category-long-long-long-long-text-5
      </li>
      <li class="border-l-4 border-transparent px-1 hover:border-blue-500">
        Category-long-long-long-long-long-long-6
      </li>
      <li class="border-l-4 border-transparent px-1 hover:border-blue-500">
        Category-long-long-long-long-long-long-long-7
      </li>
      <li class="border-l-4 border-transparent px-1 hover:border-blue-500">
        Category-long-long-long-long-long-long-8
      </li>
      <li class="border-l-4 border-transparent px-1 hover:border-blue-500">
        Category-long-long-long-long-long-9
      </li>
      <li class="border-l-4 border-transparent px-1 hover:border-blue-500">
        Category-long-long-long-long-10
      </li>
    </ul>
    <div class="basis-3/4 dark:bg-slate-600  p-2">
      <!-- Highlights -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 dark:bg-slate-600 px-2">
        <HighlightSmallCard />
        <HighlightSmallCard />
        <HighlightSmallCard />
      </div>
      <!-- Tree -->
      <div
        class="grid xl:grid-cols-6 sm:grid-cols-2 md:grid-cols-4 gap-2 dark:bg-slate-600 "
      >
        <ul class="dark:bg-slate-600 p-2 space-y-2">
          <p class="font-semibold line-clamp-2 mb-1 cursor-pointer {classHover}">
            Subcategory-long -long -long -long
            -long-long-long-long-long-long-long-long-long-long-1
          </p>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-long -long-long -1</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">
            item--long-long-long-long -long-long2
          </li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-3</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-4</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-5</li>
        </ul>
        <ul class="dark:bg-slate-600 p-2 space-y-2">
          <p class="font-semibold line-clamp-2 mb-1 cursor-pointer {classHover}">
            Subcategory-long -long -long -long
            -long-long-long-long-long-long-long-long-long-long-1
          </p>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-long -long-long -1</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">
            item--long-long-long-long -long-long2
          </li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-3</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-4</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-5</li>
        </ul>
        <ul class="dark:bg-slate-600 p-2 space-y-2">
          <p class="font-semibold line-clamp-2 mb-1 cursor-pointer {classHover}">
            Subcategory-long -long -long -long
            -long-long-long-long-long-long-long-long-long-long-1
          </p>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-long -long-long -1</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">
            item--long-long-long-long -long-long2
          </li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-3</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-4</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-5</li>
        </ul>
        <ul class="dark:bg-slate-600 p-2 space-y-2">
          <p class="font-semibold line-clamp-2 mb-1 cursor-pointer {classHover}">
            Subcategory-long -long -long -long
            -long-long-long-long-long-long-long-long-long-long-1
          </p>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-long -long-long -1</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">
            item--long-long-long-long -long-long2
          </li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-3</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-4</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-5</li>
        </ul>
        <ul class="dark:bg-slate-600 p-2 space-y-2">
          <p class="font-semibold line-clamp-2 mb-1 cursor-pointer {classHover}">
            Subcategory-long -long -long -long
            -long-long-long-long-long-long-long-long-long-long-1
          </p>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-long -long-long -1</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">
            item--long-long-long-long -long-long2
          </li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-3</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-4</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-5</li>
        </ul>
        <ul class="dark:bg-slate-600 p-2 space-y-2">
          <p class="font-semibold line-clamp-2 mb-1 cursor-pointer {classHover}">
            Subcategory-long -long -long -long
            -long-long-long-long-long-long-long-long-long-long-1
          </p>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-long -long-long -1</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">
            item--long-long-long-long -long-long2
          </li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-3</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-4</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-5</li>
        </ul>
        <ul class="dark:bg-slate-600 p-2 space-y-2">
          <p class="font-semibold line-clamp-2 mb-1 cursor-pointer {classHover}">
            Subcategory-long -long -long -long
            -long-long-long-long-long-long-long-long-long-long-1
          </p>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-long -long-long -1</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">
            item--long-long-long-long -long-long2
          </li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-3</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-4</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-5</li>
        </ul>
        <ul class="dark:bg-slate-600 p-2 space-y-2">
          <p class="font-semibold line-clamp-2 mb-1 cursor-pointer {classHover}">
            Subcategory-long -long -long -long
            -long-long-long-long-long-long-long-long-long-long-1
          </p>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-long -long-long -1</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">
            item--long-long-long-long -long-long2
          </li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-3</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-4</li>
          <li class="dark:bg-slate-500 cursor-pointer {classHover}">item-5</li>
        </ul>

      </div>
      <!-- Brands -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 dark:bg-slate-600 px-2">
        <BrandSmallCard />
        <BrandSmallCard />
        <BrandSmallCard />
        <BrandSmallCard />
      </div>
    </div>
  </div>
</section>

<style>
  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
