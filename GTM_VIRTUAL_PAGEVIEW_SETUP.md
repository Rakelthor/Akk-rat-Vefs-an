# Google Tag Manager - Virtual Pageview Setup

## Problem
Single-page app (SPA) subsections like `/laun`, `/thjonusta`, `/um-okkur` show as "Not tagged" in GTM because they don't trigger full page loads.

## Solution
Virtual pageviews are now pushed to GTM's dataLayer when users navigate to subsections.

## GTM Configuration Required

### Step 1: Create Virtual Pageview Trigger

1. Go to **Google Tag Manager** → **Triggers** → **New**
2. Name: `Virtual Pageview`
3. Trigger Type: **Custom Event**
4. Event name: `virtual_pageview`
5. Save

### Step 2: Update GA4 Page View Tag

1. Go to **Tags** → Find your **GA4 Configuration** or **GA4 Page View** tag
2. Click **Triggering**
3. Add the new `Virtual Pageview` trigger (in addition to existing triggers)
4. Save

### Step 3: Update Google Ads Tags (if any)

If you have Google Ads page view tags:
1. Go to **Tags** → Find your **Google Ads** tags
2. Click **Triggering**
3. Add the `Virtual Pageview` trigger
4. Save

### Step 4: Publish Changes

1. Click **Submit** in GTM
2. Add version name: "Virtual pageview tracking for SPA"
3. Click **Publish**

## Testing

1. Use **GTM Preview Mode**
2. Navigate to https://gloggva.is/laun
3. You should see `virtual_pageview` event fire with:
   - `page_path: /laun`
   - `page_title: Glöggva - Laun`
   - `page_location: https://gloggva.is/laun`

## Code Implementation

The code automatically tracks virtual pageviews when:
- User clicks navbar links (e.g., "Launavinnsla")
- User directly visits URLs like `/laun`, `/thjonusta`, `/um-okkur`, `/samband`
- App navigates between sections

Events pushed to dataLayer:
```javascript
{
  event: 'virtual_pageview',
  page_path: '/laun',
  page_title: 'Glöggva - Laun',
  page_location: 'https://gloggva.is/laun',
  // + any UTM parameters
}
```

## Expected Result

After setup, GTM Tag Coverage should show:
- ✅ gloggva.is/ - Tagged
- ✅ gloggva.is/laun - Tagged
- ✅ gloggva.is/thjonusta - Tagged
- ✅ gloggva.is/um-okkur - Tagged
- ✅ gloggva.is/samband - Tagged
