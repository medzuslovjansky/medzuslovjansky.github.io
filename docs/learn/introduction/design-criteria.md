---
sidebar_position: 3
license: republish
author: Jan van Steenbergen
origin: http://steen.free.fr/interslavic/design-criteria.html
---

# Design criteria

Interslavic is based on the common heritage of all Slavic nations, and differences are bridged by building compromises. All Slavic languages are treated equally, although it cannot be avoided that a Slavic interlanguage is closer to „middle-of-the-road“ languages like Slovak or Rusyn than to peripheral languages like Sorbian or Macedonian. Interslavic is explicitly not meant to be „more Slavic than the Slavs“ by purifying it from foreign influences, even though a language based on the commonalities of the Slavic languages will automatically eliminate many local (non-Slavic) influences anyway. There is, however, no reason to exclude international vocabulary, provided that it can be recognised by all, or at least most, Slavic speakers.

The primary purpose of Interslavic, maximum intelligibility for all Slavs, is accomplished by systematically providing the largest common denominator of the Slavic languages, both in terms of grammar, orthography, syntax, and vocabulary. When a common solution cannot be found, we build a compromise. If even a compromise is impossible, we have to make a choice or simply suggest both solutions.

The secondary purpose is that it can be learned and used easily, primarily by Slavs, but also by non-Slavs. Obviously, a Slavic language with a grammar that consists of ten simple rules is impossible. Yet, we try to keep the grammar as simple and regular as possible, without sacrificing the Slavic character of the language.

This section describes in detail how these two purposes are achieved.

## Phonology and writing \{#phonology-and-writing}

The basic design principles regarding phonology and writing are the following:

- As a rule, both should be as familiar as possible for speakers of Slavic languages. Therefore, we work with a limited number of sounds, and we avoid incorporating non-Slavic elements.
- Anyone should be able to write Interslavic on his own keyboard, without any special gadgets and in such way that it feels natural.
- Since the division between Latin and Cyrillic alphabets runs through the middle of Slavic territory, both are treated equally.
- We are not prescriptivist regarding pronunciation. We merely give a basic indication, and for the rest, anyone should pronounce Interslavic in a way that feels comfortable and natural to them. No pronunciation is „more correct“ than another. Likewise, word stress is free.

Ideally, it must be possible to write Interslavic on any Slavic keyboard. However, there is one problem: these keyboards were designed to match standard national orthographies, and each of those orthographies has been tailored to fit the needs of a particular language. About half of the Slavic languages use the Latin alphabet, the other half are written in Cyrillic, and both alphabets exist in two mutually exclusive versions: Czech, Slovak, Slovene and Croatian use a Latin alphabet with `v`, `š`, `ž` etc., Polish with `w`, `sz`, `ż`; Russian, Ukrainian, Belarusian and Bulgarian use a Cyrillic alphabet with `й`, `ь`, `ю`, Serbian and Macedonian with `ј`, `љ` and `џ`. It is not up to us to decide that one way is „better“ or „more Slavic“ than the other. Besides, any Slav should feel comfortable writing Interslavic, so we must live with the fact that it can be written in various ways.

Since :isv[końe], :isv[koňe], :isv[konje], :isv[konie] and _`kone`_ are just different, naturally occurring ways of writing the very same word, there is not much point in debating which version should be made „official“, as any such choice would automatically render other versions „inofficial“ and therefore „wrong“ or at least „non-standard“. Therefore, we follow an entirely different approach: instead of choosing any kind of official orthography, we work with a **prototype orthography**. Assuming that the various solutions used in national orthographies all refer to one **prototype**, we also consider this prototype to be the best way of representing Interslavic. Since we are dealing with two entirely different alphabets (Latin and Cyrillic), we cannot avoid having one prototype orthography for each of them.

Ideally, both prototypes should have the following characteristics:

- they must be intuitively understandable to anyone who can read the alphabet in question
- they must be logical, consistent, unambiguous and etymologically correct
- they must give a decent approximation of the right pronunciation
- if possible, one phoneme (sound) = one character
- they should be compatible (simple transliteration, preferably one a 1:1 basis)
- they should not include unnatural elements
- they should not be ugly or otherwise offensive (like for instance `йа` or `łi`), but neither should they be restricted to the specifics of any national language
- they are displayed correctly on the average computer screen, therefore characters from unusual character sets, combining diacritics and the like should be avoided.

