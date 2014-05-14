# datput

status: experimental

[![NPM](https://nodei.co/npm/datput.png?global=true)](https://nodei.co/npm/datput/)

command line tool for uploading files into dat

## usage

first, start a local dat server. for now datput expects it to be at http://localhost:6461

```sh
$ datput *.mp3
{"id":"2014-05-14T12:29:35.796Z-9c163d4a","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 01 Closeness.mp3":{"hash":"9cfa4b887a69382986b57e343d4a865a34bcbadd"}}}
{"id":"2014-05-14T12:29:35.864Z-34228b79","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 02 Scenery.mp3":{"hash":"769350c67e846cb992a075f5e9b02616e72d4992"}}}
{"id":"2014-05-14T12:29:35.920Z-a863d3ea","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 03 America.mp3":{"hash":"84918424b07bd83fb8db29a71d317888ebb870e9"}}}
{"id":"2014-05-14T12:29:35.982Z-fa3ed48e","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 04 Earth.mp3":{"hash":"67899ef434a1d9373f7a8851c7c82bc652289d3d"}}}
{"id":"2014-05-14T12:29:36.021Z-9ac69d7e","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 05 Devotion.mp3":{"hash":"0ea24c8830756dc533e0ced030c33a6f416d72a9"}}}
{"id":"2014-05-14T12:29:36.065Z-65858bd","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 06 Eyeliner.mp3":{"hash":"27368d86bf161609017d59768f2518f9185f565e"}}}
{"id":"2014-05-14T12:29:36.115Z-38f327a1","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 07 Realdoll.mp3":{"hash":"1ecfa427e83a376de033099fdcca1495cc38ea38"}}}
{"id":"2014-05-14T12:29:36.165Z-ac3b67a2","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 08 Rouge.mp3":{"hash":"f665c517b845ef620a2996b7201a247ff53c6de1"}}}
{"id":"2014-05-14T12:29:36.225Z-d77f08a6","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 09 Antivirus.mp3":{"hash":"1fe32bf3448a0bb368e5aa3502ba140f4a1a9434"}}}
{"id":"2014-05-14T12:29:36.267Z-2297188b","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 10 Reflection.mp3":{"hash":"bc22449cc5ff91d61f2699200861d139b27991e9"}}}
{"id":"2014-05-14T12:29:36.304Z-c7839d14","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 11 Cleopatra.mp3":{"hash":"57f534b6e23598c942da4bcc1e749e0f7ab4b8f2"}}}
{"id":"2014-05-14T12:29:36.333Z-b8f14c03","version":2,"attachments":{"Eyeliner - High Fashion Mood Music - 12 Homo Electronicus.mp3":{"hash":"150dc4f4feced28c292e0fed2c641b2b0593311b"}}}
```