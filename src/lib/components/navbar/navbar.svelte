<script lang="ts">
  import Logo from '$lib/components/logo.svelte';
  import CloseIcon from '$lib/icons/close-icon.svelte';
  import BurgerIcon from '$lib/icons/burger-icon.svelte';
  import NavList from './navlist.svelte';

  let isOpen = false;
</script>

<div
  class="sticky z-20 top-0 w-full backdrop-blur-lg bg-white/80 select-none pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)]"
>
  <header class="mx-auto max-w-screen-xl flex items-center justify-between border-b border-gray/25">
    <Logo />
    <nav class="hidden sm:flex">
      <ul class="flex justify-center items-center gap-8 m-2 lg:m-4 flex-wrap">
        <NavList />
      </ul>
    </nav>
    <button
      class="flex justify-center items-center sm:hidden p-2 z-1"
      on:click={() => (isOpen = !isOpen)}
    >
      {#if isOpen}
        <CloseIcon />
      {:else}
        <BurgerIcon />
      {/if}
    </button>
  </header>
  {#if isOpen}
    <nav
      class="flex sm:hidden mx-auto max-w-screen-xl items-center justify-between border-b border-gray/25"
    >
      <ul class="flex justify-center items-center gap-4 p-2 max-w-screen-xl flex-wrap mx-auto">
        <NavList on:click={() => (isOpen = !isOpen)} />
      </ul>
    </nav>
  {/if}
</div>