Because none of the existing Slavic orthographies can fulfill all these requirements, we distinguish between a basic alphabet consisting of phonemes that can be found in every Slavic language, and a number of optional extensions that can be used as a means to be more clear about pronunciation, etymology etc.

## Vocabulary \{#vocabulary}

### International versus Ѕlavic vocabulary \{#international-versus-ѕlavic-vocabulary}

Ideally, every word has to look familiar to every speaker of a Slavic language. Even if a particular form of a word does not occur in someone's own language, it should at least evoke a connotation that gives them a hint in the right direction. Obviously, this is not always possible, and therefore, several mechanisms are needed to decide how vocabulary is chosen. The first and most important step is gathering a set of word roots that are recognisable to all or most Slavs. Afterwards, these roots can serve as a basis for expanding vocabulary by building compounds.

There are two types of vocabulary that play a key role in enhancing mutual intercomprehension between two different languages:

- international vocabulary, words that are common in many, even unrelated languages. Most of it was borrowed directly or indirectly from Latin and Greek (_`filozofija`, `universitet`, `material`, `motor`_), sometimes it comes from other languages (_`bjuro`, `fajl`, `jaguar`, `čaj`, `šokolad`_), in rare cases even from Slavic itself (_`vampir`, `vodka`_)
- common inherited vocabulary, in other words, vocabulary that both languages inherited from a common ancestor, in this particular case Proto-Slavic

International words constitute an integral part of every Slavic language. Their advantage is that they tend to be practically identical in different languages, both in form and meaning, and therefore provide an excellent solution for Interslavic, especially for the more educated. In the case of inherited vocabulary the situation is somewhat more complicated, because every language has gone through its own characteristic development, and as a result, a word in one language may not immediately be recognisable for speakers of the other, even if it is the very same word. Compare for example Polish :isv[węgiel] and Slovak :isv[uhlie] „coal“. Besides, in several cases their meanings have drifted so far away from each other (e.g. _`duma`_, which means „thought“ in Russian and „pride“ in Polish) that they can be considered _false friends_, i.e. words that can easily be misunderstood even in the right context.

The scope of international vocabulary is limited and it won't be helpful for many everyday concepts. Besides, there are people who simply _dislike_ using it in Slavic. For that reason we attempt to provide broadly understandable Slavic alternatives as well. This is not always possible, though. For example, some Slavic nations use the Latin names of months, while others use Slavic names. The latter are much less uniform: _listopad_ means „November“ in Polish and „October“ in Croatian (a typical example of a false friend), while only a Belarussian can tell which month is meant by _`kastryčnik`_. Therefore, Slavic equivalents of international words should be treated with caution.

International vocabulary is adopted only if used in most Slavic languages. Interslavic applies certain fixed mechanisms for borrowing it, which can be found in [a special section][1].

When it comes to common inherited (Slavic) vocabulary, we need to do three things: select words and word roots, establish the right form for them, and assign a basic meaning to them.

### Which roots to use? \{#which-roots-to-use}

When a new word is needed, we start with making an inventory of words that the various Slavic languages use for it. Depending on the result, this is what we do:

- When a word root exists in all Slavic languages in the same meaning, it's easy: we gratefully adopt it.
- When only one or two languages diverge, we do the same.
- When two or more groups can be distinguished, each based on a different Slavic root, we act as follows:
  1. for each of those roots, we look for cognates in the remaining languages, along with their meanings,
  2. subsequently, we do the same for those roots and meanings, thus creating „semantic families“,
  3. finally, we pick those words that occur in all or most languages, and assign to them the most „average“ meanings.
- If that doesn't work either, we have several options:
  1. we pick the word that occurs in most languages
  2. we analyze which words are more intuitively understandable than others, even if they are used only in one language
  3. we create synonyms
  4. we give the bigger and better-known languages predominance of the smaller ones
  5. we look for an „international“ equivalent
  6. we „engineer“ something.

