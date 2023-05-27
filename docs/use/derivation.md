# Word derivation

## Proto-Slavic

Words are based on the living Slavic languages, and when the latter are not in agreement with each other, we basically follow the majority by applying a [voting system](../design-criteria.mdx#vocabulary). To avoid inconsistencies, we have to make sure that words using the same root always use it in the same form. Because all Slavic languages derive their forms from Common Slavic in a fairly predictable way, we never borrow from them directly. Instead, we follow a model for simple derivation from Common Slavic. This makes the language both easier to recognise and easier to use for everybody. Just by reading a few texts, a person will automatically learn quickly how a given sound in his own language is represented in Interslavic.

The following table shows how various Common Slavic sounds and sequences are dealt with in Interslavic. Please note that in some cases it is possible to distinguish between a North and a South Slavic version (see [flavourisation](flavourisation.md)).

| Proto-Slavic                       | OCS                              | Slavic                                                                                         |  Interslavic                  | Examples                    |
|------------------------------------|----------------------------------|------------------------------------------------------------------------------------------------|-------------------------------|-----------------------------|
|  Etymological alphabet             |  Standard alphabet               |  Etymological alphabet                                                                         |  Standard alphabet            |
| y                                  | ꙑ, ъи                            | ESl./WSl. y, SSl. i                                                                            | y                             | y                           | byti, dobry                                          | byti, dobry                                        |
| ě                                  | ѣ                                | RU/BE 'e, UK i, PL ie/ia, CZ ě/e/a, SK ie/e/a, SL/SR/MK e, HR (i)je, BG e/ja                   | ě                             | ě                           | svět, rěka                                           | svět, rěka                                         |
| ę                                  | ѧ                                | ESl. ja, PL ią/ię, CZ a/ě, SK ä/a/ia, SSl. e                                                   | ę                             | e                           | język, svęty                                         | jezyk, svety                                       |
| ǫ                                  | ѫ                                | PL ą/ę, CZ u/ou/i, SL o, MK a, BG ă/a, otherwise u                                             | ų                             | u                           | pųt́, rųka                                           | put, ruka                                          |
| initial ǫ-                         | ѫ-                               | RU/CZ/SK u-, PL wą-, SB wu-; other languages are less consistent                               | vų-                           | vu-                         | vųtroby, pavųk                                       | vutroby, pavuk                                     |
| strong ь                           | ь                                | BCMS a, otherwise e
| ė                             | e                           | otėc, pės                                            | otec, pes                                          |
| strong ъ                           | ъ                                | ESl./SK/MK o, PL/CZ/SL e, BCMS a, BG ă
| ȯ                             | o                           | sȯn, pěsȯk                                           | son, pěsok                                         |
| (C)orC(C)olC                       | рала                             | ESl. (o)ro/(o)lo, PL ro/ło, SSl./CZ/SK ra/la                                                   | rålå                          | rala                        | gråd, kråvaglåva, mlådy                              | grad, kravaglava, mlady                            |
| (C)erC(C)elC                       | рѣлѣ                             | ESl. (e)re/(o)lo, PL rze/le, CZ ře/lě, SK re/lie, SL/SR/MK re/le, HR rije/lije, BG rja/lja     | rělě                          | rělě                        | brěg, prědmlěko                                      | brěg, prědmlěko                                    |
| CъrC                               | ръ                               | ESl. or, PL ar, BG ъr, otherwise r                                                             | r                             | r                           | trg, krčma                                           | trg, krčma                                         |
| CьrC                               | рь                               | ESl. er, PL ar/ierz, BG ъr, otherwise r                                                        | ŕ                             | r                           | dŕžati, smŕt́                                        | držati, smrt                                       |
| CъlC                               | lъ                               | RU/SL/MK ol, BE/UK ou, PL oł/łu/eł, CZ/SK l/lu, BCMS u, BG ъl                                  | ȯl                            | ol                          | dȯlg, kȯlbasa                                        | dolg, kolbasa                                      |
| CьlC                               | ль                               | RU/SL/MK ol, BE/UK ou, PL oł/łu/eł/il, CZ/SK l/lu, BCMS u, BG ъl                               | ȯl                            | ol                          | tȯlsty, vȯlk                                         | tolsty, volk                                       |
| pj, bj,mj, vj                      | пль, бль...                      | ESl./SSl. plj, blj..., WSl. p, b...
| pj, bj, mj, vj                | pj, bj, mj, vj              | kupjų, zemja                                         | kupju, zemja                                       |
| lь, ljnь, nj                       | льнь                             | ESl./PL ľ/ń, otherwise ľ/l, ń/n
| ljnj                          | ljnj                        | ljubiti, hvaljeńjedenj, hrånjeńje                    | ljubiti, hvaljenjedenj, hranjenje                  |
| rь, rj                             | рь                               | RU/PL/CZ/SL ŕ, otherwise r
| ŕ, rj                         | r, rj                       | caŕ, tvorjeńje                                       | car, tvorjenje                                     |
| tьdь                               | тьдь                             | RU/UK/SK t́/d́, PL/BE ć/dź, CZ/SSl. t/d
| t́d́                          | td                          | kost́dóžd́                                           | kostdožd                                           |
| sьzь                               | сьзь                             | ESl./PL ś/ź, otherwise s/z
| śź                            | sz                          | lośknęź                                              | losknez                                            |
| sjzj                               | шж                               | everywhere š/ž
| šž                            | šž                          | prošųtęžeńje                                         | prošuteženje                                       |
| tj, kt́dj, gd́                     | щжд                              | ESl./SL č, WSl. c, BCMS ć, MK kj, BG št ESl. ž, PL dz, CZ/SK z, SL d/j, BCMS đ, MK gj, BG žd | ćđ                            | čdž                         | svěća, noćmeđu                                       | svěča, nočmedžu                                    |
| šč                                 | щ                                | CZ/SK/SSl. št, otherwise šč                                                                    | šč                            | šč                          | ščetka                                               | ščetka                                             |
| tl, dl                             | л                                | ESl./SSl. l, WSl. tl/dl
| l                             | l                           | moliti, grlo                                         | moliti, grlo                                       |
| g                                  | г                                | UK/BY/CZ/SK h, otherwise g                                                                     | g                             | g                           | glåva, jego                                          | glava, jego                                        |
| lьje, nьjetьje, dьjesьje, zьjerьje | льѥ,&nbsp;ньѥтьѥ, дьѥсьѥ, зьѥрьѥ | RU lije/nije, UK llja/nnja, PL le/nie, CZ lí/ní, SK lie/nie, SL/SH/MK lje/nje, BG l(i)e/n(i)e  | ĺje, ńjeŕjet́je, d́jeśje, źje | lje, njerjetje, djesje, zje | usiĺje, dělańje, primoŕje, žit́je, orųd́je, podlěśje | usilje, dělanje, primorje, žitje, orudje, podlěsje |


## International vocabulary

The Slavs do not live on an island, and over the centuries their languages have borrowed many non-Slavic words as well. Part of those words were taken from their direct neighbours (German, Romance, Turkish). Vocabulary of this type has rarely found its way to the entire language family. For example, German loans are much more frequent in West Slavic than in Russian or Bulgarian, while words of Turkish descent can be found in South Slavic more abundantly than in the other Slavic languages. As a result, most of this vocabulary is not commonly understood and therefore not used in Interslavic.

Another category is international vocabulary, mostly from Latin and Greek, but later also from French and more recently English. Words of this type tend to be similar throughout Europe and other parts of the world. They constitute an integral part of every Slavic language and can be of great help in achieving mutual intelligibility, especially among the more educated. International words are practically identical in every language, and there are hardly any variations in meaning. When we borrow international vocabulary, we stay as close as possible to spelling of the original word, adapting it only as far as orthography requires. However, especially for Graeco-Latin vocabulary goes the following:

*   Geminated consonants are avoided: _gramofon_, _grupa_.
*   The Greek consonants **th** and **ph** are simplified to **t** and **f**: _teatr, fenomen_
*   Greek **y** is written **i**, which is closer to both spelling and pronunciation in most Slavic languages: _sistem, fizika_
*   The \[k\] sound is always written **k** and never **c**: _kontakt_
*   The \[x\] sound (often represented by **ch**) is written **h**: _psiholog_.
*   The \[y\] sound (in German written **ü**, in French **u**) becomes **ju**: _bjuro_.
*   Between vowels, the \[z\] sound (written **\-s-**) becomes **z**: _baza_.
*   Between vowels, the \[s\] sound (written **\-ss-**) becomes **s**: _masa_.

Besides, endings are adapted in a predictable way to what is most common in the Slavic languages:

*   Verbs of Latin descent (often **_\-ate, -fy, -ise/-ize_** in English, **_\-ieren_** in German) have **\-ovati**: _organizovati_, _komunikovati_.
*   Latin **_\-ia_** (rendered in English as **_\-ia_** or **_\-y_**) becomes **\-ija**: _ekonomija_.
*   English **_\-sis_** (from Greek) becomes **\-za**: _kriza_.
*   Names of chemical elements etc. on **_\-ium_** become **\-ij**: _helij, kriterij_.
*   Words on **_\-um_** and **_\-us_** generally keep these endings: _forum, korpus_.
*   English **_\-ty_** (Latin **_\-tas, -tatis_**) becomes **\-tet**: _universitet_.
*   English **_\-ics_** becomes **\-ika**: _ekonomika_.
*   English **_\-ism_** becomes **\-izm**: _komunizm_.
*   English **_\-ist_** becomes **\-ist**: _komunist_.
*   English **_\-sion_** becomes **\-zija**: _televizija_.
*   English **_\-ssion_** becomes **\-sija**: _diskusija_.
*   English **_\-tion_** becomes **\-cija**: _akcija_.
*   Adjectives derived from these nouns have the ending **\-ijny**: _televizijny_, _tradicijny_.
*   English adjectives in **_\-al_** (Latin **_\-alis_**) end in **\-alny**: _neutralny_.
*   English adjectives in **_\-ic, -ical_** (Latin **_\-icus_**) have the ending **\-ičny**: _specifičny_, _komičny_.
*   English adjectives in **_\-ive_** (Latin **_\-ivus_**) have the ending **\-ivny**: _pozitivny_.
*   English adjectives in **_\-ous_** (Latin **_\-osus_**) have the ending **\-ozny**: _seriozny_.

More problematic are words borrowed from English. When writing in the Latin alphabet, we can keep the original spelling (_bypass_, _knockout_, _jazz_, _teenager_). However, many texts in Interslavic are written in Cyrillic or in both orthographies parallelly, often with the help of a transliteration program, and one should of course avoid writing _быпасс_ or _кноцкоут_ in Cyrillic! In most cases, we would therefore rather apply a more phonetical approach: _bajpas_, _nokaut_, _džaz_, _tinejdžer_, _budžet_, _biznes_, _mjuzikl_, _futbol_, _koktejl_, etc.
