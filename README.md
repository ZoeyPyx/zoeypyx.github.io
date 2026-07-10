# yuxuanpang.github.io

Personal site — built with plain HTML/CSS/JS, no build step, no dependencies to install.

## Structure

```
index.html       — the whole single-page site
css/style.css    — all styling (design tokens at the top)
js/main.js       — theme toggle, active-nav highlighting, footer year
cv/Yuxuan_Pang_CV.pdf — downloadable CV (generated from the resume you uploaded)
```

## Things still marked as placeholders

Search `index.html` for these and swap in real content:

- **`#github-link`** — the GitHub nav link currently points to `#`. Update `href` to your GitHub profile URL (or LinkedIn, if you'd rather link that).
- **Latent-space shape morphing card** (`#research`) — has a dashed "media-slot" box. Replace with a short write-up / GIF of the interpolation sweep, or delete the box if you don't want to include this project publicly yet.
- **Red Panda's Journey card** (`#projects`) — dashed box for a trailer, screenshots, or itch.io link.
- **Procedural 3D Animation card** (`#projects`) — dashed box for your Python/Blender animation. Add a rendered video/GIF or a link to it, plus 1-2 sentences on the technique.
- **Illustration gallery** (`#illustration`) — six dashed tiles labeled "Add image." Replace each with an `<img>` tag pointing at your artwork.

## Adding images

Drop image files in `assets/` (already created, empty) and reference them like:

```html
<img src="assets/your-file.jpg" alt="Description of the piece" />
```

For the illustration gallery, replace a tile like this:

```html
<div class="gallery-tile">Add image</div>
```

with:

```html
<div class="gallery-tile">
  <img
    src="assets/illustration-01.jpg"
    alt="Description"
    style="width:100%;height:100%;object-fit:cover;border-radius:3px;"
  />
</div>
```

## Local preview

Open `index.html` directly in a browser, or use VS Code's "Live Server" extension for auto-reload while editing.

## Deploy

Push this whole folder to your `zoeypyx.github.io` repo and enable GitHub Pages (Settings → Pages → Deploy from branch → `main` → `/root`). Live in ~1 minute at `https://zoeypyx.github.io`.
