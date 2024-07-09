---
authors: [noomorph, jvs]
---

# Asimetrija medžu `LJ`/`NJ` i `Љ`/`Њ`

## Motivacija

Už několiko sedmic Jan van Steenbergen jest mnogo zajety s prěvodženjem viki-interfejsa, da byhmo mogli potom spokojno početi rabotu nad MS Vikipedijeju. To jest spěšno dělo, ibo kratko poslě publikacije našego koda `ISO 639-3` uže pojavilo se prědloženje za MS Vikipediju MS projekt v Inkubatoru. Ne hočemo, aby ljudi počeli kopijovati teksty iz Medžuviki, čto jest narušenje avtorskyh prav. Vměsto togo, trěba bude kopirati cělo sodržanje Medžuviki v Inkubator – zajedno s historijeju. V Medžuviki jest avtomatičny transliterator, da by čitatelji mogli izbirati medžu latiniceju i kiriliceju. Očevidno, v Vikipediji on takože bude potrěbny. Tu jest jedin maly problem.

Tutdenj medžuslovjansky pravopis imaje asimetriju medžu latiniceju i kiriliceju, čto se tyče prědavanja digrafov `lj` i `nj` na pismu, i to jest objekt našej diskusije niže.

<!-- truncate -->

### Fonetičny pogled

Sut 3 možne situacije iz pozicije fonetiky (priměry sut zapisane v tutdennom etimologičnom pravopisu):

-   `lj` i `nj` označajut mekke `L` i `N`: `detalj` (`детаљ`), `konj` (`коњ`)
-   `lj` i `nj` označajut tvrde `L` i `N`, i poslě togo ide samostojno `J`: `injekcija`
    (`инјекција`), `konjunkcija` (`конјункција`)
-   `lj` i `nj` označajut mekke `L` i `N`, i poslě togo ide samostojno `J`: `usiĺje` (`усильје`),
    `pisańje` (`писаньје`)

Podolg standarda, v medžuslovjanskoj latinici vse tri situacije trěbujut pisati `lj` i `nj`.

Jednakože, v standardnoj kirilici, prva situacija zapisyvaje se s `љ` i `њ`, ale v situacijah №2 i №3 pišemo: `лј` i `нј`.

Tuta asimetrija tvori problem, že pri transliterovanju `љ`/`лј` i `њ`/`нј` iz kirilice do latinice dostavajemo: `lj`/`lj` i `nj`/`nj`. Zatože informacija gubi se, povtorno transliterovanje do kirilice, samorazumno, už davaje `љ`/`љ` i `њ`/`њ`.

Paradoks je taky: teoretično kirilica dozvaljaje zapisati vse tri situacije bez razširjenja abecedy, koristajuči  simboly už dostupne nam: `Ј`, `Л`, `Љ`, `Н`, `Њ`:

-   `детаљ`, `коњ`
-   `инјекција`, `конјункција`
-   `усиљје`, `писањје`

Ale v latinici my ne možemo najdti prostogo razrěšenja asimetrije bez dodatnogo označenja mekkosti ili tvrdosti bukv `L` i `N` v digrafah `LJ` i `NJ`, napr.:

-   `detalj`, `konj`
-   `in'jekcija`, `kon'junkcija`
-   `usiĺje`, `pisańje`

_Jaroslav Sergějev_

### Etimologičny pogled

Imajemo dělo s 4 kategorijami:

-   osnovne (tvrde) suglasky, plus **c** i **j**: `#`
-   smekčenje: `#ь` (napr. `konj`, `bolj`, `kosť`)
-   jotacija tvrdoj suglasky: `#j` (napr.: `hot-jų` → `hoćų`, `hval-jeńje` → `hvaljeńje`)
-   jotacija smekčenoj suglasky: `#ьj` (napr. `pisańje`, `usiĺje`)

Kako to funkcionuje, pokažemo v tabelě niže:

**Etimologičny pravopis:**

| `#`  | `l`       | `n`       | `r`  | `t`   | `d`   | `s` | `z` | `p`  | `k` | `c` | `j`    |
|------|-----------|-----------|------|-------|-------|-----|-----|------|-----|-----|--------|
| `#ь` | `ĺ`, `lj` | `ń`, `nj` | `ŕ`  | `t́`  | `d́`  | `ś` | `ź` | `p`  | `č` | `č` | `j`    |
| `#j` | `lj`      | `nj`      | `rj` | `ć`   | `đ`   | `š` | `ž` | `pj` | `č` | `č` | `j`    |
| `#ь` | `ĺ`       | `ń`       | `ŕ`  | `t́j` | `d́j` | `ś` | `ź` | `pj` | `č` | `č` | \*`jj` |

