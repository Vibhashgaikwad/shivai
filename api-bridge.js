// SHIVAI GitHub Pages bridge: sends requests straight to the Google Apps Script web app.
// Content-Type text/plain keeps it a "simple" request, so the browser does not need CORS preflight.
(function(){
  var APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbySx9xZU558i_ptK4Vw_Q32_sovW_6ez65hVEGs3m1XT0wQ48uReUmb3woTXsxMeAfk/exec';
  window.shivaiAppsScriptCall = async function(action, payload){
    var controller = new AbortController();
    var timer = setTimeout(function(){ controller.abort(); }, 30000);
    try {
      var response = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {'Content-Type': 'text/plain;charset=utf-8'},
        body: JSON.stringify({action: String(action || ''), payload: payload || {}}),
        redirect: 'follow',
        signal: controller.signal
      });
      if (!response.ok) throw new Error('SHIVAI service did not respond (' + response.status + ').');
      var text = await response.text();
      var result;
      try { result = JSON.parse(text); } catch (e) { throw new Error('SHIVAI backend did not return data. Redeploy the latest Code.gs as a web app with access set to Anyone.'); }
      if (!result || typeof result !== 'object') throw new Error('SHIVAI returned an invalid response.');
      return result;
    } catch (err) {
      if (err && err.name === 'AbortError') throw new Error('The SHIVAI backend did not reply in time. Please try again.');
      throw err;
    } finally { clearTimeout(timer); }
  };
})();
