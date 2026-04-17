import { useEffect, useState } from 'react';
import { getStoredUTMParameters, getAttributionReport } from '../utils/analytics';

interface DebugEvent {
  type: string;
  data: any;
  timestamp: string;
}

export function AnalyticsDebugPanel() {
  const [isOpen, setIsOpen] = useState(true);
  const [events, setEvents] = useState<DebugEvent[]>([]);
  const [attribution, setAttribution] = useState<any>(null);

  useEffect(() => {
    // Initial load
    const report = getAttributionReport();
    setAttribution(report);

    // Update attribution data every 2 seconds
    const interval = setInterval(() => {
      const newReport = getAttributionReport();
      setAttribution(newReport);
    }, 2000);

    // Listen to custom events from analytics
    const handleAnalyticsEvent = (e: any) => {
      if (e.detail) {
        setEvents(prev => [
          {
            type: e.detail.type || 'event',
            data: e.detail.data || {},
            timestamp: new Date().toLocaleTimeString('is-IS'),
          },
          ...prev.slice(0, 9),
        ]);
      }
    };

    window.addEventListener('analytics-event' as any, handleAnalyticsEvent);

    return () => {
      clearInterval(interval);
      window.removeEventListener('analytics-event' as any, handleAnalyticsEvent);
    };
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-[9999] bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-cyan-600 transition-colors font-mono text-sm"
      >
        📊 Debug Panel
      </button>
    );
  }

  const utm = attribution?.utm || {};
  const hasUTM = Object.keys(utm).some(key => utm[key]);

  return (
    <div className="fixed bottom-4 right-4 z-[9999] w-96 bg-gray-900 text-white rounded-lg shadow-2xl overflow-hidden font-mono text-xs border-2 border-cyan-500">
      {/* Header */}
      <div className="bg-cyan-500 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">📊</span>
          <span className="font-bold">Analytics Debug</span>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="hover:bg-cyan-600 px-2 py-1 rounded transition-colors"
        >
          ✕
        </button>
      </div>

      {/* Content */}
      <div className="max-h-[70vh] overflow-y-auto">
        {/* UTM Parameters */}
        <div className="p-4 border-b border-gray-700">
          <div className="font-bold mb-2 text-cyan-400">🎯 UTM Parameters</div>
          {hasUTM ? (
            <div className="space-y-1">
              {utm.utm_source && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Source:</span>
                  <span className="text-green-400">{utm.utm_source}</span>
                </div>
              )}
              {utm.utm_medium && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Medium:</span>
                  <span className="text-green-400">{utm.utm_medium}</span>
                </div>
              )}
              {utm.utm_campaign && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Campaign:</span>
                  <span className="text-green-400">{utm.utm_campaign}</span>
                </div>
              )}
              {utm.utm_term && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Keyword:</span>
                  <span className="text-yellow-400 font-bold">{utm.utm_term}</span>
                </div>
              )}
              {utm.utm_content && (
                <div className="flex justify-between">
                  <span className="text-gray-400">Content:</span>
                  <span className="text-green-400">{utm.utm_content}</span>
                </div>
              )}
              {utm.gclid && (
                <div className="flex justify-between">
                  <span className="text-gray-400">GCLID:</span>
                  <span className="text-green-400 truncate max-w-[200px]">{utm.gclid}</span>
                </div>
              )}
            </div>
          ) : (
            <div className="text-gray-500">❌ No UTM parameters detected</div>
          )}
          <div className="mt-3 pt-3 border-t border-gray-600">
            <div className="text-[10px] text-gray-400 mb-1">Test URL:</div>
            <div className="text-[9px] text-green-400 break-all">
              Add ?utm_source=google&utm_medium=cpc&utm_term=bókhaldsþjónusta to URL
            </div>
          </div>
        </div>

        {/* Session Info */}
        <div className="p-4 border-b border-gray-700">
          <div className="font-bold mb-2 text-cyan-400">⏱️ Session Info</div>
          {attribution?.timestamp ? (
            <div className="space-y-1">
              <div className="flex justify-between">
                <span className="text-gray-400">Started:</span>
                <span className="text-green-400">
                  {new Date(attribution.timestamp).toLocaleTimeString('is-IS')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Duration:</span>
                <span className="text-green-400">
                  {Math.floor(attribution.timeInSession / 60)}m {attribution.timeInSession % 60}s
                </span>
              </div>
            </div>
          ) : (
            <div className="text-gray-500">No session data</div>
          )}
        </div>

        {/* Storage Check */}
        <div className="p-4 border-b border-gray-700">
          <div className="font-bold mb-2 text-cyan-400">💾 Storage Check</div>
          <div className="space-y-1 text-[10px]">
            <div className="flex justify-between">
              <span className="text-gray-400">sessionStorage:</span>
              <span className={utm.utm_source ? "text-green-400" : "text-red-400"}>
                {utm.utm_source ? "✓ Working" : "✗ Empty"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Analytics:</span>
              <span className={typeof window !== 'undefined' && window.gtag ? "text-green-400" : "text-red-400"}>
                {typeof window !== 'undefined' && window.gtag ? "✓ Loaded" : "✗ Not loaded"}
              </span>
            </div>
          </div>
        </div>

        {/* Manual Test */}
        <div className="p-4 bg-gray-800">
          <div className="font-bold mb-2 text-cyan-400">🧪 Quick Test</div>
          <div className="text-[10px] text-gray-400 mb-2">
            Open browser console and type:
          </div>
          <code className="block bg-black p-2 rounded text-[9px] text-green-400 mb-2">
            sessionStorage.getItem('utm_parameters')
          </code>
          <div className="text-[10px] text-gray-400">
            Should show UTM data if tracking works
          </div>
        </div>
      </div>
    </div>
  );
}