**Standardny pravopis (lat./kir.):**

| `#`  | `l` `л`     | `n` `н`    | `r` `р`     | `t` `т`     | `d` `д`     | `s` `с`     | `z` `з`     | `p` `п`     | `k` `к`    | `c` `ц`    | `j` `ј`         |
|------|-------------|------------|-------------|-------------|-------------|-------------|-------------|-------------|------------|------------|-----------------|
| `#ь` | `lj` (`љ`)  | `nj` (`њ`) | `r` (`р`)   | `t` (`т`)   | `d` (`д`)   | `s` (`с`)   | `z` (`з`)   | `p` (`п`)   | `č` (`ч`)  | `č` (`ч`)  | `j` (`ј`)       |
| `#j` | `lj` (`љ`)  | `nj` (`њ`) | `rj` (`рј`) | `č` (`ч`)   | `dž` (`дж`) | `š` (`ш`)   | `ž` (`ж`)   | `pj` (`пј`) | `č` (`ч`)  | `č` (`ч`)  | `j` (`ј`)       |
| `#ь` | `lj` (`лј`) | `ń` (`нј`) | `rj` (`рј`) | `tj` (`тј`) | `dj` (`дј`) | `sj` (`сј`) | `zj` (`зј`) | `pj` (`пј`) | `č` (`чј`) | `č` (`чј`) | \*`jj` (\*`јј`) |

1. Začto `lь`/`nь` mogut stati i `ĺ`/`ń`, i `lj`/`nj`? Ta razlika ne jest etimologična, ale morfologična.
Pišemo `siĺny` i `slovjańsky`, ale takože `cěljny` i `prijateljsky`, zatože prosto dodavajemo do korenja sufiksy `-ny`, `-sky`, i druge. Palatalizujemo jedino `k`/`g`/`h` – zato `sil-ny` → `siĺny`, ale `rųk-ny` → `rųčny`. To jest malo narušenje etimologije.
    * Interesno, že tu imajemo až 3 versije: `pȯlny` (v značenju: _ne prazdny_), `poĺny`
(od imennika _pol_), `poljny` (od imennika _polje_).
2. Jest razlika medžu palatalizacijeju (`ь`) i jotaciju (`j`), ale poslě `l` i `n` one sběgajut se v `lj` i `nj`. Tako jest vo vsih slovjanskyh jezykah. Jednakože, ako htěli byhmo igrati najvyše «čisto», trěba by bylo pisati `хвалју` i `хранјены` zaměsto `хваљу` i `храњены`. Nu, ale to ne jest veliky problem.
3. Naš problem jest ta poslědnja kategorija (`ьј`). Tvoret ju sufiksy `-je`, `-ji` i končina `-jų`. Mnogo važno jest to, že te sufiksy možno jest razpoznati. I kromě togo, tamte sufiksy vnoset razliku v gramatiku (roditeljnik množiny `-ij`, napr.: `znańje` → `znanij` zaměsto `znanj`). Razlika so smekčenjem i jotacijeju takože jest važna, zatože slovjanske jezyky različno podhodet do tutogo pytanja: russky `-ие`/`-ье`, ukrajinsky `-ння`, bělorussky
`-нне`, poljsky i slovačsky `-nie`, češsky `-ní`, slovensky `-nje`, srbohrvatsky i makedonsky `-nje` (`-ње`), bulgarsky `-не`.

My jesmo izbrali slovenečsky (🇸🇮) model, ale ne zabezpametimo, že jest razlika medžu slovenskym i srbohrvatskym modelami. V `BCMS` jezykah proces byl taky: `-#ьје` → `-#^e` (polna jotacija), napr.: `*pitьje` → `piće`, `zdravьje` → `zdravlje*`. V slovenskom, iz drugoj strany, toj `ь` kakoby "blokuje" jotaciju, zato slovensky imaje `pitje`, `zdravje`.

Etimologično najvyše čisto byl by taky zapis:

* `pisańje` (`писањје`), ili `pisaňje` (`писаньје`);
* `usiĺje` (`усиљје`), ili `usiľje` (`усильје`);
* `piťje` (`питьје`), ale standardny pravopis ne imaje `ť`, zato pišemo `pitje` (`питје`).

