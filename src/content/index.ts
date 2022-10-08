export { head, languages } from './general';

import { RenderConfig, SourceTextData, TextStyle } from '../interfaces';
import { fontStyles } from './general';


/* --- --- --- --- --- --- --- --- ---
   --- CODE IN THIS FILE REQUIRES- ---
   --- --- URGENT REFACTORING- --- ---
   --- --- --- --- --- --- --- --- --- */

// specific dates with custom description
const dates: Record<string, Array<string>> = {  
  "6-12":  ["🎂 It's my birthday today!", "June 12"],
  "8-24":  ["Restoration of independence of Ukraine", "🇺🇦 August 24"],
  // more dates to come such as celebrations and holidays
  default: ["Redefining the way humans interact", "with computers."],
};

import titleFromPath from 'bundle-text:/assets/raw/titleFromPath.txt';
import nav from 'bundle-text:/assets/raw/nav.txt';
import cr from 'bundle-text:/assets/raw/copyright.txt';
import lg from 'bundle-text:/assets/raw/language.txt';

let date = new Date();
let description = dates[date.getMonth() + '-' + (date.getDate() + 1)] ?? dates.default;

export const textStyleData: Record<string, TextStyle> = {

/*                 📦 Placeholder                                   ⚙️ Custom placeholder
  🏷️ Element ID        width              ✨ FontStyle                     or icon
         |               |                      |                              |
  --------------   ------------       -----------------------           --------------   */

  "tt":           { width: 386, font: fontStyles.title,       fromPath: titleFromPath, },
  "d1":           { width: 337, font: fontStyles.subtitle, },
  "d2":           { width: 148, font: fontStyles.subtitle, },
  "home":         { width: 128, font: fontStyles.menuSelected },
  "about":        { width: 128, font: fontStyles.menu },
  "projects":     { width: 128, font: fontStyles.menu },
  "work":         { width: 128, font: fontStyles.menu },
  "nav":          { width: 112,  font: fontStyles.action,      icon: nav, iconWidth: 28 },
  "cr":           { width: 158, font: fontStyles.footer,       icon: cr, iconWidth: 16 },
  "lg":           { width: 96,  font: fontStyles.footer,       icon: lg, iconWidth: 20 },
}

export const texts: SourceTextData = {
  en: {
    'tt': 'Oleksii',
    'd1': description[0],
    'd2': description[1],
    'home': 'oleksii.xyz',
    'about': 'about',
    'projects': 'projects',
    'work': 'work',
    'nav': 'Navigation',
    'cr': '2018-2022 Oleksii Besida',
    'lg': 'English',
  },
  sv: {
    'tt': 'Oleksiy',
    'd1': description[0],
    'd2': description[1],
    'home': 'oleksii.xyz',
    'about': 'om mig',
    'projects': 'projekts',
    'work': 'alster',
    'nav': 'Navigering',
    'cr': '2018-2022 Oleksiy Besida',
    'lg': 'Svenska',
  },
  uk: {
    'tt': 'Oleksij',
    'd1': description[0],
    'd2': description[1],
    'home': 'oleksii.xyz',
    'about': 'pro mene',
    'projects': 'projekty',
    'work': 'roboty',
    'nav': 'Naviǧacija',
    'cr': '2018-2022 Oleksij Besida',
    'lg': 'Ukrajinśka',
  }
}

// more things to come soon;

// inline pictures
import pf from 'data-url:/assets/images/profilePicture.webp';
import tg from 'data-url:/assets/vectors/telegram.svg';
import ig from 'data-url:/assets/vectors/instagram.svg';
import gh from 'data-url:/assets/vectors/github.svg';
import li from 'data-url:/assets/vectors/linkedin.svg';
import mt from 'data-url:/assets/vectors/email.svg';

export const images: Record<string, string> = { pf }

export const vectors: Record<string, string> = { tg, ig, gh, li, mt, cr, lg }

import indexStylesheet from 'data-url:../styles/index.css';
import { onMenuClick } from '../modules/menu';

export const stylesheets: string[] = [indexStylesheet];

export const restoreLinks: Record<string, Array<string>> = {
  "ps": ["https://t.me/oleksiibesida", "https://ig.me/oleksiibesidaa", "https://github.com/oleksiibesida", "https://linkedin.com/in/oleksiibesida/", "mailto:besida@oleksii.xyz"],
  "rg": ["https://oleksii.xyz", "https://oleksii.xyz", "https://oleksii.xyz", "https://oleksii.xyz"],
}

export const restoreClicks: Record<string, Array<Function>> = {
  rg: [
    () => onMenuClick(),
    () => onMenuClick(),
    () => onMenuClick(),
    () => onMenuClick(),
  ],
};

// order and details of animating each node

export const animatingOrder: Record<string, RenderConfig> = {
  "pf":  { type: 'img',  delay: 0, alt: 'profilePicture' },
  "tt":  { type: 'text', delay: 50 },
  "d1":  { type: 'text', delay: 500 },
  "d2":  { type: 'text', delay: 50 },
  "ps":  { type: 'img',  delay: 100, children: true },
  "rg":  { type: 'text', delay: 50, children: true },
  "nav": { type: 'text', delay: 0 },
  "cr":  { type: 'text', delay: 0 },
  "lg":  { type: 'text', delay: 0 },
}
