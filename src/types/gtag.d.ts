declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "consent",
      targetId: string,
      config?: {
        page_location?: string;
        event_category?: string;
        event_label?: string;
        value?: number;
        analytics_storage?: "granted" | "denied";
        [key: string]: string | number | boolean | undefined;
      }
    ) => void;
  }
}

export {};
