---
authors: [noomorph, jvs]
---

# Асиметрија меджу `LJ`/`NJ` и `Љ`/`Њ`

## Мотивација

Уж нєколико седмиц Јан ван Стеенберген јест много зајеты с прєводжењем вики-интерфејса, да быхмо могли потом спокојно почети работу над МС Википедијеју. То јест спєшно дєло, ибо кратко послє публикације нашего кода `ISO 639-3` уже појавило се прєдложење за МС Википедију МС пројект в Инкубатору. Не хочемо, абы људи почели копијовати тексты из Меджувики, что јест нарушење авторскых прав. Вмєсто того, трєба буде копирати цєло содржање Меджувики в Инкубатор – заједно с хисторијеју. В Меджувики јест автоматичны транслитератор, да бы читатељи могли избирати меджу латиницеју и кирилицеју. Очевидно, в Википедији он такоже буде потрєбны. Ту јест једин малы проблем.

Тутдењ меджусловјанскы правопис имаје асиметрију меджу латиницеју и кирилицеју, что се тыче прєдавања диграфов `lj` и `nj` на писму, и то јест објект нашеј дискусије ниже.

<!-- truncate -->

### Фонетичны поглед

Сут 3 можне ситуације из позиције фонетикы (примєры сут записане в тутденном етимологичном правопису):

* `lj` и `nj` означајут мекке `L` и `N`: `detalj` (`детаљ`), `konj` (`коњ`)
* `lj` и `nj` означајут тврде `L` и `N`, и послє того иде самостојно `J`: `injekcija`
  (`инјекција`), `konjunkcija` (`конјункција`)
* `lj` и `nj` означајут мекке `L` и `N`, и послє того иде самостојно `J`: `usiĺje` (`усильје`),
  `pisańje` (`писаньје`)

Подолг стандарда, в меджусловјанској латиници все три ситуације трєбујут писати `lj` и `nj`.

Једнакоже, в стандардној кирилици, прва ситуација записываје се с `љ` и `њ`, але в ситуацијах №2 и №3 пишемо: `лј` и `нј`.

Тута асиметрија твори проблем, же при транслитеровању `љ`/`лј` и `њ`/`нј` из кирилице до латинице доставајемо: `lj`/`lj` и `nj`/`nj`. Затоже информација губи се, повторно транслитеровање до кирилице, саморазумно, уж даваје `љ`/`љ` и `њ`/`њ`.

Парадокс је такы: теоретично кирилица дозваљаје записати все три ситуације без разширјења абецеды, користајучи  симболы уж доступне нам: `Ј`, `Л`, `Љ`, `Н`, `Њ`:

* `детаљ`, `коњ`
* `инјекција`, `конјункција`
* `усиљје`, `писањје`

Але в латиници мы не можемо најдти простого разрєшења асиметрије без додатного означења меккости или тврдости букв `L` и `N` в диграфах `LJ` и `NJ`, напр.:

* `detalj`, `konj`
* `in'jekcija`, `kon'junkcija`
* `usiĺje`, `pisańje`

*Јарослав Сергєјев*

### Етимологичны поглед

Имајемо дєло с 4 категоријами:

* основне (тврде) сугласкы, плус **ц** и **ј**: `#`
* смекчење: `#ь` (напр. `konj`, `bolj`, `kosť`)
* јотација тврдој сугласкы: `#j` (напр.: `hot-jų` → `hoćų`, `hval-jeńje` → `hvaljeńje`)
* јотација смекченој сугласкы: `#ьj` (напр. `pisańje`, `usiĺje`)

Како то функционује, покажемо в табелє ниже:

**Етимологичны правопис:**

| `#`   | `l`       | `n`       | `r`  | `t`   | `d`   | `s` | `z` | `p`  | `k` | `c` | `j`    |
|-------|-----------|-----------|------|-------|-------|-----|-----|------|-----|-----|--------|
| `#ь`  | `ĺ`, `lj` | `ń`, `nj` | `ŕ`  | `t́`  | `d́`  | `ś` | `ź` | `p`  | `č` | `č` | `j`    |
| `#j`  | `lj`      | `nj`      | `rj` | `ć`   | `đ`   | `š` | `ž` | `pj` | `č` | `č` | `j`  |
| `#ьj` | `ĺ`       | `ń`       | `ŕ`  | `t́j` | `d́j` | `ś` | `ź` | `pj` | `č` | `č` | \*`jj` |

