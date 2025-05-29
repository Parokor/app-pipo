import { SereneForest } from '../serene_forest.ts';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('serene-forest-container');
  new SereneForest(container);
});
