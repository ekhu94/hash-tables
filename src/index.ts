import { firstHash } from './firstHash';
import { secondHash } from './secondHash';
import { HashTable } from './HashTable';

const ht = new HashTable(11);

ht.set('rich evans', 'AIDS');
ht.set('mike stoklasa', 'alcoholism');
ht.set('jay bauman', 'vanity');
ht.set('jack packard', 'clown');
ht.set('josh davis', 'wizard');

console.log(ht.get('jack packard'));
