# How to Update Your Existing Pages to Use the Shared Header/Footer

## Quick Summary

For each HTML page, you need to make 3 changes:

1. **Replace the entire `<header>...</header>` section** with: `<div id="site-header"></div>`
2. **Replace the entire `<footer>...</footer>` section** with: `<div id="site-footer"></div>`
3. **Add the script tags** before `</body>`

---

## Step-by-Step Instructions

### Before (Current Page Structure):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <header>
        <nav>
            <a href="/" class="logo">
                <img src="/images/logo.png" alt="Logo">
            </a>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <!-- ... more nav items ... -->
            </ul>
        </nav>
    </header>

    <main>
        <!-- Page content here -->
    </main>

    <footer>
        <div class="footer-content">
            <!-- Footer content -->
        </div>
    </footer>

    <script>
        // Any existing scripts
    </script>
</body>
</html>
```

### After (Updated with Shared Components):

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <!-- Header injected by header.js -->
    <div id="site-header"></div>

    <main>
        <!-- Page content here (UNCHANGED) -->
    </main>

    <!-- Footer injected by footer.js -->
    <div id="site-footer"></div>

    <!-- Shared Components (ADD THESE) -->
    <script src="/js/header.js"></script>
    <script src="/js/footer.js"></script>
    
    <script>
        // Any page-specific scripts can stay here
    </script>
</body>
</html>
```

---

## Files to Upload to Your GitHub Pages Site

Upload these new files:

```
/js/header.js          <- New file (creates header with dropdown)
/js/footer.js          <- New file (creates footer)
/css/style.css         <- Updated file (add dropdown + new page styles)
```

### For the CSS:

You can either:
1. **Append** the contents of `additional-styles.css` to your existing `style.css`, OR
2. Create a separate file and link both in your HTML:
   ```html
   <link rel="stylesheet" href="/css/style.css">
   <link rel="stylesheet" href="/css/additional-styles.css">
   ```

---

## Pages That Need Updating

Here's your checklist of pages to update:

- [ ] `/index.html` (homepage)
- [ ] `/flexjobs/index.html`
- [ ] `/remote-job-assistant/index.html`
- [ ] `/we-work-remotely/index.html`
- [ ] `/jobspresso/index.html`
- [ ] `/remote-rocketship/index.html`
- [ ] `/dailyremote/index.html`
- [ ] `/justremote/index.html`
- [ ] `/nodesk/index.html`
- [ ] `/remote-ok/index.html`
- [ ] `/remotive/index.html`
- [ ] `/working-nomads/index.html`
- [ ] `/remote-co/index.html`
- [ ] `/about/index.html`
- [ ] `/contact/index.html`
- [ ] `/blog/index.html`
- [ ] `/verification-process/index.html` (already done - use as reference)

---

## How to Edit the Header/Footer in the Future

### To add a new job board to the dropdown:

Edit `/js/header.js` and find this section:

```javascript
<li class="dropdown-header">All Verified Boards</li>
<li><a href="/remote-co/">Remote.co</a></li>
<li><a href="/dailyremote/">DailyRemote</a></li>
<!-- Add new boards here like: -->
<li><a href="/new-board/">New Board Name</a></li>
```

### To update footer links:

Edit `/js/footer.js` and modify the links in the footer sections.

### Changes will automatically appear on ALL pages!

---

## Testing Locally

Since GitHub Pages requires the files to be served (not opened directly), test locally using:

```bash
# If you have Python installed:
cd your-site-folder
python -m http.server 8000
# Then open http://localhost:8000

# Or use VS Code's "Live Server" extension
```

---

## Troubleshooting

**Header/footer not showing?**
- Check that the script paths are correct (`/js/header.js`)
- Make sure the JS files are uploaded to your GitHub repo
- Check browser console for errors (F12 → Console)

**Dropdown not working on mobile?**
- The dropdown needs the CSS from `additional-styles.css`
- Make sure the CSS is loaded

**Styles look wrong?**
- Append the dropdown CSS to your style.css file
- Hard refresh the page (Ctrl+Shift+R)