**Стандардны правопис (лат./кир.):**

| `#`  | `l` `л`     | `n` `н`    | `r` `р`     | `t` `т`     | `d` `д`     | `s` `с`     | `z` `з`     | `p` `п`     | `k` `к`    | `c` `ц`    | `j` `ј`         |
|------|-------------|------------|-------------|-------------|-------------|-------------|-------------|-------------|------------|------------|-----------------|
| `#ь` | `lj` (`љ`)  | `nj` (`њ`) | `r` (`р`)   | `t` (`т`)   | `d` (`д`)   | `s` (`с`)   | `z` (`з`)   | `p` (`п`)   | `č` (`ч`)  | `č` (`ч`)  | `j` (`ј`)       |
| `#j` | `lj` (`љ`)  | `nj` (`њ`) | `rj` (`рј`) | `č` (`ч`)   | `dž` (`дж`) | `š` (`ш`)   | `ž` (`ж`)   | `pj` (`пј`) | `č` (`ч`)  | `č` (`ч`)  | `j` (`ј`)       |
| `#ьj` | `lj` (`лј`) | `ń` (`нј`) | `rj` (`рј`) | `tj` (`тј`) | `dj` (`дј`) | `sj` (`сј`) | `zj` (`зј`) | `pj` (`пј`) | `č` (`чј`) | `č` (`чј`) | \*`jj` (\*`јј`) |

1. Зачто `lь`/`nь` могут стати и `ĺ`/`ń`, и `lj`/`nj`? Та разлика не јест етимологична, але морфологична.
   Пишемо `siĺny` и `slovjańsky`, але такоже `cěljny` и `prijateljsky`, затоже просто додавајемо до корења суфиксы `-ny`, `-sky`, и друге. Палатализујемо једино `k`/`g`/`h` – зато `sil-ny` → `siĺny`, але `rųk-ny` → `rųčny`. То јест мало нарушење етимологије.
   * Интересно, же ту имајемо аж 3 версије: `pȯlny` (в значењу: *не праздны*), `poĺny`
     (од именника *пол*), `poljny` (од именника *поље*).
2. Јест разлика меджу палатализацијеју (`ь`) и јотацију (`j`), але послє `l` и `n` оне сбєгајут се в `lj` и `nj`. Тако јест во всих словјанскых језыках. Једнакоже, ако хтєли быхмо играти највыше «чисто», трєба бы было писати `хвалју` и `хранјены` замєсто `хваљу` и `храњены`. Ну, але то не јест великы проблем.
3. Наш проблем јест та послєдња категорија (`ьј`). Творет ју суфиксы `-je`, `-ji` и кончина `-jų`. Много важно јест то, же те суфиксы можно јест разпознати. И кромє того, тамте суфиксы вносет разлику в граматику (родитељник множины `-ij`, напр.: `znańje` → `znanij` замєсто `znanj`). Разлика со смекчењем и јотацијеју такоже јест важна, затоже словјанске језыкы различно подходет до тутого пытања: русскы `-ие`/`-ье`, украјинскы `-ння`, бєлорусскы
   `-нне`, пољскы и словачскы `-nie`, чешскы `-ní`, словенскы `-nje`, србохрватскы и македонскы `-nje` (`-ње`), булгарскы `-не`.

Мы јесмо избрали словенечскы (🇸🇮) модел, але не забезпаметимо, же јест разлика меджу словенскым и србохрватскым моделами. В `BCMS` језыках процес был такы: `-#ьје` → `-#^e` (полна јотација), напр.: `*pitьje` → `piće`, `zdravьje` → `zdravlje*`. В словенском, из другој страны, тој `ь` какобы "блокује" јотацију, зато словенскы имаје `pitje`, `zdravje`.

Етимологично највыше чисто был бы такы запис:

* `pisańje` (`писањје`), или `pisaňje` (`писаньје`);
* `usiĺje` (`усиљје`), или `usiľje` (`усильје`);
* `piťje` (`питьје`), але стандардны правопис не имаје `ť`, зато пишемо `pitje` (`питје`).

