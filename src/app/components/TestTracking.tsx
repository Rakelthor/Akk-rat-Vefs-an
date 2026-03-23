import { useState, useEffect } from "react";
import { CheckCircle2, XCircle, AlertCircle, ArrowLeft, Zap } from "lucide-react";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function TestTracking() {
  const [gtagExists, setGtagExists] = useState(false);
  const [dataLayerEvents, setDataLayerEvents] = useState<any[]>([]);
  const [conversionFired, setConversionFired] = useState(false);
  const [lastEventTime, setLastEventTime] = useState<string>("");

  useEffect(() => {
    // Check if gtag exists
    const checkGtag = () => {
      const exists = typeof window.gtag === "function";
      setGtagExists(exists);
      
      // Get initial dataLayer
      if (window.dataLayer) {
        setDataLayerEvents([...window.dataLayer]);
      }
    };

    checkGtag();
    
    // Poll dataLayer for changes
    const interval = setInterval(() => {
      if (window.dataLayer) {
        setDataLayerEvents([...window.dataLayer]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fireTestConversion = () => {
    if (window.gtag) {
      console.log("🎯 Firing test conversion...");
      
      window.gtag('event', 'conversion', {
        'send_to': 'AW-18029982289/q0YKCPumu4wcENHkrpVD',
        'event_callback': () => {
          console.log("✅ Conversion callback fired!");
        }
      });
      
      setConversionFired(true);
      setLastEventTime(new Date().toLocaleTimeString("is-IS"));
      
      // Show success message
      setTimeout(() => setConversionFired(false), 3000);
    } else {
      alert("❌ gtag is not loaded!");
    }
  };

  const firePageView = () => {
    if (window.gtag) {
      console.log("📄 Firing page_view event...");
      
      window.gtag('event', 'page_view', {
        page_title: 'Test Tracking Page',
        page_location: window.location.href,
        page_path: '/test-tracking'
      });
      
      setLastEventTime(new Date().toLocaleTimeString("is-IS"));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <a href="/" className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Til baka
          </a>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
            Google Ads Tracking Test
          </h1>
          <p className="text-slate-400">Real-time tracking verification dashboard</p>
        </div>

        {/* Status Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {/* gtag Status */}
          <div className={`p-6 rounded-xl border-2 ${
            gtagExists 
              ? "bg-emerald-900/20 border-emerald-500/50" 
              : "bg-red-900/20 border-red-500/50"
          }`}>
            <div className="flex items-center gap-3 mb-2">
              {gtagExists ? (
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              ) : (
                <XCircle className="w-6 h-6 text-red-400" />
              )}
              <h3 className="font-semibold">gtag() Function</h3>
            </div>
            <p className="text-sm text-slate-300">
              {gtagExists ? "✅ Loaded successfully" : "❌ Not found"}
            </p>
          </div>

          {/* DataLayer Status */}
          <div className="p-6 rounded-xl border-2 bg-blue-900/20 border-blue-500/50">
            <div className="flex items-center gap-3 mb-2">
              <AlertCircle className="w-6 h-6 text-blue-400" />
              <h3 className="font-semibold">DataLayer Events</h3>
            </div>
            <p className="text-sm text-slate-300">
              {dataLayerEvents.length} events tracked
            </p>
          </div>

          {/* Last Event */}
          <div className="p-6 rounded-xl border-2 bg-purple-900/20 border-purple-500/50">
            <div className="flex items-center gap-3 mb-2">
              <Zap className="w-6 h-6 text-purple-400" />
              <h3 className="font-semibold">Last Event</h3>
            </div>
            <p className="text-sm text-slate-300">
              {lastEventTime || "No events fired yet"}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <button
            onClick={fireTestConversion}
            disabled={!gtagExists}
            className={`p-6 rounded-xl border-2 text-left transition-all ${
              gtagExists
                ? "bg-emerald-600 border-emerald-500 hover:bg-emerald-500 hover:scale-105 active:scale-95"
                : "bg-slate-700 border-slate-600 opacity-50 cursor-not-allowed"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">🎯 Fire Test Conversion</h3>
            <p className="text-sm text-emerald-100">
              send_to: AW-18029982289/q0YKCPumu4wcENHkrpVD
            </p>
          </button>

          <button
            onClick={firePageView}
            disabled={!gtagExists}
            className={`p-6 rounded-xl border-2 text-left transition-all ${
              gtagExists
                ? "bg-blue-600 border-blue-500 hover:bg-blue-500 hover:scale-105 active:scale-95"
                : "bg-slate-700 border-slate-600 opacity-50 cursor-not-allowed"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">📄 Fire Page View</h3>
            <p className="text-sm text-blue-100">
              Standard page_view event
            </p>
          </button>
        </div>

        {/* Success Message */}
        {conversionFired && (
          <div className="mb-8 p-4 bg-emerald-900/50 border-2 border-emerald-500 rounded-lg animate-pulse">
            <p className="text-emerald-300 font-semibold">
              ✅ Conversion event fired successfully! Check Network tab or Tag Assistant.
            </p>
          </div>
        )}

        {/* DataLayer Viewer */}
        <div className="bg-slate-800/50 rounded-xl border-2 border-slate-700 p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">📊</span>
            DataLayer Contents
          </h2>
          
          <div className="bg-slate-900/80 rounded-lg p-4 overflow-auto max-h-96 font-mono text-sm">
            <pre className="text-emerald-400">
              {JSON.stringify(dataLayerEvents, null, 2)}
            </pre>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 bg-slate-800/50 rounded-xl border-2 border-slate-700 p-6">
          <h2 className="text-2xl font-bold mb-4">📋 How to Verify</h2>
          
          <div className="space-y-4 text-slate-300">
            <div>
              <h3 className="font-semibold text-white mb-2">1. Browser Console (F12)</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Open Developer Tools → Console</li>
                <li>Click "Fire Test Conversion"</li>
                <li>Look for: <code className="bg-slate-900 px-2 py-1 rounded">🎯 Firing test conversion...</code></li>
                <li>Should see: <code className="bg-slate-900 px-2 py-1 rounded">✅ Conversion callback fired!</code></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">2. Network Tab</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Open Developer Tools → Network</li>
                <li>Filter: <code className="bg-slate-900 px-2 py-1 rounded">collect</code></li>
                <li>Click "Fire Test Conversion"</li>
                <li>Look for request to: <code className="bg-slate-900 px-2 py-1 rounded">www.google.com/ccm/collect</code></li>
                <li>Check params: should contain <code className="bg-slate-900 px-2 py-1 rounded">en=conversion</code></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-2">3. Google Tag Assistant</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Install Tag Assistant Chrome Extension</li>
                <li>Click "Connect" → Refresh page</li>
                <li>Click "Fire Test Conversion"</li>
                <li>See event in Tag Assistant with send_to parameter</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-slate-500 text-sm">
          <p>Google Ads ID: AW-18029982289</p>
          <p>Conversion ID: AW-18029982289/q0YKCPumu4wcENHkrpVD</p>
        </div>
      </div>
    </div>
  );
}
