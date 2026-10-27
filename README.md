# HappyHacker Portfolio

A static portfolio for HappyHacker video editing and motion graphics. It runs directly in a browser; no build step, server, or database is required.

## Website

Once GitHub Pages finishes publishing, the site is available at:

<https://vishvjeetjalvansi70.github.io/happyhacker-portfolio/>

## Files

- `index.html` — page structure and metadata
- `styles.css` — responsive styling
- `content.js` — brand details, services, project concepts, prices, and contact links
- `script.js` — page rendering and interactions
- `assets/avatar.jpg` — brand avatar used in the page and social preview

## Edit the portfolio

Update text, prices, service details, and contact links in `content.js`. Project entries without a video link are labelled as concepts, so they are not presented as completed client work. Add a real YouTube channel link to `contact.youtube` when one is available; the YouTube profile buttons stay hidden until then.

The enquiry form runs in the visitor's browser and prepares a message for WhatsApp or email. It does not upload or store form entries on a server.

## Publish updates

GitHub Pages publishes the repository's `main` branch from the root folder. Commit changes to `main` to update the live site. The `.nojekyll` file keeps GitHub Pages serving this static site without Jekyll processing.
