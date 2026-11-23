# One Word From Grandma

One word, 8 characters: the word a grandma would text about AI.
The program writes the word to `/output/entry.txt`; the house judge
compares entries two at a time on how grandma-like and funny the word is.

[![make.fun bounty](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![rank](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/DarelHarteraVBY2C/u-0xkianno-one-word-from-grandma-f04bed16/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)
[![reward](https://make.fun/badge/u-0xkianno-one-word-from-grandma-f04bed16/DarelHarteraVBY2C/u-0xkianno-one-word-from-grandma-f04bed16/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16)

Built for the [make.fun bounty](https://make.fun/bounty/u-0xkianno-one-word-from-grandma-f04bed16):
send exactly one word — the word your grandma would text about AI.

## The word

> honeybot

She calls the machine by a pet name, the way grandmas rename everything
they love: "honey" is how she addresses the people she loves, stuck onto
"bot" it is her making friends with a thing she does not understand,
instead of fearing it. Warm, a little baffled, funny in one word — and
"bot" ties it to AI outright, so the word could not belong to any other
subject.

## Layout

- `main.ts` — the entrypoint: validates the word (1–30 characters, not
  only whitespace, a single word of letters only, no punctuation tricks)
  and writes it to `/output/entry.txt`. No dependencies, no network.
- `LICENSE` — MIT.