In applying this process, all three subfamilies (East, West and South Slavic) are treated on an equal base. We carefully avoid favouring one language over another, which is not always easy, because one language (Russian) is vastly bigger than all the others in terms of speakers, and several smaller languages (like Serbian, Bosnian and Croat) are so similar to each other that they might easily be treated as dialects of one language. To achieve fair treatment of languages in weighing their input, we use a system of six subgroups, and each of these subgroups is given one „vote“:

- Russian
- Ukrainian and Belarusian
- Polish
- Czech and Slovak
- Slovene and Serbian/Croatian/Bosnian
- Bulgarian and Macedonian

If two languages within one group don't agree on a word, ½ vote is given to one and ½ vote to the other. If two candidate words have the same number of votes, population decides. Practically, this means that Russian always wins, which is reasonable given the fact that some 70% of the Slavs know that language.

For practical reasons, languages with less than one million speakers, like Sorbian, Kashubian and Rusyn, do not participate in the voting process. This does not mean they are not taken into consideration at all, though.

The [voting machine][2] is a tool that applies these rules. It should be noted that these rules are meant to be a general trend; when another solution is obviously better, common sense should always prevail.

### False friends \{#false-friends}

The individual development of Slavic words in various languages, including sometimes a serious drift in meaning, has given rise to the existence of many similar-looking words with entirely different meanings in different languages. These words are known as „false friends“, and a nice – albeit incomplete – [overview can be found in English Wikibooks][3]. Although they can not always be avoided, these words should be treated carefully.

A slight difference in meaning between languages should not necessarily be a problem (e.g. :isv[ljubiti] means „to love“ in most Slavic languages, but „to like“ in Polish). Really vast differences in meaning rarely cause problems either, especially when they belong to different word categories (e.g. _`pet` \~ `peť` \~ `peć` \~ `piec`_, carrying meanings like „five“, „oven“, „cigarette butt“ and „to sing“). In both cases the odds of misunderstandings are small. False friends are problematic only when a word, in spite of a serious difference in meaning, can still be used in the same or a similar context and therefore is likely to be understood differently by Slavs of different nationalities. The aforementioned word _`listopad`_, meaning „November“ in Polish/Czech and „October“ in Croatian, is an example. Obviously, such words should be avoided in Interslavic texts.

### Neologisms \{#neologisms}

In the context of Interslavic, neologisms are words that do not exist as such in any of the living Slavic languages. Examples of such words are portmanteau words (for example :isv[katka] „duck“, from Ru. :isv[utka], Pol. :isv[kaczka], South-Slavic :isv[patka]), calques from non-Slavic languages (for example :isv[kolokrěslo] „wheelchair“), combinations of Interslavic word roots with Interslavic affixes that are non-existent in Slavic (for example _`gradnik`_ „city-dweller, citizen“), and words with a more descriptive character in cases when it is impossible to find a broadly understandable Slavic word.

Opinions vary about the degree in which artificially created words are acceptable in Interslavic; some people love them, others loathe them. In the dictionary we tend to avoid neologisms, unless none of the living Slavic languages provides a word that is understandable to a broader audience and won't be misunderstood by others. An example is :isv[časina] „hour“ (Old Church Slavonic provides two words: _`čas`_ and :isv[godina], but the former means „time“ in West Slavic, the latter means „year“ in South Slavic, while the Serbo-Croatian word _`sat`_ is a Turkish word that is not understandable at all to other Slavs).

### How to establish the right form for a root? \{#how-to-establish-the-right-form-for-a-root}

Once we know which word we will use, the next step is establishing what exactly it should look like. First and foremost, there must be internal consistency: whenever a certain root or morpheme occurs in a compound, it should have the same form, no matter which particular language this compound is taken from. To prevent Interslavic from becoming a hodgepodge of words picked from various languages, words are never borrowed directly from any Slavic language.

