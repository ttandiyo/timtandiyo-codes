<script lang="ts">
  import Hero from '$lib/components/hero.svelte';
</script>

<Hero>
  <svelte:fragment slot="title">Hi there!</svelte:fragment>
  <svelte:fragment slot="content">
    <span>
      I'm Tim Tandiyo, an LA-based software engineer who loves taking on fresh challenges and
      turning ideas into reality. I'm always eager to learn, explore, and try new things.
    </span>
    <span>Got a question or an exciting project in mind? Let's chat!</span>
  </svelte:fragment>
</Hero>
