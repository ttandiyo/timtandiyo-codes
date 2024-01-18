<script lang="ts">
  import { page } from '$app/stores';
  import BioIcon from '$lib/icons/bio-icon.svelte';
  import LabIcon from '$lib/icons/lab-icon.svelte';
  import MailIcon from '$lib/icons/mail-icon.svelte';

  const links = [
    { icon: BioIcon, text: 'Bio', href: '/bio' },
    { icon: LabIcon, text: 'Projects', href: '/projects' },
    {
      icon: MailIcon,
      text: 'E-mail',
      href: 'mailto:tim@timtandiyo.codes',
    },
  ];

  const active = 'opacity-100 font-semibold';
  const inactive = 'opacity-60';
</script>

{#each links as link}
  <li class="relative stroke-darkgray text-center font-mono lowercase text-darkgray">
    <a
      class="peer hover:opacity-100 {$page.url.pathname === link.href ? active : inactive}"
      href={link.href}
      on:click
    >
      <svelte:component this={link.icon} />{link.text}
    </a>
    <span
      class="logo-gradient absolute ml-auto block h-1 w-0 peer-hover:ml-0 peer-hover:mr-auto peer-hover:w-full motion-safe:transition-[width]"
    />
    <!-- Invisible bold text below to maintain spacing when nav element changes to bold -->
    <span class="block h-[0px] overflow-hidden font-semibold text-transparent">
      <svelte:component this={link.icon} />{link.text}
    </span>
  </li>
{/each}
