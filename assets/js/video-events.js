// Count the first click into each embedded video as a GoatCounter event.
// Clicks inside the YouTube iframe never reach this page, but pressing
// play moves focus into the iframe, which blurs this window.
window.addEventListener("blur", () => {
  setTimeout(() => {
    const frame = document.activeElement;
    const name = frame && frame.dataset && frame.dataset.goatcounterVideo;
    if (!name || frame.dataset.goatcounterCounted) return;
    frame.dataset.goatcounterCounted = "true";
    if (window.goatcounter && window.goatcounter.count) {
      window.goatcounter.count({
        path: name,
        title: frame.dataset.goatcounterTitle || frame.title,
        event: true,
      });
    }
  }, 0);
});