Instead, we go back to the hypothetical form in Proto-Slavic, which often can be found in its close relative Old Church Slavonic, and subsequently subject it to a [model for simple derivation][4]. This does not only guarantee coherence, it also enhances intelligibility and make learning easier, because the phonological development of the modern Slavic languages from Proto-Slavic tend to be extremely regular: once a person knows how a given sound in his own language is represented in Interslavic – something he will find out very quickly by reading a few texts – he will not only be able to recognise words easily, but also to predict them without checking a dictionary.

For example, the Common Slavic sequences `tj/dj` become `č/ž` in East Slavic, `c/dz` in Polish, `c/z` in Czecho-Slovak, `č/j` in Slovene, `ć/đ` in Serbo-Croat, `ḱ/ǵ` in Macedonian and `št/žd` in Bulgarian. The best compromise here is probably `č/dž` (e.g. :isv[svěča] „candle“ and _`medžu`_ „between“), which has the additional advantage that the latter is the voiced equivalent of the former, and thus creates symmetry.

For an illustration of how all this works, you can see [here][5] how the personal pronouns in Interslavic are based on those in the natural Slavic languages.

## Grammar \{#grammar}

What goes for vocabulary goes for grammar as well. Grammatical elements that the Slavic languages have in common are always the starting point. However, the end result is very much dependent on the purpose and circumstances Interslavic is used for. Optimising intelligibility automatically makes it harder for the speaker or writer, while a more simplified grammar makes the language less natural and therefore harder to understand. To cope with this, we distinguish two different grammar levels. Which one is preferable for what purpose depends both on the speaker, the listener, the medium and the situation. Ideally, level 1 should be a subset of level 2, so that a learner can gradually move ahead without his previously acquired knowledge being invalidated.

### Simple level \{#simple-level}

The simplest form of Interslavic, `Slovianto`, is not really a language, but rather a method that can be used by non-Slavs as a method for learning and/or using Interslavic. It consists of three different levels, each of which brings the learner closer to „real“ Interslavic.

The first level is a minimalistic, primitive grammar, characterised by the absence of anything that is not really needed for simple communication. Grammatical gender does not play a role at this level, noun cases are absent, and verbal conjugation remains limited to a bare minimum. The few forms that remain (for example, plurals) should be recognisable for Slavs without any prior study, and memorising them should be a matter of minutes rather than of hours. This level is particularly useful for non-Slavs who are not interested in learning an entire language, but still want to be able to express themselves on a basic level in contacts with Slavs.

The second level introduces grammatical gender and provides a simple model for conjugating verbs. The third level introduces noun cases.

### Advanced level \{#advanced-level}

„Real“ Interslavic is primarily meant for Slavs, as well as non-Slavs who want to be able to communicate on a more serious level. This level is based on the commonalities of the Slavic languages. Thus, it has grammatical gender (present in all Slavic languages), seven cases (present in all Slavic languages except Bulgarian and Macedonian), verbal aspect and full conjugation of verbs. However, the Slavic languages are notorious for their complex grammars, and to avoid endless tables with nominal and verbal paradigms, a great deal of simplification is still required. To find a good balance between naturalism and simplicity, we try to approach the naturally existing forms as closely as possible by using the easiest possible means. Irregularity is avoided, unless easy recognisability is seriously jeopardised. Artificiality is avoided as well.

Most important is that every grammatical ending is instantly recognisable, even if the inflected form of a word looks different in someone's own language. For example, most Slavic languages can have various endings for the genitive singular of a masculine noun, but there is one ending they all have in common: `-a`, which therefore is the solution for all occurrences of this form. In the case of verbs, the numerous verbal classes that exist in Slavic have been reduced to a simple system of two stems, the infinitive stem and the present tense stem. The latter is almost always the logical result of the first, and only in a few cases they have to be learned separately. Thanks to this approach, a lot of simplification is achieved without sacrificing the naturalistic character of the language.

This level is suitable for contacts and publications, but also as a means to gain insight into the nature of Slavic.

[1]: ../vocabulary/derivation.md

[2]: http://steen.free.fr/interslavic/voting_machine.html

[3]: http://en.wikibooks.org/wiki/False_Friends_of_the_Slavist

[4]: ../vocabulary/derivation.md#proto-slavic

[5]: http://steen.free.fr/interslavic/slavic_pronouns.html
