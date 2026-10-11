# Dimitria Freitas — Academic Website

Source repository for Dimitria Freitas's academic website, deployed as a static site through GitHub Pages.

Public site: <https://www.dimitriafreitas.com>

The CV, job market paper, and working papers use stable filenames in `files/` (`Dimitria_Freitas_CV.pdf`, `Dimitria_Freitas_JMP.pdf`, `DDF_Place_Based_Policies_Poll.pdf`, `DF_Far_Right_Populism.pdf`); replace a file in place to update it.

Analytics use GoatCounter (<https://dfreitas.goatcounter.com>). Clicks on PDF links are counted as events via `data-goatcounter-click` (named `<paper>-pdf-<page>`, e.g. `jmp-pdf-home-top`, `paper-pdf-poll-research`) with a readable `data-goatcounter-title`. Plays of the embedded JMP video are counted by `assets/js/video-events.js` for iframes with `data-goatcounter-video`.
