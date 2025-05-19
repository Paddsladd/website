import type { navItemsType } from './lib/Navbar/Navbar.svelte';
import CppLogo from './assets/C++.svg';
// import GoLogo from './assets/Go.svg';
import TypescriptLogo from './assets/Typescript.svg';
import JavascriptLogo from './assets/JavaScript.svg';
import PythonLogo from './assets/Python.svg';
import SkolplusHack from './assets/SkolplusHack.webp';

export type imagesWithLabels = { image: string; label: string }[];

export const skills: imagesWithLabels = [
  {
    image: TypescriptLogo,
    label: 'Typescript'
  },
  {
    image: JavascriptLogo,
    label: 'Javascript'
  },
  {
    image: PythonLogo,
    label: 'Python'
  }
];

export const learning: imagesWithLabels = [
  // {
  //   icon: GoLogo,
  //   name: 'Go'
  // },
  {
    image: CppLogo,
    label: 'C++'
  }
];

export const projects: imagesWithLabels = [
  {
    image: SkolplusHack,
    label: 'Skolplus Hack'
  }
];

export const navItems: navItemsType = [
  {
    icon: 'cod-github_inverted',
    text: 'Github',
    url: 'https://github.com/Paddsladd'
  },
  {
    icon: 'fa-discord',
    text: 'Discord',
    url: 'https://discord.gg/'
  },
  {
    icon: 'fa-envelope',
    text: 'Email',
    url: 'mailto:info@paddsladd.com'
  }
];
