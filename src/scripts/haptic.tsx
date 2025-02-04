import { createElement } from './jsx';

const hapticElement = <label aria-hidden='true' style='display: none'>
  <input switch type='checkbox'/></label>

document.body.append(hapticElement)

export function haptic() {
  'vibrate' in navigator ? navigator .vibrate(10) : hapticElement .click();
}

