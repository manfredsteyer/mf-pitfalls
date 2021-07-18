import { loadRemoteEntry } from '@angular-architects/module-federation';

Promise.all([
  // loadRemoteEntry('https://brave-plant-03ca65b10.azurestaticapps.net/remoteEntry.js', 'mfe1')
])
.catch(err => console.error('Error loading remote entries', err))
.then(() => import('./bootstrap'))
.catch(err => console.error(err));



