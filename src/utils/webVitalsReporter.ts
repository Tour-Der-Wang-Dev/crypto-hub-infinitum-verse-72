
// Web Vitals Reporter Utility
// This module helps track and report Core Web Vitals metrics

type MetricName = 'LCP' | 'FID' | 'CLS' | 'TTFB' | 'FCP';

interface WebVitalMetric {
  name: MetricName;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
}

// Send metrics to an analytics endpoint
const reportWebVitals = (metric: WebVitalMetric) => {
  // In production, replace with your actual analytics endpoint
  const analyticsEndpoint = '/api/analytics';
  
  // Log metrics during development
  if (import.meta.env.DEV) {
    console.log(`Web Vitals: ${metric.name} - ${metric.value} (${metric.rating})`);
    return;
  }
  
  // Send metrics to analytics in production
  try {
    const body = JSON.stringify({
      name: metric.name,
      value: metric.value,
      rating: metric.rating,
      delta: metric.delta,
      id: metric.id
    });
    
    // Use sendBeacon if available for better reliability during page unload
    if (navigator.sendBeacon) {
      navigator.sendBeacon(analyticsEndpoint, body);
    } else {
      fetch(analyticsEndpoint, {
        body,
        method: 'POST',
        keepalive: true,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('Error reporting web vitals:', error);
  }
};

export const initWebVitals = async () => {
  if (import.meta.env.PROD) {
    try {
      const { onLCP, onFID, onCLS, onTTFB, onFCP } = await import('web-vitals');
      
      onLCP(metric => reportWebVitals({ ...metric, name: 'LCP' as MetricName }));
      onFID(metric => reportWebVitals({ ...metric, name: 'FID' as MetricName }));
      onCLS(metric => reportWebVitals({ ...metric, name: 'CLS' as MetricName }));
      onTTFB(metric => reportWebVitals({ ...metric, name: 'TTFB' as MetricName }));
      onFCP(metric => reportWebVitals({ ...metric, name: 'FCP' as MetricName }));
      
      console.log('Web Vitals tracking initialized');
    } catch (error) {
      console.error('Failed to load web-vitals:', error);
    }
  }
};

export default reportWebVitals;