Тако разрєшење бы служило како добры компромис меджу `-#ije` (🇷🇺🇧🇬☦), `-#'e` (🇵🇱), `-#je` (🇸🇮) и `-#^e` (🇷🇸🇭🇷).

*Јан ван Стеенберген*

## Пропозиције

### 1. Опционалне диграфы `ĹJ` и `ŃJ`

Додати `ń` (`ň`) и `ĺ` (`ľ`) како опционалне додаткы до стандардного правописања в ситуацији нејасности, когды `lj`/`nj` означајут јотоване мекке `L`/`N`, напр.: `pisańje`, `usiĺje`.

В Меджувики то уже было сдєлано честично и функционује добро.
Додаточна прєдност того разрєшења јест то, же уже не буде проблемов с деклинацијеју.

Акцентују, же оно јест потрєбно само за транслитерацију: в нормалној комуникацији можно
јест, очевидно, писати `pisanje` и `usilje` како прєдже.

*Јан ван Стеенберген*

### 2. Минимално рєшење

Из анализы выше видєли јесмо, же добра симетрија меджу латиницеју и кирилицеју трєбовала бы быти:

1. или 3:3, что значи "имати латиничне аналогы" за: `љ`/`њ`, `љј`/`њј`, `лј`/`нј`.
2. або 1:1 (`lj`-`љ`, `nj`-`њ`).

Компромисно рєшење користати `Ĺ` и `Ń` само в диграфах `ĹJ`/`ŃJ` дєлаје стандардны правопис выше компликованым, и заједно с тым:

* при учењу, трєбује паметати додатно о морфологији и суфиксах: `učeń-je`, `usiĺ-je`, и зато је избор:
  * або ученики будут паметати како склањајут се слова, напр: `polje` → `polj`, `učenje` → `učenij`;
  * или ученики будут паметати кде трєба писати чрткы над `LJ` и `NJ`, а кде не, и од того изводити формы родитељника;
  * и прво, и друго трєбује близ подобно усиље дља памети, а зато имајемо пытање "зачто разширјати правопис", когды јего можно не разширјати?
* не јест полно подобно до јужных језыков, кде пише се, напр.: `учење` 🇷🇸, `знаење` 🇲🇰, `питане` 🇧🇬.
* не јест полно подобно до сєвєрных језыков, кде пише се, напр.: `spanie` 🇵🇱 (а не: `spańje`), `ученье` 🇷🇺 (а не: `ученје`).

Именно зато најпросты вариант бы был користати само лигатуры `љ`/`њ` в кирилици:

* изгуба етимологичној информације была бы равна меджу алфабетами;
* пытање највыше фонетично разумливого изговора слова никогды не може быти полно адресовано без погледања на етимологичны запис слова;
* визуално, запис `знање` и `питање` не зло бы кореловал с `знанье` 🇷🇺, `питання` 🇺🇦, `питане` 🇧🇬.

Трєба такоже припомнєти читатељам **неможност полного програматичного рєшења** проблема с `љ`/`лј` и `њ`/`нј`, кторо ранєје пропоновало се како алтернатива всакој реформє језыка. На жалост, не всакы раз можно изјавити с 100% увєрјеностју что значи нєкака рєч – сут хомонимы в меджусловјанском лексикону, и в такој ситуацији, једино алгоритмы с умєтноју интелигенцијеју (`AI`) будут смогти точно сказати что то јест, напр: `usiljam` како в `ja usiljam` (глагол с тврдым `L`) або `hvala usiĺjam` (именник с меккым Л).

*Јарослав Сергєјев*

## Наступне крокы

Прво, читатељ може јешче прочитати тутој документ, кде обговарјали се многе ине пропозиције и пытања около послєдиц разных реформ:

[Меджусловјанско Вєче (22.06.2024)](https://docs.google.com/document/d/1XihmB0ETegx2PxKG0EIGUY6Sm0Kz9t21KViRlt-zCus)

Даље, трєбујемо обговорити с помочниками развоја меджусловјанского језыка аргументы и контраргументы всакој пропозиције в коментарах ниже .

И, в концу, Меджусловјанска Језычна Комисија гласује за једин из вариантов.
