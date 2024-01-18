<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import NavBar from '$lib/components/navbar/navbar.svelte';
  import Content from '$lib/components/content.svelte';
</script>

<svelte:head>
  {#if $page.data.title}
    <title>
      {$page.data.title} – timtandiyo.codes
    </title>
  {:else}
    <title>timtandiyo.codes</title>
  {/if}
</svelte:head>

<NavBar />

<div class="fixed z-[-1] flex h-full w-full overflow-clip bg-black">
  <div class="absolute z-[-2] h-full w-full overflow-clip opacity-25 [perspective:2000px]">
    <div
      class="h-[max((150vw,150vh,1414px)] absolute bottom-[-5000px] left-[-5000px] right-[-5000px] top-[-5000px] m-auto w-[max(150vw,150vh,1414px)] overflow-clip bg-[url('$lib/assets/architect.svg')] bg-[size:100px] bg-center bg-repeat opacity-90 [transform:rotateZ(37deg)] motion-safe:animate-slide1 lg:h-[max(250vw,250vh,1768px)] lg:w-[max(150vw,150vh,1768px)]"
    ></div>
    <div
      class="absolute bottom-[-5000px] left-[-5000px] right-[-5000px] top-[-5000px] m-auto h-[max(150vw,150vh,1414px)] w-[max(150vw,150vh,1414px)] overflow-clip bg-[url('$lib/assets/architect.svg')] bg-[size:141px] bg-center bg-repeat opacity-60 [transform:rotateZ(30deg)] motion-safe:animate-slide2 lg:h-[max(250vw,250vh,1768px)] lg:w-[max(150vw,150vh,1768px)]"
    ></div>
    <div
      class="h-[max((150vw,150vh,1414px)] absolute bottom-[-5000px] left-[-5000px] right-[-5000px] top-[-5000px] m-auto w-[max(150vw,150vh,1414px)] overflow-clip bg-[url('$lib/assets/architect.svg')] bg-[size:120px] bg-center bg-repeat opacity-75 [transform:rotateZ(45deg)] motion-safe:animate-slide3 lg:h-[max(250vw,250vh,1768px)] lg:w-[max(150vw,150vh,1768px)]"
    ></div>
  </div>
</div>

<Content>
  <slot />
</Content>
