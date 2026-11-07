# Events Notes — Website Audit

_Audit date: 2026-11-05 · Scope: `index.html`, feature copy, screenshots. Compared the landing page against the current app UI visible in the freshly captured tutorial screenshots (`assets/tutorials/`, captured 2026-10-27)._

---

## TL;DR

- **All 8 landing-page screenshots are from June 2026** and predate the current app. Three show screens that have **materially changed** (Statistics, Sun Track, New Event) and one has a **wrong language** (Mac shot is in Russian). All should be re-captured.
- **The feature list undersells the app.** At least 6 real features are missing: payments/prepayment, photo gallery, backups, team members, Apple Calendar import, and the subscription/Premium model.
- **Positioning is narrower than the app.** The site talks only to photographers/videographers, but the app supports 9 professional roles.

---

## 1. Screenshots — what's old and needs replacing

All landing screenshots live in `assets/screenshots/` and were committed in June 2026. The tutorial screenshots (`assets/tutorials/*.webp`) are the current reference — captured 2026-10-27 from the current build with English demo data.

| File | Used on | Status | Problem |
|---|---|---|---|
| `statistics.png` | Screenshots strip | ❌ **Replace — feature changed** | Shows the old prebuilt charts ("Kind of shooting for quarter" bar chart + "Earnings for month" donut) and labels "EVENTS sessions/hours". Current app replaced these with a **"Create custom charts"** builder and relabelled to "EVENT sessions/hours". See `assets/tutorials/stats.webp`. |
| `suntrack.png` | Screenshots strip | ❌ **Replace — UI changed** | Current Sun Track has a **date-picker header** (e.g. "October 29, 2026 ▾") instead of the "Sun Track" title, and a new **camera button** in the map controls. See `assets/tutorials/sun.webp`. |
| `createevent.png` | Screenshots strip ("Create event") | ❌ **Replace — UI changed** | Labels renamed: "Save" button → blue check; "Kind of event" → **"Event type"**; "Amount of Hours" → **"Number of Hours"**; "Telegram link/Instagram link" → "Telegram/Instagram" with "@username or link" hints. See `assets/tutorials/newevent-main.webp`. |
| `macbook16.png` | macOS section | ❌ **Replace — wrong language + old** | The entire Mac UI is **in Russian** ("Расписание", "Галерея", "Полная цена"…) while the site defaults to English. Also the sidebar wordmark reads **"Event Note"** (singular), not "Events Notes". From the June build. Needs an English re-capture. |
| `main.png` | Hero (back phone) | ⚠️ **Replace — outdated** | Old home shows a single event card with one time. Current schedule is a **list of events with start–end time ranges and type subtitles**, and a crosshair "locate" button top-left. See `assets/tutorials/schedule.webp`. |
| `eventdetails.png` | Hero (front phone) | ⚠️ **Replace — outdated + typo** | Single start time; contains the typo **"Location Adress"**; no alerts section. Current details show a **time range**, correct "Location address", and a **"More" section** (Event Alert / Deadline Alert). See `assets/tutorials/details-main.webp`. |
| `deadlines.png` | Screenshots strip | ⚠️ **Minor refresh** | Layout still matches, but the current top bar adds a **list/menu button top-left**, and the data is old. |
| `contacts.png` | Screenshots strip | ⚠️ **Lowest priority** | Design (Clients/Colleagues tabs) still matches the current app; only the demo data is from June. Refresh for consistency with the new captures. |

**Cross-cutting notes on images**
- The fresh tutorial captures are **frameless phone shots**; the landing shots use **iPhone device frames**. New landing captures will need the same framing treatment (or reframe the webp versions).
- Landing shots are heavy PNGs (`suntrack.png` ~1.1 MB, `macbook16.png` ~1 MB). Tutorials already use **WebP**. Standardising the landing images on WebP would cut page weight noticeably.

---

## 2. Features — what to ADD

These exist in the app (confirmed in the tutorials and the Mac screenshot) but are absent from the landing feature grid:

