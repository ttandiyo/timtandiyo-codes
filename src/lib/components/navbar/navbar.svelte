<script lang="ts">
  import Logo from '$lib/components/logo.svelte';
  import CloseIcon from '$lib/icons/close-icon.svelte';
  import BurgerIcon from '$lib/icons/burger-icon.svelte';
  import NavList from './navlist.svelte';

  let isOpen = false;
</script>

<div
  class="sticky top-0 z-20 w-full select-none bg-white/80 pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)] backdrop-blur-lg"
>
  <header class="mx-auto flex max-w-screen-xl items-center justify-between border-b border-gray/25">
    <Logo />
    <nav class="hidden sm:flex">
      <ul class="m-2 flex flex-wrap items-center justify-center gap-8 lg:m-4">
        <NavList />
      </ul>
    </nav>
    <button
      class="z-1 flex items-center justify-center p-2 sm:hidden"
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
      class="mx-auto flex max-w-screen-xl items-center justify-between border-b border-gray/25 sm:hidden"
    >
      <ul class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-center gap-4 p-2">
        <NavList on:click={() => (isOpen = !isOpen)} />
      </ul>
    </nav>
  {/if}
</div>
