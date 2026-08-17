# Asura Falls website

This is a static website for GitHub Pages. No build step is required.

## Editing website content

Frequently changed content is kept in two JSON files:

- [Edit upcoming shows](data/shows.json)
- [Edit press articles](data/press.json)

You can edit these files directly on GitHub by opening the file, clicking the
pencil icon, making the changes, and committing them. GitHub Pages will publish
the update after the commit has been processed.

### Add or edit a show

1. Open [data/shows.json](data/shows.json).
2. To edit a show, change the values in its existing `{ ... }` block.
3. To add a show, copy one complete block and paste it before the closing `]`.
4. Add a comma between entries. The final entry must not have a comma after it.
5. Providing both `en` and `de` text is recommended, but either language may
   be omitted. The website automatically falls back to the available text.
6. Commit the change and check the published website.

Example:

```json
{
  "image": "images/example-show.jpg",
  "title": {
    "en": "12 Dec 2026 — Frankfurt",
    "de": "12.12.2026 — Frankfurt"
  },
  "location": {
    "en": "Example Club",
    "de": "Example Club"
  },
  "with": {
    "en": "Example Band, Another Band",
    "de": "Example Band, Another Band"
  },
  "ticketLabel": {
    "en": "Get tickets",
    "de": "Tickets kaufen"
  },
  "url": "https://example.com/tickets"
}
```

Show fields:

- `image`: Image path from the project root.
- `title`: Date and city shown as the heading.
- `description`: Optional general text, useful for announcements.
- `location`: Optional venue or location.
- `with`: Optional list of other performing bands.
- `ticketLabel`: Optional text displayed on the ticket button or label.
- `url`: Ticket-page address. Use an empty string (`""`) when there is no link;
  the ticket label will then be shown without creating a broken link.

To remove a past show, delete its complete `{ ... }` block and make sure the
remaining entries are still separated by commas.

### Add or edit a press article

1. Open [data/press.json](data/press.json).
2. Edit an existing article or copy a complete `{ ... }` block to add one.
3. Add English and German versions when possible. If only one translation is
   available, the website displays it in both language modes.
4. Add a comma between entries, but not after the final entry.
5. Commit the change and check the published website.

Example:

```json
{
  "image": "images/example-press-photo.jpg",
  "imageAlt": {
    "en": "Asura Falls live in Frankfurt",
    "de": "Asura Falls live in Frankfurt"
  },
  "title": {
    "en": "Review of the Frankfurt show",
    "de": "Review der Frankfurt-Show"
  },
  "description": {
    "en": "A short English summary of the article.",
    "de": "Eine kurze deutsche Zusammenfassung des Artikels."
  },
  "url": "https://example.com/article"
}
```

### Add an image

1. Upload the new image to the [images folder](images/).
2. Use a short file name without spaces, for example `frankfurt-2026.jpg`.
3. Reference it in JSON as `images/frankfurt-2026.jpg`.
4. File names are case-sensitive after publishing: `Poster.jpg` and
   `poster.jpg` are different files on GitHub Pages.

### Avoid JSON errors

- Use double quotes (`"`) around field names and text.
- Do not add comments inside JSON files.
- Separate entries with commas.
- Do not leave a comma after the final entry.
- Preserve the surrounding `{ }` and `[ ]` characters.
- Both `en` and `de` are recommended, but a single available translation is
  used as a fallback and will not break the section.
- Removing one translation line may leave a comma immediately before `}`. The
  website tolerates this common editing mistake and still loads the content.

If the Shows or Press section becomes empty after an edit, the most likely cause
is invalid JSON. Recheck the last changed entry, especially its quotes and
commas.

## Pages and language

Folder-based pages provide extension-free URLs such as `/history/`, `/gallery/`, and `/imprint/`, which work directly on GitHub Pages. The site chooses German when the visitor's browser language starts with `de`; otherwise it uses English. A selection made with the EN/DE switch is saved in the browser and takes precedence on later visits.

The footer year is generated from the visitor's current date.
