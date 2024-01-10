<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import NavBar from '$lib/components/navbar.svelte';
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

<slot />
