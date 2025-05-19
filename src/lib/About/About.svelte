<script lang="ts">
  import './About.scss';
  import './Media.scss';
  import PaddsladdLogo from '../../assets/Paddsladd.svg';
  import {
    type imagesWithLabels,
    skills as skillItems,
    learning as learningSkillItems
  } from '../../config';
</script>

{#snippet skills(items: imagesWithLabels)}
  {#each items as item}
    <div>
      <img src={item.image} alt="{item.label} Logo" />
      <span>{item.label}</span>
    </div>
  {/each}
{/snippet}

<section id="about">
  <img src={PaddsladdLogo} alt="Paddsladd Logo" class="logo" />

  <div class="greating">
    <h1>Hi! I'm Paddsladd 󱠡</h1>
    <span>I live in Sweden and love gaming 󰊴</span>
  </div>

  <div class="links">
    <a href="#projects"> Explore Projects</a>
  </div>

  <h2 class="skillsHeader">Skills </h2>
  <div class="skills">
    {@render skills(skillItems)}
  </div>

  <h2 class="learningHeader">Currently I'm learning </h2>
  <div class="learning">
    {@render skills(learningSkillItems)}
  </div>
</section>