1. **Payments, prepayment & gift certificates** 💰 — full price, deposit, and gift-certificate tracking that feeds Statistics. A core selling point for the target user; currently invisible.
2. **Photo gallery / references per event** 🖼️ — attach moodboards, poses, client references to a shoot. Visible in both the app and the Mac shot.
3. **Backups & restore (snapshots)** 🛟 — data-safety/trust angle; "Restore missing data" vs "Replace everything".
4. **Team members / Colleagues** 👥 — assign a team to an event (Agency role).
5. **Apple Calendar import** 📆 — the site only advertises **Google Calendar import**, but the app imports from Apple Calendar too. Broaden the card to "Calendar import (Apple & Google)".
6. **Premium / pricing** ⭐ — there is **no pricing or subscription info anywhere**. The free tier allows up to 3 upcoming events (5 in Ukraine); Premium removes the limit (monthly/yearly). Consider a short pricing/Premium section — also helps set expectations before download.

**Update existing copy**
- **Analytics card** → mention **custom charts** (new capability), not just "earnings, sessions, hours".
- **To-Do / Tasks** — currently folded only into "Shoot timelines". The app has a distinct To-Do (Deadlines tab has a Deadlines/To-do switch; the Mac app has a "Tasks" sidebar item). Consider surfacing it.

---

## 3. Features — what to REMOVE / consolidate

- **"Locations & routes" 📍 and "Create Route" 🧭 are two near-duplicate cards.** Merge into one ("Locations & routes — one tap to directions"). The 12-card grid feels padded because of this split.
- No feature on the landing page describes something the app _lacks_, so nothing needs removing for accuracy — the issue is redundancy, not false claims.

---

## 4. Positioning / copy issues

- **Audience is too narrow for the product.** The hero, "Why", and reviews all say *photographers/videographers/production*. The app actually serves **9 roles**: Photographer, Videographer, Agency, DJ, Decorator, Event Host, Makeup Artist, Hairdresser, Catering. Decision needed: broaden the copy to "event professionals" or deliberately keep the photographer focus. Right now it's an unintentional mismatch (DJs, decorators, MUAs, caterers won't see themselves).
- **"15 languages" claim (hero)** — verify against the current App Store localizations. The site and tutorials are only in 3 (EN/UK/RU), so the claim is unverifiable from here. Confirm before keeping.
- **Testimonials are generic/anonymous** — three quotes all attributed to "Photographer" with roles like "Previously used a notebook". No names, no star rating. Consider real App Store reviews and a visible rating; the heading "Why photographers use Events Notes" also reinforces the narrow positioning above.

---

## 5. Housekeeping (not screenshots/features, but found during the audit)

- **Branding inconsistency:** Mac app wordmark "Event Note" (singular) vs site "Events Notes" vs App Store slug "events-notes". Pick a canonical name.
- **`README.md` is stale:** lists the live site as `zmiyov.github.io/eventnote-website`, but `CNAME` points to **`www.eventsnotes.top`**. The "fill in placeholders (APP_STORE_URL / PRIVACY_URL / TERMS_URL)" table is also obsolete — those are already filled in.
- **App Store link** uses the `/ua/` storefront path (`apps.apple.com/ua/app/...`); a region-neutral link would serve non-Ukraine visitors better.
- **SEO/OG:** no `og:url`, no canonical `<link>`, and `og:image` is the small app icon. Minor, but cheap to improve.

---

## Suggested priority order

1. Re-capture **Statistics, Sun Track, New Event, Mac** screenshots (changed UI / wrong language).
2. Add **Payments**, **Gallery**, **Backups**, **Team**, **Apple Calendar import**, **Premium/pricing** to the feature set.
3. Decide on **audience positioning** (photographer-only vs all event pros) and align hero/reviews copy.
4. Refresh hero + Deadlines + Contacts screenshots; merge the two route cards.
5. Fix README, branding, and the "15 languages" claim.
