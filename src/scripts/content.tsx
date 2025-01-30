import { createElement } from './jsx';

import fontLoader from './fontLoader';

const profile: Record<string, {alt: string, href: string}> = {
/*
  🏷️ ID     💬 Caption                 🌐 Link
  _|_    _______|_______         ________|________  */
  tg:  { alt: 'Telegram', href:       't.me/olksij' },
  mt:  { alt: 'Email',    href:  'mailto:h@olek.si' },
  lt:  { alt: 'Layers',   href:  'layers.to/olksij' },
  gh:  { alt: 'Github',   href: 'github.com/olksij' },
  li:  { alt: 'LinkedIn', href: 'linkedin.com/in/olksij' },
};

// inline pictures
import pf from '/assets/images/profilePicture.jpeg';
import tg from '/assets/icons/telegram.svg';
import lt from '/assets/icons/layers.svg';
import gh from '/assets/icons/github.svg';
import li from '/assets/icons/linkedin.svg';
import mt from '/assets/icons/email.svg';
import cr from '/assets/icons/copyright.svg';

const social: Record<string, string> = { tg, lt, gh, li, mt };

const container = <div id='container'>
  <div id='name' delay={0}>
    <div id='profile-picture'><img src={pf} alt='Portrait' /></div>
    <p>OLEKSII</p>
  </div>
  <p id='headline' style="display: inline">
    <span delay={400}>Delight</span>&nbsp;
    <span delay={450}>Centered</span>
    <br/>
    <span delay={700}>IxD</span>&nbsp;
    <span delay={750}>Designer</span>
  </p>
  <div id="mail" delay={800}>
    <img src={mt} alt="Mail Icon" />
    <p><span>Mail</span>h@olek.si</p>
  </div>
  <div id='profiles' delay={800}> {
    Object.entries(profile).map(([id, props]) => {
      let index = Object.keys(profile).indexOf(id),  link =  props['href'];
      let  href = `${link.startsWith('mailto:') ? '' : 'https://'}${link}`;
      let image = <img src={social[id]} alt={props['alt']} />;
      return <a id={id} delay={800 + index * 50} href={href} target="_blank">{image}</a>;
    })
  } </div>
</div>;

const footer = <div id='footer' tr>
  <img src={cr} alt='(c)' size='16px' />
  <p>2023 Oleksii Besida</p>
</div>

const player = <lottie-player id="signature" autoplay mode="normal" />;

const description = 'IxD Designer & Flutter developer based*in Stockholm, Sweden.';

import animateStyle from '../style/animation.css?raw';
import  globalStyle from '../style/global.css?raw';
import  mobileStyle from '../style/mobile.css?raw';
import desktopStyle from '../style/desktop.css?raw';

const stylesheets = [
  { style:  mobileStyle, media: '(max-width: 768px)' },
  { style: desktopStyle, media: '(min-width: 768px)' },
  { style:  globalStyle, },
  { style: animateStyle, },
]

export async function load() {
  for (var ss of stylesheets) document.head.
    append(<style media={ss.media ?? ''}>{ss.style}</style>)

  await fontLoader();
  document.body.append(container, footer, player);

  let toRender = document.getElementsByClassName('torender');
  Array.from(toRender).forEach(async element => {
    let delay = parseInt(element.getAttribute('delay') ?? '');
    await new Promise(r => isNaN(delay) ? 0 : setTimeout(r, delay));

    element.classList.replace('torender', 'rendered');
    elementResolve[element.id]?.(element as HTMLElement);
  });
}

import "@lottiefiles/lottie-player";
import signature from '/assets/lottie/signature.json?raw';

const elementResolve: Record<string, (e: HTMLElement) => void> = {
  title: () => {
    document.getElementById('loader')?.remove();
  },
  container: () => {
    // let root = document.querySelector(':root') as HTMLElement;
    // root.style.setProperty('--background-position', 'left 50% top calc(50% - 48px)'); 
  },
  description: async (element: HTMLElement) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    for (var letter of description) {
      element.innerHTML += letter == '*' ? '<br>' : letter;
      let delay = ([' ', ',', '&'].includes(letter) ? 16 : 24) + Math.random() * 48;
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  },
  profiles: () => {
    player.load(signature);
    player.animate(keyframes, timing);
  
    setTimeout(() => {
      player.classList.add('rendered');
      footer.classList.replace('torender', 'rendered');
    }, 1800);
  },
}

const keyframes = [
  { opacity: "0" },
  { opacity: "1" },
];

const timing = {
  duration: 1000,
  iterations: 1,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
};
