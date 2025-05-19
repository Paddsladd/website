<script lang="ts" context="module">
  import './Navbar.scss';
  import './Media.scss';
  import { navItems } from '../../config';

  export type navItemsType = {
    url: string;
    icon: string;
    text: string;
  }[];
</script>

<nav>
  {#each navItems as item}
    <a href={item.url} target="_blank" rel="noopener noreferrer">
      <i class="nf-{item.icon}"></i>
      <span>{item.text}</span>
    </a>
  {/each}
</nav>
