<script lang="ts">
  import '../app.css';
  import { page } from '$app/stores';
  import NavBar from '$lib/components/navbar/navbar.svelte';
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

<div class="bg-black w-full h-full overflow-clip flex fixed z-[-1]">
  <div class="z-[-2] [perspective:2000px] overflow-clip w-full h-full absolute opacity-25">
    <div
      class="bg-[url('$lib/assets/architect.svg')] overflow-clip opacity-90 bg-[size:100px] bg-center bg-repeat h-[max((150vw,150vh,1414px)] lg:h-[max(250vw,250vh,1768px)] w-[max(150vw,150vh,1414px)] lg:w-[max(150vw,150vh,1768px)] absolute left-[-5000px] right-[-5000px] top-[-5000px] bottom-[-5000px] [transform:rotateZ(37deg)] m-auto motion-safe:animate-slide1"
    ></div>
    <div
      class="bg-[url('$lib/assets/architect.svg')] overflow-clip opacity-60 bg-[size:141px] bg-center bg-repeat h-[max(150vw,150vh,1414px)] lg:h-[max(250vw,250vh,1768px)] w-[max(150vw,150vh,1414px)] lg:w-[max(150vw,150vh,1768px)] absolute left-[-5000px] right-[-5000px] top-[-5000px] bottom-[-5000px] [transform:rotateZ(30deg)] m-auto motion-safe:animate-slide2"
    ></div>
    <div
      class="bg-[url('$lib/assets/architect.svg')] overflow-clip opacity-75 bg-[size:120px] bg-center bg-repeat h-[max((150vw,150vh,1414px)] lg:h-[max(250vw,250vh,1768px)] w-[max(150vw,150vh,1414px)] lg:w-[max(150vw,150vh,1768px)] absolute left-[-5000px] right-[-5000px] top-[-5000px] bottom-[-5000px] [transform:rotateZ(45deg)] m-auto motion-safe:animate-slide3"
    ></div>
  </div>
</div>

<slot />
