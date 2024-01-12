<script lang="ts">
  import Logo from '$lib/components/logo.svelte';
  let navOpen = false;
</script>

<!-- ${settings.stickyNavBar && 'sticky'}  -->
<div
  class="sticky z-20 top-0 w-full backdrop-blur-lg bg-cream/80 select-nonept-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)]"
>
  <header class="mx-auto max-w-screen-xl flex items-center justify-between border-b border-gray/25">
    <Logo />
    <nav class="hidden sm:flex">
      <ul class="flex justify-center items-center gap-8 m-2 lg:m-4 flex-wrap">
        <!-- <NavList links={settings.navBarLinks} /> -->
      </ul>
    </nav>
    <button
      class="flex justify-center items-center sm:hidden p-2 z-1"
      on:click={() => (navOpen = !navOpen)}
    >
      <!-- {navOpen ? <CloseIcon /> : <BurgerIcon />} -->
    </button>
  </header>
  <nav
    class={`${
      !navOpen && 'hidden'
    } flex sm:hidden mx-auto max-w-screen-xl items-center justify-between border-b border-gray/25`}
  >
    <ul class="flex justify-center items-center gap-4 p-2 max-w-screen-xl flex-wrap mx-auto">
      <!-- <NavList links={settings.navBarLinks} handleClick={() => setNavOpen(!navOpen)} /> -->
    </ul>
  </nav>
</div>
