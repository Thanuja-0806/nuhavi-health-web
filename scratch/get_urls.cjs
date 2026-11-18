const https = require('https');
const fs = require('fs');

const url = 'https://commons.wikimedia.org/w/api.php?action=query&titles=File:2612_Blood_Flow_in_the_Kidneys.jpg|File:Surgeons_in_the_operating_room.jpg|File:Withania_somnifera_NP.JPG&prop=imageinfo&iiprop=url&format=json';

https.get(url, { headers: { 'User-Agent': 'NuhaviHealth/1.0 (info@nuhavihealth.com)' } }, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    try {
      const json = JSON.parse(data);
      const pages = json.query.pages;
      for (const id in pages) {
        const p = pages[id];
        console.log(p.title, '=>', p.imageinfo ? p.imageinfo[0].url : 'NO URL');
      }
    } catch (e) {
      console.error(e);
    }
  });
});

