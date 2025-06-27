export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Custom events for portfolio
export const trackContactForm = () => {
  event({
    action: "contact_form_submit",
    category: "engagement",
    label: "contact_form",
  });
};

export const trackProjectView = (projectName: string) => {
  event({
    action: "project_view",
    category: "engagement",
    label: projectName,
  });
};

export const trackBlogView = (postTitle: string) => {
  event({
    action: "blog_view",
    category: "engagement",
    label: postTitle,
  });
};

export const trackBlogIndexView = () => {
  event({
    action: "blog_index_view",
    category: "engagement",
    label: "blog_index",
  });
};

export const trackBlogLinkClick = (postTitle: string) => {
  event({
    action: "blog_link_click",
    category: "engagement",
    label: postTitle,
  });
};

export const trackDownload = (fileName: string) => {
  event({
    action: "download",
    category: "engagement",
    label: fileName,
  });
};
