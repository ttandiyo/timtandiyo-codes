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
  <li class="text-darkgray stroke-darkgray font-mono lowercase text-center relative">
    <a
      class="peer hover:opacity-100 {$page.url.pathname === link.href ? active : inactive}"
      href={link.href}
      on:click
    >
      <svelte:component this={link.icon} />{link.text}
    </a>
    <span
      class="block logo-gradient absolute w-0 h-1 ml-auto peer-hover:mr-auto peer-hover:ml-0 peer-hover:w-full motion-safe:transition-[width]"
    />
    <!-- Invisible bold text below to maintain spacing when nav element changes to bold -->
    <span class="block font-semibold h-[0px] overflow-hidden text-transparent">
      <svelte:component this={link.icon} />{link.text}
    </span>
  </li>
{/each}