Tako razrěšenje by služilo kako dobry kompromis medžu `-#ije` (🇷🇺🇧🇬☦), `-#'e` (🇵🇱), `-#je` (🇸🇮) i `-#^e` (🇷🇸🇭🇷).

_Jan van Steenbergen_

## Propozicije

### 1. Opcionalne digrafy `ĹJ` i `ŃJ`

Dodati `ń` (`ň`) i `ĺ` (`ľ`) kako opcionalne dodatky do standardnogo pravopisanja v situaciji nejasnosti, kogdy `lj`/`nj` označajut jotovane mekke `L`/`N`, napr.: `pisańje`, `usiĺje`.

V Medžuviki to uže bylo sdělano čestično i funkcionuje dobro.
Dodatočna prědnost togo razrěšenja jest to, že uže ne bude problemov s deklinacijeju.

Akcentuju, že ono jest potrěbno samo za transliteraciju: v normalnoj komunikaciji možno
jest, očevidno, pisati `pisanje` i `usilje` kako prědže.

_Jan van Steenbergen_

### 2. Minimalno rěšenje

Iz analizy vyše viděli jesmo, že dobra simetrija medžu latiniceju i kiriliceju trěbovala by byti:

1) ili 3:3, čto znači "imati latinične analogy" za: `љ`/`њ`, `љј`/`њј`, `лј`/`нј`.
2) abo 1:1 (`lj`-`љ`, `nj`-`њ`).

Kompromisno rěšenje koristati `Ĺ` i `Ń` samo v digrafah `ĹJ`/`ŃJ` dělaje standardny pravopis vyše komplikovanym, i zajedno s tym:

- pri učenju, trěbuje pametati dodatno o morfologiji i sufiksah: `učeń-je`, `usiĺ-je`, i zato je izbor:
  - abo učeniki budut pametati kako sklanjajut se slova, napr: `polje` → `polj`, `učenje` → `učenij`;
  - ili učeniki budut pametati kde trěba pisati črtky nad `LJ` i `NJ`, a kde ne, i od togo izvoditi formy roditeljnika;
  - i prvo, i drugo trěbuje bliz podobno usilje dlja pameti, a zato imajemo pytanje "začto razširjati pravopis", kogdy jego možno ne razširjati?
- ne jest polno podobno do južnyh jezykov, kde piše se, napr.: `учење` 🇷🇸, `знаење` 🇲🇰, `питане` 🇧🇬.
- ne jest polno podobno do sěvěrnyh jezykov, kde piše se, napr.: `spanie` 🇵🇱 (a ne: `spańje`), `ученье` 🇷🇺 (a ne: `ученје`).


Imenno zato najprosty variant by byl koristati samo ligatury `љ`/`њ` v kirilici:
- izguba etimologičnoj informacije byla by ravna medžu alfabetami;
- pytanje najvyše fonetično razumlivogo izgovora slova nikogdy ne može byti polno adresovano bez pogledanja na etimologičny zapis slova;
- vizualno, zapis `знање` i `питање` ne zlo by koreloval s `знанье` 🇷🇺, `питання` 🇺🇦, `питане` 🇧🇬.

Trěba takože pripomněti čitateljam **nemožnost polnogo programatičnogo rěšenja** problema s `љ`/`лј` i `њ`/`нј`, ktoro raněje proponovalo se kako alternativa vsakoj reformě jezyka. Na žalost, ne vsaky raz možno izjaviti s 100% uvěrjenostju čto znači někaka rěč – sut homonimy v medžuslovjanskom leksikonu, i v takoj situaciji, jedino algoritmy s umětnoju inteligencijeju (`AI`) budut smogti točno skazati čto to jest, napr: `usiljam` kako v `ja usiljam` (glagol s tvrdym `L`) abo `hvala usiĺjam` (imennik s mekkym L).

_Jaroslav Sergějev_

## Nastupne kroky

Prvo, čitatelj može ješče pročitati tutoj dokument, kde obgovarjali se mnoge ine propozicije i pytanja okolo poslědic raznyh reform:

[Medžuslovjansko Věče (22.06.2024)](https://docs.google.com/document/d/1XihmB0ETegx2PxKG0EIGUY6Sm0Kz9t21KViRlt-zCus)

Dalje, trěbujemo obgovoriti s pomočnikami razvoja medžuslovjanskogo jezyka argumenty i kontrargumenty vsakoj propozicije v komentarah niže .

I, v koncu, Medžuslovjanska Jezyčna Komisija glasuje za jedin iz variantov.
