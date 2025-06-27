# Analytics Setup Guide

This guide will help you set up Google Analytics 4 (GA4) and Vercel Analytics for your Next.js portfolio project.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install @vercel/analytics gtag
```

### 2. Set Up Google Analytics 4

1. **Create a Google Analytics Account**

   - Go to [Google Analytics](https://analytics.google.com/)
   - Click "Start measuring"
   - Follow the setup wizard to create your account

2. **Create a Property**

   - Click "Create Property"
   - Enter your website name (e.g., "Victoria Paintsil Portfolio")
   - Select your timezone and currency
   - Click "Next"

3. **Set Up Data Stream**

   - Choose "Web" as your platform
   - Enter your website URL
   - Give your stream a name (e.g., "Website")
   - Click "Create stream"

4. **Get Your Measurement ID**
   - Copy the Measurement ID (starts with "G-")
   - This is your `NEXT_PUBLIC_GA_ID`

### 3. Configure Environment Variables

Create a `.env.local` file in your project root:

```env
# Google Analytics 4 Tracking ID
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

Replace `G-XXXXXXXXXX` with your actual Measurement ID from Google Analytics.

### 4. Deploy to Vercel (Optional but Recommended)

If you're deploying to Vercel, Vercel Analytics will automatically work without additional configuration.

## 📊 What's Being Tracked

### Google Analytics 4 Events

- **Page Views**: Automatic tracking of all page visits
- **Contact Form Submissions**: When users submit the contact form
- **Blog Index Views**: When users visit the blog listing page
- **Blog Post Views**: When users view individual blog posts
- **Blog Link Clicks**: When users click on blog post links
- **Project Views**: When users view project pages (custom implementation needed)
- **Downloads**: When users download files (custom implementation needed)

### Vercel Analytics

- **Core Web Vitals**: Performance metrics
- **Page Views**: Basic page view tracking
- **Performance Data**: Load times and user experience metrics

## 🔧 Custom Event Tracking

### Contact Form Tracking

The contact form automatically tracks submissions:

```typescript
import {trackContactForm} from "@/lib/gtag";

// This is already implemented in ContactForm.tsx
trackContactForm();
```

### Blog Tracking (Already Implemented)

#### Blog Index Views

```typescript
import {trackBlogIndexView} from "@/lib/gtag";

// Automatically tracked via BlogIndexTracker component
trackBlogIndexView();
```

#### Blog Post Views

```typescript
import {trackBlogView} from "@/lib/gtag";

// Automatically tracked via BlogPostTracker component
trackBlogView("Blog Post Title");
```

#### Blog Link Clicks

```typescript
import {trackBlogLinkClick} from "@/lib/gtag";

// Automatically tracked via BlogLinkTracker component
trackBlogLinkClick("Blog Post Title");
```

### Project View Tracking

To track when users view specific projects, add this to your project pages:

```typescript
import {trackProjectView} from "@/lib/gtag";

// In your project page component
useEffect(() => {
  trackProjectView("Project Name");
}, []);
```

### Download Tracking

To track file downloads:

```typescript
import {trackDownload} from "@/lib/gtag";

// On download button click
const handleDownload = () => {
  trackDownload("resume.pdf");
  // Your download logic here
};
```

## 🍪 Cookie Consent

The implementation includes GDPR-compliant cookie consent:

- Users must accept cookies before analytics tracking begins
- Consent is stored in localStorage
- Users can decline and still use the site
- Analytics are disabled by default until consent is given

## 📈 Viewing Analytics Data

### Google Analytics 4

1. Go to your [Google Analytics Dashboard](https://analytics.google.com/)
2. Navigate to "Reports" → "Realtime" to see live data
3. Check "Engagement" → "Events" to see custom events:
   - `blog_view` - Individual blog post views
   - `blog_index_view` - Blog listing page views
   - `blog_link_click` - Blog link clicks
   - `contact_form_submit` - Contact form submissions
4. View "Acquisition" → "Traffic acquisition" for traffic sources

### Vercel Analytics

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Click on "Analytics" tab
4. View performance metrics and page views

## 🔍 Testing Your Setup

### 1. Check Console for Errors

Open browser dev tools and check the console for any analytics-related errors.

### 2. Verify Google Analytics

1. Open your website
2. Open browser dev tools
3. Go to Network tab
4. Look for requests to `googletagmanager.com`
5. Check that your GA ID is in the requests

### 3. Test Cookie Consent

1. Clear your browser's localStorage
2. Refresh the page
3. Verify the cookie consent banner appears
4. Test both accept and decline functionality

### 4. Test Blog Tracking

1. **Blog Index**: Visit `/blog` and check for `blog_index_view` event
2. **Blog Links**: Click on blog post links and check for `blog_link_click` events
3. **Blog Posts**: Visit individual blog posts and check for `blog_view` events

### 5. Test Form Tracking

1. Submit the contact form
2. Check Google Analytics Realtime reports
3. Look for the "contact_form_submit" event

## 🛠️ Troubleshooting

### Analytics Not Working

1. **Check Environment Variables**

   - Ensure `.env.local` exists and has the correct GA ID
   - Restart your development server after adding environment variables

2. **Check Network Requests**

   - Open dev tools → Network tab
   - Look for failed requests to Google Analytics
   - Check for CORS errors

3. **Verify Cookie Consent**
   - Make sure users have accepted cookies
   - Check localStorage for "cookie-consent" value

### Events Not Showing

1. **Check Event Names**

   - Ensure event names match exactly in GA4
   - Check for typos in event parameters

2. **Check Consent Status**
   - Verify analytics consent is granted
   - Check `gtag('consent', 'update')` calls

### Blog Tracking Issues

1. **Check Component Imports**

   - Ensure all tracking components are properly imported
   - Verify file paths are correct

2. **Check Console Logs**
   - In development mode, check console for tracking logs
   - Verify events are being fired

## 📱 Privacy Considerations

- Analytics are disabled by default until user consent
- No personal data is collected beyond standard analytics
- Users can decline tracking and still use the site
- Cookie consent is stored locally and can be revoked

## 🔄 Updates and Maintenance

### Updating Analytics

1. **Google Analytics**: Updates automatically via the gtag script
2. **Vercel Analytics**: Updates with your Next.js version

### Monitoring

- Regularly check analytics data for accuracy
- Monitor for any console errors
- Keep track of user consent rates
- Review blog engagement metrics

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Verify your Google Analytics setup
3. Check the browser console for errors
4. Ensure all environment variables are set correctly

---

**Note**: This analytics setup is GDPR-compliant and respects user privacy. Users must explicitly consent to analytics tracking before any data is collected.
