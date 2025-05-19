<script lang="ts">
  import './Projects.scss';
  import './Media.scss';
  import { projects } from '../../config';
</script>

<section id="projects">
  <h1>Projects</h1>

  <div>
    {#each projects as item}
      <a href={item.label.toLowerCase().replaceAll(' ', '-')}>
        <img src={item.image} alt="{item.label} logo" />
        <span>{item.label}</span>
      </a>
    {/each}
  </div>
</section>
