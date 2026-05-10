# Content Folder — Editing Guide

Edit the `.md` files in the `handbook/` and `fiction/` subfolders to customise the app's articles and stories. This file explains every supported Markdown feature with working examples.

---

## Folder Structure

```
content/
├── README.md              ← this file
├── handbook/              ← how-to articles (reference guides)
│   ├── aftercare.md
│   ├── clitoral-stimulation.md
│   └── … (one file per topic)
└── fiction/               ← erotic short stories
    ├── the-dance.md
    ├── becs_1.md
    └── … (one file per story)
```

Each file is linked from `js/data/library.js` via the `contentFile` property.

---

## Sections

Every `##` heading starts a **new swipeable panel** in the app. Use them to divide your content into logical chapters.

```
## Introduction

Your opening paragraph goes here.

## Part Two — The Details

More content here, in a second panel.
```

> **Note:** `#` (h1) and `##` (h2) are reserved for section splitting. Use `###` and `####` for sub-headings *within* a section.

---

## Basic Formatting

### Paragraphs

Leave a blank line between paragraphs. A single line break within a block is treated as a soft wrap (shown as `<br>`).

```
This is the first paragraph.

This is the second paragraph, separated by a blank line.

This line and
this line are in the same paragraph, joined by a line break.
```

### Bold

Wrap text in `**double asterisks**` or `__double underscores__`.

```
This is **bold text** and this is __also bold__.
```

Renders as: This is **bold text** and this is **also bold**.

### Italic

Wrap text in `*single asterisk*` or `_single underscore_`.

```
This is *italic text* and this is _also italic_.
```

Renders as: This is *italic text* and this is *also italic*.

### Bold and Italic Together

Use `***triple asterisks***` or `___triple underscores___`.

```
This is ***bold and italic*** at the same time.
```

### Strikethrough

Wrap text in `~~double tildes~~`.

```
This is ~~crossed out~~ text.
```

### Highlight

Wrap text in `==double equals==` to highlight it in amber.

```
This is ==highlighted== text.
```

### Superscript and Subscript

Use `^carets^` for superscript and `~tildes~` for subscript.

```
Water is H~2~O. The answer is 10^6^.
```

---

## Headings Within Sections

Use `###` and `####` for sub-headings inside a section panel.

```
## The Main Section

Some introductory text.

### A Sub-heading

Details under this sub-heading.

#### An Even Smaller Heading

Fine-grained detail here.
```

---

## Lists

### Unordered List

Start each item with `-`, `*`, or `+` followed by a space.

```
- First item
- Second item
- Third item
  - Nested item (indent with 2 spaces)
  - Another nested item
```

### Ordered List

Start each item with a number followed by a full stop and space.

```
1. First step
2. Second step
3. Third step
   - A sub-point under step three
```

---

## Blockquote

Start a line with `>` to create a styled pull-quote or callout box.

```
> This is a blockquote. Use it for tips, warnings, or
> a highlighted quote from the text.
```

Blockquotes are styled with a purple left border and italic text.

---

## Horizontal Rule

Use three or more dashes `---`, asterisks `***`, or underscores `___` on their own line to insert a dividing line.

```
Some text above.

---

Some text below.
```

---

## Inline Code

Wrap text in single backticks for inline code or technical terms.

```
Use the `[image]` tag to embed a photo.
```

---

## Code Block

Wrap a block of text in triple backticks. Optionally name a language after the opening fence.

    ```
    Plain code block.
    ```

    ```javascript
    const greeting = "Hello, world!";
    console.log(greeting);
    ```

---

## Tables

Create tables using pipes `|` and hyphens `-`. The second row is the separator and must use at least three dashes per column.

```
| Technique      | Difficulty | Description                     |
| -------------- | ---------- | ------------------------------- |
| Featherlight   | Easy       | Barely-there touch along skin   |
| Figure Eight   | Medium     | Circular motion with the thumb  |
| Edge & Hold    | Advanced   | Bring to the brink, then pause  |
```

Tables scroll horizontally on narrow screens.

---

## Links

```
[Link text](https://example.com)
```

Links open in a new tab.

---

## Images

Use the custom `[image]` tag. This keeps images compatible with the app's lazy-loading and rounded styling.

```
[image src="media/img/hb_a.jpg" alt="Aftercare" caption="Optional caption text"]
```

| Attribute | Required | Description                              |
| --------- | -------- | ---------------------------------------- |
| `src`     | Yes      | Path to the image, relative to app root  |
| `alt`     | Yes      | Accessibility description                |
| `caption` | No       | Small grey text shown below the image    |

Images that ship with the app live in `media/img/`.

---

## Italic Block (Legacy Tag)

For a full paragraph in italic — useful for fiction narrative passages — use the original custom tag:

```
[italic]
She turned to face him, the room suddenly very quiet.
Neither of them spoke.
[/italic]
```

This renders the entire block in purple-tinted italic with a left border.

---

## Full Example File

```markdown
## Introduction

Welcome to this **guide**. It covers everything from *basics* to
==advanced techniques==. Read it at your own pace.

[image src="media/img/hb_a.jpg" alt="Example image" caption="An optional caption"]

## Techniques

### Featherlight Touch

Use the *tip of one finger* to trace lightly across skin. Keep
pressure below what you think is necessary — the anticipation
is the point.

> **Tip:** Ask your partner to rate pressure from 1–10. Most
> people prefer a 2 or 3 to start.

### Progression Steps

1. Begin at the shoulder
2. Move slowly inward
   - Pause at any point your partner responds to
   - Never rush past a reaction
3. Ask for feedback throughout

---

## Quick Reference

| Stage   | Goal              | Key word   |
| ------- | ----------------- | ---------- |
| Opening | Establish contact | Presence   |
| Build   | Increase tension  | Patience   |
| Peak    | Release           | Surrender  |

## Closing Note

[italic]
The most important thing is not technique, but attention.
Be present. Watch. Listen. Adjust.
[/italic]
```

---

## Tips for Fiction Files

- Use `##` headings as scene or chapter titles (e.g. `## Part One — The Train`)
- Use `[italic]` blocks for interior monologue or atmosphere passages
- Use `---` to mark scene breaks within a panel
- Use `>` blockquotes for letters, messages, or diary entries within the story
- Keep paragraphs short — mobile screens are narrow

---

*Last updated: May 2026*
