import posthog from 'posthog-js';

let initialized = false;

export async function initialize(): Promise<void> {
  if (initialized) return;

  const settings = await chrome.storage.sync.get('analyticsEnabled');
  if (!settings.analyticsEnabled) return;

  posthog.init('phc_HxpI8sjpFVopwxwu8k2fvVddjVFQTjFxuQ5huUSmdax', {
    api_host: 'https://app.posthog.com',
    persistence: 'localStorage',
    autocapture: false
  });

  initialized = true;
}

export async function logEvent(
  eventName: string,
  properties?: Record<string, unknown>
): Promise<void> {
  if (!initialized) return;

  posthog.capture(eventName, {
    ...properties,
    browser: navigator.userAgent,
    timestamp: new Date().toISOString()
  });
}

export async function enableAnalytics(enabled: boolean): Promise<void> {
  await chrome.storage.sync.set({ analyticsEnabled: enabled });
  if (enabled) {
    await initialize();
    await logEvent('analytics_enabled');
  }
}
