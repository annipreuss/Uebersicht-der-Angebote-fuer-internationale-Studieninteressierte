/* ==================================================================
   FUNKTIONEN DES HZB-WEGWEISERS

   Diese Datei steuert den Ablauf. Die Texte und Verzweigungen stehen
   in inhalte.js, das Aussehen steht in style.css.
   ================================================================== */

(function () {
  "use strict";

  const daten = window.HZB_INHALTE;

  if (!daten || !daten.schritte || !daten.schritte[daten.start]) {
    throw new Error("Die Inhalte des Wegweisers konnten nicht geladen werden.");
  }

  /* ------------------------- Seitenelemente ------------------------- */

  const elemente = {
    kicker: document.querySelector("#kicker"),
    seitentitel: document.querySelector("#seitentitel"),
    einleitung: document.querySelector("#einleitung"),
    zurueck: document.querySelector("#zurueck"),
    neustart: document.querySelector("#neustart"),
    fortschritt: document.querySelector("#fortschritt"),
    fragenansicht: document.querySelector("#fragenansicht"),
    bereich: document.querySelector("#bereich"),
    frage: document.querySelector("#frage"),
    frageninfo: document.querySelector("#frageninfo"),
    antworten: document.querySelector("#antworten"),
    ergebnis: document.querySelector("#ergebnis"),
    ergebnisBereich: document.querySelector("#ergebnis-bereich"),
    ergebnisTitel: document.querySelector("#ergebnis-titel"),
    ergebnisText: document.querySelector("#ergebnis-text"),
    ergebnisLink: document.querySelector("#ergebnis-link"),
    dialog: document.querySelector("#erklaerungsdialog"),
    dialogSchliessen: document.querySelector("#dialog-schliessen"),
    dialogBereich: document.querySelector("#dialog-bereich"),
    dialogTitel: document.querySelector("#dialog-titel"),
    dialogText: document.querySelector("#dialog-text"),
    dialogZusatz: document.querySelector("#dialog-zusatz"),
    dialogLink: document.querySelector("#dialog-link")
  };

  let aktuellerSchritt = daten.start;
  const verlauf = [];

  /* ------------------------- Hilfsfunktionen ------------------------- */

  function erstelleElement(tag, klassenname, text) {
    const neuesElement = document.createElement(tag);

    if (klassenname) {
      neuesElement.className = klassenname;
    }

    if (text !== undefined) {
      neuesElement.textContent = text;
    }

    return neuesElement;
  }

  function setzeLink(linkElement, adresse, beschriftung) {
    if (!adresse || !beschriftung) {
      linkElement.hidden = true;
      linkElement.removeAttribute("href");
      linkElement.textContent = "";
      return;
    }

    linkElement.href = adresse;
    linkElement.textContent = beschriftung;
    linkElement.hidden = false;
  }

  function schliesseDialog() {
    if (!elemente.dialog.open) {
      return;
    }

    if (typeof elemente.dialog.close === "function") {
      elemente.dialog.close();
    } else {
      elemente.dialog.removeAttribute("open");
    }
  }

  function oeffneDialog() {
    if (typeof elemente.dialog.showModal === "function") {
      elemente.dialog.showModal();
    } else {
      elemente.dialog.setAttribute("open", "");
    }
  }

  function fokussiereUeberschrift(element) {
    window.requestAnimationFrame(function () {
      element.focus();
    });
  }

  /* ------------------------- Erklärungen ------------------------- */

  function zeigeErklaerung(erklaerung) {
    if (!erklaerung) {
      return;
    }

    // Alte Inhalte werden entfernt, bevor die neue Erklärung erscheint.
    elemente.dialogText.hidden = false;
    elemente.dialogZusatz.replaceChildren();
    setzeLink(elemente.dialogLink, "", "");

    if (erklaerung.uebersicht === "beide") {
		zeigeHzbUebersicht("direkt", true);
		zeigeHzbUebersicht ("indirekt", true);
	} else if (erklaerung.uebersicht) {
		zeigeHzbUebersicht(erklaerung.uebersicht);
	} else {
      elemente.dialogBereich.textContent = erklaerung.bereich || "Erklärung";
      elemente.dialogTitel.textContent = erklaerung.titel || "Weitere Informationen";
      elemente.dialogText.innerHTML = erklaerung.text || "";
      elemente.dialogText.hidden = !erklaerung.text;
      setzeLink(elemente.dialogLink, erklaerung.link, erklaerung.linkText);
    }

    oeffneDialog();
  }

  function zeigeHzbUebersicht(schluessel, gemeinsameAnsicht = false) {
    const uebersichten = daten.uebersichten;
    const inhalt = uebersichten && uebersichten[schluessel];

    if (!inhalt) {
      elemente.dialogBereich.textContent = "Erklärung";
      elemente.dialogTitel.textContent = "Keine Erklärung gefunden";
      elemente.dialogText.textContent =
        "Für diese Auswahl ist in inhalte.js noch keine Erklärung hinterlegt.";
      return;
    }

    elemente.dialogBereich.textContent = uebersichten.titel;
    elemente.dialogTitel.textContent = gemeinsameAnsicht
	  ? "Direkte und indirekte HZB"
	  :inhalt.titel;
    elemente.dialogText.textContent = uebersichten.einleitung;

    const uebersicht = erstelleElement(
      "article",
      "uebersicht" + (schluessel === "indirekt" ? " uebersicht--indirekt" : "")
    );

if (gemeinsameAnsicht) {
  uebersicht.append(erstelleElement("h3", "", inhalt.titel));
}

    uebersicht.append(
      erstelleElement("p", "uebersicht-status", inhalt.status),
      erstelleElement("p", "uebersicht-zusammenfassung", inhalt.zusammenfassung)
    );

    if (inhalt.regionText && Array.isArray(inhalt.regionen)) {
      const region = erstelleElement("section", "region");
      const regionen = erstelleElement("div", "regionen");

      region.append(erstelleElement("p", "", inhalt.regionText));

      inhalt.regionen.forEach(function (name) {
        regionen.append(erstelleElement("span", "regionschip", name));
      });

      region.append(regionen);
      uebersicht.append(region);
    }

    if (Array.isArray(inhalt.schritte) && inhalt.schritte.length > 0) {
      uebersicht.append(erstelleElement("h3", "", "Typischer Ablauf"));

      const ablauf = erstelleElement("ol", "ablauf");
      inhalt.schritte.forEach(function (schritt) {
        ablauf.append(erstelleElement("li", "", schritt));
      });
      uebersicht.append(ablauf);
    }

    if (Array.isArray(inhalt.wege) && inhalt.wege.length > 0) {
      uebersicht.append(erstelleElement("h3", "", "Weitere anerkannte Wege"));

      const wege = erstelleElement("div", "wege");
      inhalt.wege.forEach(function (weg) {
        wege.append(erstelleElement("div", "weg", weg));
      });
      uebersicht.append(wege);
    }

    if (inhalt.zusatz) {
      uebersicht.append(erstelleElement("p", "uebersicht-zusatz", inhalt.zusatz));
    }

    if (uebersichten.hinweis && schluessel === "direkt") {
		
      const hinweis = erstelleElement("div", "hinweisbox");
      hinweis.append(erstelleElement("span", "", uebersichten.hinweis + " "));

      if (uebersichten.quelle && uebersichten.quelleText) {
        const quelle = erstelleElement("a", "", uebersichten.quelleText);
        quelle.href = uebersichten.quelle;
        quelle.target = "_blank";
        quelle.rel = "noopener noreferrer";
        hinweis.append(quelle);
      }

      elemente.dialogZusatz.append(hinweis);
    }

    elemente.dialogZusatz.append(uebersicht);
  }

  /* ------------------------- Fragen und Ergebnisse ------------------------- */

  function zeigeFrage(schritt) {
    elemente.fragenansicht.hidden = false;
    elemente.ergebnis.hidden = true;
    elemente.bereich.textContent = schritt.bereich || "Frage";
	elemente.bereich.hidden = schritt.bereich === "Ausgangspunkt";
    elemente.frage.textContent = schritt.frage;
    elemente.fortschritt.textContent = "Frage " + (verlauf.length + 1);
    elemente.antworten.replaceChildren();

    elemente.frageninfo.hidden = !schritt.erklaerung;
    elemente.frageninfo.onclick = schritt.erklaerung
      ? function () {
          zeigeErklaerung(schritt.erklaerung);
        }
      : null;

    schritt.antworten.forEach(function (antwort) {
      const karte = erstelleElement("div", "antwortkarte");
      const auswahl = erstelleElement("button", "antwortbutton", antwort.text);
      auswahl.type = "button";
      auswahl.addEventListener("click", function () {
        waehleAntwort(antwort.weiter);
      });
      karte.append(auswahl);

      if (antwort.erklaerung) {
        const info = erstelleElement("button", "infobutton");
        info.type = "button";
        info.setAttribute("aria-label", "Erklärung zu „" + antwort.text + "“ anzeigen");
        info.append(
          erstelleElement("span", "", "ⓘ "),
          document.createTextNode("Erklärung")
        );
        info.firstElementChild.setAttribute("aria-hidden", "true");
        info.addEventListener("click", function () {
          zeigeErklaerung(antwort.erklaerung);
        });
        karte.append(info);
      }

      elemente.antworten.append(karte);
    });

    fokussiereUeberschrift(elemente.frage);
  }

  function zeigeErgebnis(schritt) {
    elemente.fragenansicht.hidden = true;
    elemente.ergebnis.hidden = false;
    elemente.fortschritt.innerHTML = "Ergebnis";
    elemente.ergebnisBereich.innerHTML = schritt.bereich || "Ergebnis";
    elemente.ergebnisTitel.innerHTML = schritt.titel;
    elemente.ergebnisText.innerHTML = schritt.beschreibung || "";
    elemente.ergebnis.style.setProperty("--ergebnisfarbe", schritt.farbe || "#d72305");
    setzeLink(elemente.ergebnisLink, schritt.link, schritt.linkText);
    fokussiereUeberschrift(elemente.ergebnisTitel);
  }

  function zeigeAktuellenSchritt() {
    const schritt = daten.schritte[aktuellerSchritt];

    if (!schritt) {
      throw new Error("Unbekannter Schritt: " + aktuellerSchritt);
    }

    elemente.zurueck.hidden = verlauf.length === 0;
    elemente.neustart.hidden = verlauf.length === 0;

    if (schritt.typ === "frage") {
      zeigeFrage(schritt);
    } else if (schritt.typ === "ergebnis") {
      zeigeErgebnis(schritt);
    } else {
      throw new Error("Unbekannter Schritttyp bei: " + aktuellerSchritt);
    }
  }

  function waehleAntwort(naechsterSchritt) {
    if (!daten.schritte[naechsterSchritt]) {
      throw new Error("Das Ziel „" + naechsterSchritt + "“ existiert nicht.");
    }

    verlauf.push(aktuellerSchritt);
    aktuellerSchritt = naechsterSchritt;
    schliesseDialog();
    zeigeAktuellenSchritt();
  }

  function geheZurueck() {
    if (verlauf.length === 0) {
      return;
    }

    aktuellerSchritt = verlauf.pop();
    schliesseDialog();
    zeigeAktuellenSchritt();
  }

  function beginneNeu() {
    verlauf.length = 0;
    aktuellerSchritt = daten.start;
    schliesseDialog();
    zeigeAktuellenSchritt();
  }

  /* ------------------------- Start ------------------------- */

  document.title = daten.meta.titel;
  elemente.kicker.textContent = daten.meta.kicker;
  elemente.seitentitel.textContent = daten.meta.titel;
  elemente.einleitung.textContent = daten.meta.einleitung;

  elemente.zurueck.addEventListener("click", geheZurueck);
  elemente.neustart.addEventListener("click", beginneNeu);
  elemente.dialogSchliessen.addEventListener("click", schliesseDialog);
  elemente.dialog.addEventListener("click", function (ereignis) {
    if (ereignis.target === elemente.dialog) {
      schliesseDialog();
    }
  });

  zeigeAktuellenSchritt();
})();