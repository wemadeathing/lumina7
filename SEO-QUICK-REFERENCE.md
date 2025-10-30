# SEO Quick Reference Guide - Lumina7

Quick reference for maintaining and verifying SEO improvements.

---

## 🚀 Quick Verification Commands

```bash
# Build the site and regenerate sitemap
npm run build

# Preview the build locally
npm run preview

# Check for any errors
npm run build 2>&1 | grep -i error
```

---

## ✅ What Was Fixed (At a Glance)

1. **Sitemap Domain** - Changed from `.co.ca` to `.co.za` ✅
2. **robots.txt** - Created with proper directives ✅
3. **Organization Schema** - Added to all pages ✅
4. **LocalBusiness Schema** - Added to contact page ✅
5. **Article Schema** - Added to all blog posts ✅
6. **BreadcrumbList Schema** - Added to portfolio pages ✅
7. **Image ALT Text** - Optimized for SEO ✅
8. **Meta Descriptions** - Added to Insights page ✅
9. **Performance** - Added Google Fonts preconnect ✅

---

## 🔍 How to Test Your SEO

### 1. Test Rich Results (Google)
Visit: https://search.google.com/test/rich-results

Test these URLs:
- `https://lumina7.co.za/` (Organization schema)
- `https://lumina7.co.za/contact/` (LocalBusiness schema)
- `https://lumina7.co.za/insights/ai-guide-2025/` (Article schema)
- `https://lumina7.co.za/work/arabica-coffee/` (BreadcrumbList + CreativeWork)

### 2. Validate Schema Markup
Visit: https://validator.schema.org/

Paste the full HTML of each page type to validate.

### 3. Check Sitemap
Visit: https://lumina7.co.za/sitemap-index.xml

Verify all URLs show `.co.za` (not `.co.ca`)

### 4. Test robots.txt
Visit: https://lumina7.co.za/robots.txt

Should show:
```
User-agent: *
Allow: /
Sitemap: https://lumina7.co.za/sitemap-index.xml
```

---

## 📊 Expected SEO Timeline

| Timeframe | What to Expect |
|-----------|---------------|
| **1-3 days** | Google recrawls site with new sitemap |
| **1-2 weeks** | Rich snippets start appearing in search |
| **2-4 weeks** | Improved local search rankings (Cape Town) |
| **4-8 weeks** | Full SEO impact visible in analytics |

---

## 🎯 Schema Types Implemented

```
All Pages → Organization Schema
Contact Page → LocalBusiness Schema  
Blog Posts → Article Schema
Portfolio → BreadcrumbList + CreativeWork Schema
```

---

## 📝 Files Modified

```
✅ public/robots.txt (NEW)
✅ src/layouts/Layout.astro
✅ src/pages/contact.astro
✅ src/pages/insights.astro
✅ src/pages/insights/[...slug].astro
✅ src/pages/work/[...slug].astro
✅ src/pages/index.astro
✅ src/pages/about.astro
```

---

## 🔄 When to Update SEO

### Always Update When:
- Adding new blog posts (Article schema auto-applies)
- Adding portfolio projects (Schema auto-applies)
- Changing business hours or contact info (Update contact.astro)
- Moving office location (Update Layout.astro + contact.astro)
- Changing company description (Update Layout.astro)

### Never Change:
- The sitemap (auto-generates on build)
- Schema.org structure types (unless adding new features)
- robots.txt (unless blocking specific areas)

---

## 🆘 Troubleshooting

### Sitemap showing wrong domain?
```bash
# Check config
cat astro.config.mjs | grep site

# Should show: site: 'https://lumina7.co.za'
# If wrong, fix and rebuild:
npm run build
```

### Schema not validating?
1. Use Google Rich Results Test
2. Check for JavaScript errors in browser console
3. Verify JSON.stringify() is rendering properly
4. Check Schema.org docs for field requirements

### Rich snippets not showing?
- Wait 1-2 weeks after changes
- Check Google Search Console for errors
- Verify schema with validator
- Submit sitemap in Search Console

---

## 📞 Google Search Console Setup

**Important: Submit your sitemap!**

1. Go to: https://search.google.com/search-console
2. Add property: `lumina7.co.za`
3. Verify ownership (DNS or HTML file)
4. Submit sitemap: `https://lumina7.co.za/sitemap-index.xml`
5. Monitor for errors weekly

---

## 🎨 Brand Voice in SEO (Reminder)

When writing meta descriptions or content:
- ✅ "We partner with South African businesses"
- ✅ "Professional brands that work"
- ✅ "Cape Town design studio"
- ❌ "Revolutionary, cutting-edge solutions"
- ❌ "Dominate your market"

Keep it professional, confident, and outcome-focused.

---

## 📈 Key Metrics to Monitor

| Metric | Tool | Check Frequency |
|--------|------|-----------------|
| Indexed Pages | Search Console | Weekly |
| Rich Results | Rich Results Test | Monthly |
| Page Speed | PageSpeed Insights | Monthly |
| Core Web Vitals | Search Console | Weekly |
| Search Rankings | Manual search | Weekly |
| Structured Data Errors | Search Console | Weekly |

---

## ✨ Quick Wins for More SEO

1. **Add more blog posts** (2-4 per month)
2. **Get listed** in SA business directories
3. **Add case studies** to portfolio
4. **Optimize images** (compress, WebP format)
5. **Internal linking** between related posts
6. **Get backlinks** from SA design/business sites

---

*For full details, see SEO-IMPROVEMENTS.md*

