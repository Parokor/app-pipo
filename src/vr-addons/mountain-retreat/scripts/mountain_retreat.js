import { MountainRetreat } from '../mountain_retreat.ts';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('mountain-retreat-container');
  new MountainRetreat(container);
});
