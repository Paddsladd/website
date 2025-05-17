<script lang="ts">
  import './Navbar.scss';

  type navItem = {
    url: string;
    icon: string;
    text: string;
  };

  const github: navItem = {
    icon: 'cod-github_inverted',
    text: 'Github',
    url: 'https://github.com/Paddsladd'
  };

  const discord: navItem = {
    icon: 'fa-discord',
    text: 'Discord',
    url: 'https://discord.gg/'
  };

  const email: navItem = {
    icon: 'fa-envelope',
    text: 'Email',
    url: 'mailto:info@paddsladd.com'
  };
</script>

{#snippet navElement(item: navItem)}
  <a href={item.url} target="_blank" rel="noopener noreferrer">
    <i class="nf-{item.icon}"></i>
    <span>{item.text}</span>
  </a>
{/snippet}

<div>
  <nav>
    {@render navElement(github)}
    {@render navElement(discord)}
    {@render navElement(email)}
  </nav>
</div>
