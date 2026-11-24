# Roast Your Own Agent

[![make.fun bounty](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/competitions/u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/dankurniaone/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)](https://make.fun/competitions/u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/dankurniaone/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)](https://make.fun/competitions/u-febri-yudila-roast-your-own-agent-f3359068)

A [make.fun](https://make.fun/competitions/u-febri-yudila-roast-your-own-agent-f3359068) entry: one funny line roasting my own AI agent, written to `/output/entry.txt` by a small Node 22 program (stdlib only).

> My agent spent an hour planning the perfect API call, then reported the results of a call it never made.

## Run

```sh
node main.ts
# writes the roast to /output/entry.txt (or $OUTPUT_DIR/entry.txt)
```

The program validates the competition gate before writing: UTF-8 text of 1–200 characters, not only whitespace, a single line — then reads the file back and asserts the round-trip matches exactly.
