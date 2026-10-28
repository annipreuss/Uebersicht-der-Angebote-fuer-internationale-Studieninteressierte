/* ==================================================================
   INHALTE DES HZB-WEGWEISERS

   In dieser Datei stehen alle sichtbaren Texte, Antwortmöglichkeiten,
   Erklärungen, Links und Ergebnisse. Für reine Inhaltsänderungen muss
   weder index.html noch script.js bearbeitet werden.
   ================================================================== */

const HZB_ZIO_ERKLAERUNG =
  "Ausländische Studienbewerber (auch EU-Staatsangehörige) müssen grundsätzlich eine DSH-Prüfung mit mindestens dem Gesamtergebnis DSH2 oder ein anerkanntes Äquivalent gemäß der Rahmenordnung über Deutsche Sprachprüfungen für das Studium an deutschen Hochschulen vom 25. Juni 2004 (z. B. Zentrale Oberstufenprüfung [ZOP], TestDaF, wobei keine der Teilleistungen unter 3 liegen darf) als Immatrikulationsvoraussetzung für die deutschsprachigen grundständigen Studiengänge und die deutschsprachigen Aufbau- und Masterstudiengänge nachweisen.";

window.HZB_INHALTE = {
  start: "ausgangslage",

  meta: {
    titel: "Interesse an einem Studium an der HKA?",
    kicker: "Hochschulzugang für Internationals",
    einleitung:
      "Du kommst aus dem Ausland und möchtest an der Hochschule Karlsruhe studieren? Großartig! Schauen wir mal, welches Angebot zu dir passt."
  },

  /*
   * Diese beiden ausführlichen Erklärungen werden bei den Antworten
   * „Direkte HZB“ und „Indirekte HZB“ angezeigt.
   */
  uebersichten: {
    titel: "Direkte oder indirekte Hochschulzugangsberechtigung",
    einleitung:
      "Ein Schulzeugnis, mit dem man sich auf einen Studienplatz bewerben kann, ist eine Hochschulzugangsberechtigung. Doch woher weiß man, welche Hochschulzugangsberechtigung man genau hat?",

    direkt: {
      titel: "Direkte Hochschulzugangsberechtigung",
      status: "Du kannst dich grundsätzlich direkt auf einen Studienplatz bewerben.",
      zusammenfassung:
        "Dein Schulabschluss wird in Deutschland als direktes Äquivalent zur deutschen Hochschulzugangsberechtigung anerkannt. Wenn du außerdem die nötigen Deutschkenntnisse nachweisen kannst, kannst du dich für einen Platz in deinem Traumstudiengang an der Hochschule Karlsruhe bewerben.",
      wege: [],
    },

    indirekt: {
      titel: "Indirekte Hochschulzugangsberechtigung",
      status: "Du kannst dich grundsätzlich nicht direkt auf einen Studienplatz bewerben.",
      zusammenfassung:
        "Dein Schulabschluss allein reicht nicht für den direkten Studienstart in Deutschland aus. Bevor du dich auf einen Platz in deinem Traumstudiengang bewerben kannst, musst du eine Hochschulzugangsberechtigung erwerben, die in Deutschland anerkannt wird.",
	},

    hinweis:
      "Entscheidend ist nicht deine Staatsangehörigkeit, sondern die Art und Herkunft deines Schulabschlusses. Wenn du herausfinden möchtest, ob du mit deinem Schulzeugnis eine direkte oder eine indirekte Hochschulzugangsberechtigung hast, kannst du dich in der Zulassungsdatenbank des DAAD orientieren. Aber vergiss nicht: Am Ende entscheidet die Hochschule Karlsruhe, ob dein Schulzeugnis als direkte oder indirekt Hochschulzugangsberechtigung gilt.",
    quelleText: "Zulassungsdatenbank – DAAD",
    quelle:
      "https://www.daad.de/de/in-deutschland-studieren/voraussetzungen/zulassungsdatenbank/"
  },

  /*
   * Jeder Eintrag unter „schritte“ ist entweder eine Frage oder ein Ergebnis.
   * Bei einer Antwort legt „weiter“ fest, welcher Schritt als Nächstes erscheint.
   */
  schritte: {
    ausgangslage: {
      typ: "frage",
      bereich: "Ausgangspunkt",
      frage:
        "Hast du einen Schulabschluss, mit dem du in deinem Heimatland studieren darfst?",
      erklaerung: {
        bereich: "",
        titel: "Was bedeutet das?",
        text:
          "Damit wir einschätzen können, ob wir ein passendes Angebot für dich haben, müssen wir wissen, ob du in deinem Heimatland studieren darfst.\n Reicht das Schulzeugnis, welches du hast, um in deinem Heimatland an einer Universität oder Hochschule zu studieren?"
      },
      antworten: [
        {
          text: "Ja",
          weiter: "hzb-art",
        },
        {
          text: "Nein",
          weiter: "kein-studium",
        }
      ]
    },

    "hzb-art": {
      typ: "frage",
      bereich: "Art der Hochschulzugangsberechtigung",
      frage: "Hast du eine direkte oder eine indirekte Hochschulzugangsberechtigung?",
      erklaerung: {
		  uebersicht: "beide"
	  },
      antworten: [
        {
          text: "Direkte Hochschulzugangs\u00ADberechtigung",
          weiter: "mmt-deutsch",
          erklaerung: {
            uebersicht: "direkt"
          }
        },
        {
          text: "Indirekte Hochschulzugangs\u00ADberechtigung",
          weiter: "indirekt-zulassung",
          erklaerung: {
            uebersicht: "indirekt"
          }
        }
      ]
    },

    "mmt-deutsch": {
      typ: "frage",
      bereich: "Deutschkenntnisse",
      frage: "Wie gut sprichst du Deutsch?",
      erklaerung: {
        bereich: "Deutschkenntnisse",
        titel: "Deutschkenntnisse",
        text:
          "Je nach deinem Studienwunsch musst du bei der Bewerbung Deutschkenntnisse auf B2- oder C1-Niveau nachweisen. Weiterführende Informationen zu den spezifischen Sprachanforderungen der einzelnen Studiengänge findest du hier:<br><br>",
		  link: "bilder/platzhalter.gif",
		  linkText: "Weiterführende Informationen"
      },
      antworten: [
        {
          text: "Ich habe ein B1-Zertifikat oder niedriger.",
          weiter: "kein-studium",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau B1",
            text: "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau B1."
          }
        },
        {
          text: "Ich habe ein B2-Zertifikat.",
          weiter: "direkt-b2-form",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau B2",
            text: "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau B2."
          }
        },
        {
          text: "Ich habe ein C1-Zertifikat.",
          weiter: "direkt-b2-form",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau C1",
            text: "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau C1."
          }
        }
      ]
    },

    "sonstige-deutsch": {
      typ: "frage",
      bereich: "Deutschkenntnisse",
      frage:
        "Werden die nach der Zulassungs- und Immatrikulationsordnung erforderlichen Deutschkenntnisse nachgewiesen?",
      erklaerung: {
        bereich: "Deutschkenntnisse",
        titel: "Deutschkenntnisse gemäß ZIO",
        text: HZB_ZIO_ERKLAERUNG,
        link:
          "https://www.h-ka.de/fileadmin/Hochschule_Karlsruhe_HKA/Satzungen_Ordnungen/HKA_ZH_Zulassungs-Immatrikulations-O_V4_2022-07-22.pdf",
        linkText: "Zulassungs- und Immatrikulationsordnung der HKA"
      },
      antworten: [
        {
          text: "Nein",
          weiter: "kein-studium",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Kein Nachweis gemäß ZIO",
            text:
              "Die studieninteressierte Person kann die erforderlichen Deutschkenntnisse gemäß § 3 Abs. 4 der Zulassungs- und Immatrikulationsordnung nicht nachweisen."
          }
        },
        {
          text: "Ja",
          weiter: "studium-moeglich",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Nachweis gemäß ZIO",
            text:
              "Die studieninteressierte Person kann die erforderlichen Deutschkenntnisse gemäß § 3 Abs. 4 der Zulassungs- und Immatrikulationsordnung nachweisen."
          }
        }
      ]
    },

    "indirekt-zulassung": {
      typ: "frage",
      bereich: "Studiengang",
      frage: "Ist dein Wunschstudiengang zulassungsfrei oder zulassungsbeschränkt?",
      erklaerung: {
        bereich: "Erklärung",
        titel: "Zulassungsfrei oder zulassungsbeschränkt?",
        text:
          "Bei zulassungsfreien Studiengängen gibt es keine begrenzte Anzahl an Studienplätzen. Wenn du alle Zugangsvoraussetzungen erfüllst und dich fristgerecht bewirbst, kannst du einen Studienplatz erhalten.\n Bei zulassungsbeschränkten Studiengängen steht dagegen nur eine begrenzte Anzahl an Studienplätzen zur Verfügung. Deshalb werden die Studienplätze in einem Auswahlverfahren vergeben. Auch wenn du alle Zugangsvoraussetzungen erfüllst, ist ein Studienplatz nicht garantiert.\n\n Ob dein Wunschstudiengang zulassungsfrei oder zulassungsbeschränkt ist, erfährst du hier:",
        link: "bilder/platzhalter.gif",
	    linkText: "Weiterführende Informationen"
      },
      antworten: [
        {
          text: "Zulassungsfreier Studiengang",
          weiter: "frei-deutsch",
          erklaerung: {
            bereich: "Studiengang",
            titel: "Zulassungsfreie Studiengänge",
            text:
              "Zulassungsfreie Studiengänge an der HKA:\n\n1. Automotive / Aerospace Engineering (MMT)\n2. Baumanagement und Baubetrieb (AB)\n3. Data Science (IWI)\n4. Electrical Engineering and Information Technology (EIT)\n5. Elektrotechnik mit den Vertiefungsrichtungen Automatisierungstechnik, Energietechnik & Erneuerbare Energien, Informationstechnik (EIT)\n6. Green Technology Management (EIT & MMT)\n7. Künstliche Intelligenz in den Ingenieurwissenschaften (EIT & MMT)\n8. Maschinenbau (MMT)\n9. Mechatronik (MMT)\n10. Quantencomputing (EIT)\n11. Umweltingenieurwesen (Bau) (AB)\n12. Verkehrssystemmanagement (IMM)\n\nGemäß § 8 HZaBVO kann ein Probestudium nur für zulassungsfreie Studiengänge als hochschulindividuelles Zugangsverfahren dienen.",
            link: "https://www.h-ka.de/bewerben-fuer-bachelor/bewerben#c60958",
            linkText: "Übersicht: Zulassungsfreie Studiengänge an der HKA"
          }
        },
        {
          text: "Zulassungsbeschränkter Studiengang",
          weiter: "beschraenkt-deutsch",
          erklaerung: {
            bereich: "Studiengang",
            titel: "Zulassungsbeschränkte Studiengänge",
            text:
              "Zulassungsbeschränkte Studiengänge an der HKA:\n\n1. Bauingenieurwesen (AB)\n2. Informatik (IWI)\n3. Internationales IT Business (IWI)\n4. Betriebswirtschaftslehre (W)\n5. Medieninformatik (IWI)\n6. Wirtschaftsinformatik (IWI)\n7. Wirtschaftsingenieurwesen (W)",
            link: "https://www.h-ka.de/bewerben-fuer-bachelor/bewerben#c60955",
            linkText: "Übersicht: Zulassungsbeschränkte Studiengänge an der HKA"
          }
        }
      ]
    },

    "frei-deutsch": {
      typ: "frage",
      bereich: "Deutschkenntnisse",
      frage: "Wie gut sprichst du Deutsch?",
	  erklaerung: {
        bereich: "Deutschkenntnisse",
        titel: "Deutschkenntnisse",
        text:
          "Je nach deinem Studienwunsch musst du bei der Bewerbung Deutschkenntnisse auf B2- oder C1-Niveau nachweisen. Ab Deutschkenntnissen auf Niveau B1 können wir dir helfen, die nötigen Deutschkenntnisse für dein Wunschstudium zu erwerben. Weiterführende Informationen zu den spezifischen Sprachanforderungen der einzelnen Studiengänge findest du hier:<br><br>",
		  link: "bilder/platzhalter.gif",
		  linkText: "Weiterführende Informationen"
      },
      antworten: [
        {
          text: "Ich habe ein A2-Zertifikat.",
          weiter: "kein-studium",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau A2",
            text: "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau A2."
          }
        },
        {
          text: "Ich habe ein B1-Zertifikat.",
          weiter: "frei-b1-form",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau B1",
            text: "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau B1."
          }
        },
        {
          text: "Ich habe ein B2-Zertifikat.",
          weiter: "frei-b2-form",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau B1",
            text:
              "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau B1. Anschließend wird zwischen einer Teilnahme vor Ort und einer Online-Teilnahme unterschieden."
          }
        },
        {
          text: "Ich habe ein C1-Zertifikat.",
          weiter: "hzp-hka",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau B2",
            text: "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau B2."
          }
        }
      ]
    },

    "frei-b1-form": {
      typ: "frage",
      bereich: "In Präsenz oder online?",
      frage: "Möchtest du an der Hochschule Karlsruhe oder online Deutsch lernen?",
      antworten: [
        {
          text: "An der Hochschule Karlsruhe",
          weiter: "dint-regulaer",
          erklaerung: {
            bereich: "Teilnahmeform",
            titel: "Vor Ort",
            text: "Das Angebot wird in Präsenz an der HKA durchgeführt."
          }
        },
        {
          text: "Online",
          weiter: "vorsprung-ik",
          erklaerung: {
            bereich: "Teilnahmeform",
            titel: "Online",
            text: "Das Angebot wird ortsungebunden online durchgeführt."
          }
        }
      ]
    },
	
	"frei-b2-form": {
	  typ: "frage",
	  bereich: "Erforderliche Deutschkenntnisse",
	  frage: "Welche Deutschkenntnisse brauchst du für dein Wunschstudium?",
	  	erklaerung: {
	    bereich: "Sprachliche Studierfähigkeit",
        titel: "Erforderliche Deutschkenntnisse",
        text:
          "Je nach deinem Studienwunsch musst du bei der Bewerbung Deutschkenntnisse auf B2- oder C1-Niveau nachweisen. Weiterführende Informationen zu den spezifischen Sprachanforderungen der einzelnen Studiengänge findest du hier:<br><br>",
		  link: "bilder/platzhalter.gif",
		  linkText: "Weiterführende Informationen"
      },
	  antworten: [
	    {
			text: "Ich brauche ein B2-Zertifikat.",
			weiter: "hzp-hka"
		},
		{
			text: "Ich brauche ein C1-Zertifikat.",
			weiter: "beschraenkt-b2-form"
		},
	  ]
	},

    "beschraenkt-deutsch": {
      typ: "frage",
      bereich: "Deutschkenntnisse",
      frage: "Wie gut sprichst du Deutsch?",
	  erklaerung: {
	    bereich: "Deutschkenntnisse",
        titel: "Erforderliche Deutschkenntnisse",
        text:
          "Je nach deinem Studienwunsch musst du bei der Bewerbung Deutschkenntnisse auf B2- oder C1-Niveau nachweisen. Ab Deutschkenntnissen auf Niveau B1 können wir dir helfen, die nötigen Deutschkenntnisse für dein Wunschstudium zu erwerben. Weiterführende Informationen zu den spezifischen Sprachanforderungen der einzelnen Studiengänge findest du hier:<br><br>",
		  link: "bilder/platzhalter.gif",
		  linkText: "Weiterführende Informationen"
      },
      antworten: [
        {
          text: "Ich habe ein A2-Zertifikat.",
          weiter: "kein-studium",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Keine Deutschkenntnisse",
            text: "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau A2."
          }
        },
        {
          text: "Ich habe ein B1-Zertifikat.",
          weiter: "beschraenkt-b1-form",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau B1",
            text: "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau B1."
          }
        },
        {
          text: "Ich habe ein B2-Zertifikat.",
          weiter: "frei-b2-form",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau B2",
            text:
              "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau B2."
          }
        },
        {
          text: "Ich habe ein C1-Zertifikat.",
          weiter: "beschraenkt-c1-form",
          erklaerung: {
            bereich: "Deutschkenntnisse",
            titel: "Sprachniveau C1",
            text:
              "Die studieninteressierte Person hat Deutschkenntnisse auf Niveau C1."
          }
        }
      ]
    },

    "beschraenkt-b1-form": {
      typ: "frage",
      bereich: "In Präsenz oder online?",
      frage: "Möchtest du in Deutschland oder online Deutsch lernen?",
      antworten: [
        {
          text: "In Deutschland",
          weiter: "studienkolleg",
          erklaerung: {
            bereich: "Teilnahmeform",
            titel: "Vor Ort",
            text: "Das Angebot wird in Präsenz durchgeführt."
          }
        },
        {
          text: "Online",
          weiter: "vorsprung-ik",
          erklaerung: {
            bereich: "Teilnahmeform",
            titel: "Online",
            text: "Das Angebot wird ortsungebunden online durchgeführt."
          }
        }
      ]
    },

    "beschraenkt-b2-form": {
      typ: "frage",
      bereich: "In Präsenz oder online?",
      frage: "Möchtest du in Deutschland oder online Deutsch lernen?",
      antworten: [
        {
          text: "In Deutschland",
          weiter: "studienkolleg",
          erklaerung: {
            bereich: "Teilnahmeform",
            titel: "Vor Ort",
            text: "Das Angebot wird in Präsenz durchgeführt."
          }
        },
        {
          text: "Online",
          weiter: "vorsprung",
          erklaerung: {
            bereich: "Teilnahmeform",
            titel: "Online",
            text: "Das Angebot wird ortsungebunden online durchgeführt."
          }
        }
      ]
    },
	
    "beschraenkt-c1-form": {
      typ: "frage",
      bereich: "Test für Ausländische Studierende",
      frage: "Hast du bereits den TestAS abgelegt?",
      antworten: [
        {
          text: "Ja, ich habe den TestAS erfolgreich abgelegt.",
          weiter: "hzp-hka",
        },
		{
          text: "Nein, ich habe den TestAS noch nicht erfolgreich abgelegt.",
          weiter: "testas-hka",
        },
      ]
    },

	 "direkt-b2-form": {
      typ: "frage",
      bereich: "Erforderliche Deutschkenntnisse",
      frage: "Welche Deutschkenntnisse brauchst du für dein Wunschstudium?",
	  erklaerung: {
	    bereich: "Sprachliche Studierfähigkeit",
        titel: "Erforderliche Deutschkenntnisse",
        text:
          "Bei der Bewerbung musst du deine sprachliche Studierfähigkeit durch eine erfolgreich abgelegte Deutsche Sprachprüfung für den Hochschulzugang (DSH) nachweisen. Je nach deinem Studienwunsch brauchst du eine DSH-1, DSH-2 oder DSH-3. Weiterführende Informationen zur DSH an der Hochschule Karlsruhe und den studiengangspezifischen Sprachanforderungen findest du hier:<br><br>",
		  link: "https://www.h-ka.de/dsh",
		  linkText: "Deutsche Sprachprüfung für den Hochschulzugang (DSH)"
      },
      antworten: [
        {
          text: "Ich brauche eine DSH-1.",
          weiter: "dsh-1-form",
        },
		{
          text: "Ich brauche eine DSH-2.",
          weiter: "dsh-2-form",
        },
		  {
          text: "Ich brauche eine DSH-3.",
          weiter: "dsh-3-form",
        },
      ]
    },
	  
	"dsh-1-form": {
      typ: "frage",
      bereich: "Deutsche Sprachprüfung für den Hochschulzugang (DSH)",
      frage: "Hast du bereits das nötige DSH-Zeugnis oder ein passendes Äquivalent?",
		erklaerung: {
	    bereich: "DSH und Äquivalente",
        titel: "Welche Äquivalente zur DSH werden anerkannt?",
        text:
          "Die Liste der anerkannten Äquivalente zu den unterschiedlichen DSH-Niveaustufen findest du in der Zulassungs- und Immatrikulationsordnung der Hochschule Karlsruhe. Falls du dir unsicher bist, ob dein Zertifikat anerkannt wird, kannst du uns eine E-Mail an <a href='mailto:beratungifs@h-ka.de'>beratungifs@h-ka.de</a> schreiben. Wir beraten dich gern persönlich.<br><br>",
		  link: "https://www.h-ka.de/studieren/studium-organisieren/studienordnungen-satzungen/zulassungssatzungen",
		  linkText: "Zulassungssatzungen"
      },
      antworten: [
        {
          text: "Ja",
          weiter: "esi",
        },
		{
          text: "Nein",
          weiter: "dsh-hka",
        },
      ]
    },

	"dsh-2-form": {
      typ: "frage",
      bereich: "Deutsche Sprachprüfung für den Hochschulzugang (DSH)",
      frage: "Hast du bereits das nötige DSH-Zeugnis oder ein passendes Äquivalent?",
	  erklaerung: {
	    bereich: "DSH und Äquivalente",
        titel: "Welche Äquivalente zur DSH werden anerkannt?",
        text:
          "Die Liste der anerkannten Äquivalente zu den unterschiedlichen DSH-Niveaustufen findest du in der Zulassungs- und Immatrikulationsordnung der Hochschule Karlsruhe. Falls du dir unsicher bist, ob dein Zertifikat anerkannt wird, kannst du uns eine E-Mail an <a href='mailto:beratungifs@h-ka.de'>beratungifs@h-ka.de</a> schreiben. Wir beraten dich gern persönlich.<br><br>",
		  link: "https://www.h-ka.de/studieren/studium-organisieren/studienordnungen-satzungen/zulassungssatzungen",
		  linkText: "Zulassungssatzungen"
      },
      antworten: [
        {
          text: "Ja",
          weiter: "studium-moeglich",
        },
		{
          text: "Nein",
          weiter: "dsh-hka",
        },
      ]
    },

	"dsh-3-form": {
      typ: "frage",
      bereich: "Deutsche Sprachprüfung für den Hochschulzugang (DSH)",
      frage: "Hast du bereits das nötige DSH-Zeugnis oder ein passendes Äquivalent?",
	  erklaerung: {
	    bereich: "DSH und Äquivalente",
        titel: "Welche Äquivalente zur DSH werden anerkannt?",
        text:
          "Die Liste der anerkannten Äquivalente zu den unterschiedlichen DSH-Niveaustufen findest du in der Zulassungs- und Immatrikulationsordnung der Hochschule Karlsruhe. Falls du dir unsicher bist, ob dein Zertifikat anerkannt wird, kannst du uns eine E-Mail an <a href='mailto:beratungifs@h-ka.de'>beratungifs@h-ka.de</a> schreiben. Wir beraten dich gern persönlich.<br><br>",
		  link: "https://www.h-ka.de/studieren/studium-organisieren/studienordnungen-satzungen/zulassungssatzungen",
		  linkText: "Zulassungssatzungen"
      },
      antworten: [
        {
          text: "Ja",
          weiter: "studium-moeglich",
        },
		{
          text: "Nein",
          weiter: "dsh-hka",
        },
      ]
    },

    /* ============================ ERGEBNISSE ============================ */

    "kein-studium": {
      typ: "ergebnis",
      bereich: "Empfehlung",
      titel: "Gut vorbereitet ins Studium starten",
      beschreibung: "Für ein erfolgreiches Studium an der Hochschule Karlsruhe sind gute Deutschkenntnisse wichtig. Auf Grundlage deiner Angaben empfehlen wir dir, zunächst weiter Deutsch zu lernen und dich so auf dein Wunschstudium in Deutschland vorzubereiten.\n\n Du möchtest trotzdem schon jetzt mit dem Studium beginnen oder wissen, welche alternativen Möglichkeiten es für dich gibt? Schreib' uns doch eine E-Mail an <a href='mailto:beratungifs@h-ka.de'>beratungifs@h-ka.de</a>! Wir beraten dich gern persönlich und prüfen gemeinsam mit dir, welcher Weg für dich infrage kommt.\n\n Wir wünschen dir viel Erfolg auf deinem weiteren Bildungsweg!",
      farbe: "#d72305"
    },

	 "dsh-hka": {
      typ: "ergebnis",
      bereich: "Empfehlung",
      titel: "Die DSH an der Hochschule Karlsruhe",
      beschreibung: "Auf Grundlage deiner Angaben fehlt dir aktuell das nötige DSH-Zeugnis bzw. ein anerkanntes Äquivalent, um die nötigen Sprachkenntnisse für dein Wunschstudium nachzuweisen.\n\n Wusstest du, dass du die DSH bei uns an der Hochschule Karlsruhe ablegen kannst? Schreib' uns doch eine E-Mail an <a href='mailto:beratungifs@h-ka.de'>beratungifs@h-ka.de</a>! Wir beraten dich gern persönlich und prüfen gemeinsam mit dir, wie du schnellstmöglich in dein Studium an der Hochschule Karlsruhe starten kannst!",
      farbe: "#d72305"
	  link: "https://www.h-ka.de/dsh",
	  linkText: "https://www.h-ka.de/dsh"
    },

    "esi": {
      typ: "ergebnis",
      bereich: "Programm",
      titel: "erfolgreich starten international",
      beschreibung:
        "Ein Studium in einem neuen Land bringt viele spannende Erfahrungen, aber auch Herausforderungen mit sich.\n\n Mit <em>erfolgreich starten international</em> unterstützen wir dich dabei, erfolgreich in dein Studium zu starten.\n\n <em>erfolgreich starten international</em> ermöglicht dir, dein erstes Studiensemester auf zwei Semester aufzuteilen. So hast du mehr Zeit, dich mit den Studieninhalten vertraut zu machen.\n Gleichzeitig kannst du in begleitenden Deutschkursen deine Sprachkenntnisse weiterentwickeln und dich auf die sprachlichen Anforderungen des Hochschulalltags vorbereiten.\n\n Informiere dich über das Programm und die Teilnahmebedingungen hier:",
	  farbe: "#d72305",
	  link: "bilder/platzhalter.gif",
	  linkText: "Weiterführende Informationen"
    },      	
    "studium-moeglich": {
      typ: "ergebnis",
      bereich: "Gute Nachrichten!",
      titel: "Die Bewerbung auf einen Studienplatz ist unter diesen Voraussetzungen ohne zusätzliche Schritte möglich.",
      beschreibung: "Auf Grundlage deiner Angaben ist eine Bewerbung für einen Studienplatz an der Hochschule Karlsruhe uneingeschränkt möglich.\n Bitte beachte, dass für die Zulassung in deinem Wunschstudiengang weitere Zugangsvoraussetzungen\n gelten können.\n\n Informiere dich über die nächsten Schritte hier:",
      farbe: "#d72305",
	  link: "https://www.h-ka.de/bewerben-fuer-bachelor/bewerben",
	  linkText: "Weiterführende Informationen zur Bewerbung"
    },

    "dint-frueh": {
      typ: "ergebnis",
      bereich: "Programm",
      titel: "Deutsch intensiv",
      beschreibung:
        "Deutsch intensiv (DINT) ist ein Probestudium gemäß § 8 HZaBVO.\n\nDie Studieninteressierten kommen bereits mit Sprachkenntnissen auf A2-Niveau an die Hochschule Karlsruhe. Im Rahmen der regulären IFS-Intensivkurse werden sie zu Semesterbeginn auf das Niveau B1.1 gebracht. Mit Beginn der Vorlesungszeit startet das reguläre DINT-Programm.",
      link: "https://www.h-ka.de/deutsch-intensiv",
      linkText: "Deutsch intensiv",
      farbe: "#d72305"
    },

    "dint-regulaer": {
      typ: "ergebnis",
      bereich: "Programm",
      titel: "Deutsch intensiv",
      beschreibung:
        "Mit <em>Deutsch intensiv</em> kannst du bereits mit Deutschkenntnissen auf B1-Niveau in dein Wunschstudium starten. Gleichzeitig verbesserst du in den Deutschkursen des Instituts für Fremdsprachen deine Sprachkenntnisse und bereitest dich gezielt für auf die sprachlichen Anforderungen deines Studiums vor.\n\n Informiere dich über <em>Deutsch intensiv</em> und die Teilnahmevoraussetzungen hier:",
      link: "https://www.h-ka.de/deutsch-intensiv",
      linkText: "Weiterführende Informationen",
      farbe: "#d72305"
    },

    "vorsprung": {
      typ: "ergebnis",
      bereich: "Programm",
      titel: "VORsprung",
      beschreibung:
	    "Du möchtest in Deutschland studieren und brauchst Deutschkenntnisse auf C1-Niveau, hast aber erst ein B2-Zertifikat? Dann könnte VORsprung genau das Richtige für dich sein!\n\n Mit VORsprung kannst du dich kostenfrei und vollständig online auf ein Studium in Deutschland vorbereiten. In VORsprung vertiefst du deine Sprachkenntnisse und bereitest dich in fachlichen Kursen gezielt auf die Anforderungen deines Wunschstudiums vor. Informationen dazu, wie du von zuhause aus deine Deutschkenntnisse verbessern, dich fachlich auf dein Wunschstudium vorbereiten und deinem Studienziel einen großen Schritt näherkommen kannst, findest du hier:",
      link:
        "https://www.daad.de/de/der-daad/querschnittsdimensionen-themen/digitalisierung/vorsprung/",
      linkText: "VORsprung: Mit digitaler Vorbereitung zum MINT-Studium",
      farbe: "#d72305"
    },

    "vorsprung-ik": {
      typ: "ergebnis",
      bereich: "Programm",
      titel: "VORsprung mit Intensivkurs",
      beschreibung:
        "Du möchtest in Deutschland studieren und brauchst Deutschkenntnisse auf C1-Niveau, hast aber erst ein B1-Zertifikat? Dann könnte VORsprung genau das Richtige für dich sein!\n\n Mit VORsprung kannst du dich kostenfrei und vollständig online auf ein Studium in Deutschland vorbereiten. Das Programm beginnt für dich mit einem vierwöchigen Deutsch-Intensivkurs. Anschließend vertiefst du deine Sprachkenntnisse und bereitest dich in fachlichen Kursen gezielt auf die Anforderungen deines Wunschstudiums vor. Informationen dazu, wie du von zuhause aus deine Deutschkenntnisse verbessern, dich fachlich auf dein Wunschstudium vorbereiten und deinem Studienziel einen großen Schritt näherkommen kannst, findest du hier:",
      link:
        "https://www.daad.de/de/der-daad/querschnittsdimensionen-themen/digitalisierung/vorsprung/",
      linkText: "VORsprung: Mit digitaler Vorbereitung zum MINT-Studium",
      farbe: "#d72305"
    },
	
	"hzp-hka": {
      typ: "ergebnis",
      bereich: "Passendes Angebot",
      titel: "Hochschulindividuelle Zugangsprüfung",
      beschreibung:
        "Du möchtest an der Hochschule Karlsruhe studieren und erfüllst die sprachlichen Zugangsvoraussetzungen, aber dein ausländischer Schulabschluss berechtigt dich nicht zum direkten Hochschulzugang in Deutschland?\n Dann könnte unsere hochschulindividuelle Zugangsprüfung (HZP) genau das Richtige für dich sein!\n\n Mit der HZP bietet dir die Hochschule Karlsruhe eine Alternative zum Studienkolleg und zur Feststellungsprüfung. Dabei kannst du deine Eignung für dein Wunschstudium durch den Studieneignungstest TestAS und eine mündliche Prüfung unter Beweis stellen. Wenn du die HZP erfolgreich bestehst, erhältst du eine Studienberechtigung für deinen Wunschstudiengang an der Hochschule Karlsruhe. So kannst du deinen Weg ins Studium auch ohne den Besuch eines Studienkollegs beginnen.\n\n Weiterführende Informationen zur HZP an der Hochschule Karlsruhe findest du hier:",
      farbe: "#d72305",
	  link: "bilder/platzhalter.gif",
	  linkText: "Weiterführende Informationen"
	},
	
    "testas-hka": {
      typ: "ergebnis",
      bereich: "Passendes Angebot",
      titel: "Erst den TestAS, dann die hochschulindividuelle Zugangsprüfung",
      beschreibung:
        "Du möchtest an der Hochschule Karlsruhe studieren und erfüllst die sprachlichen Zugangsvoraussetzungen, aber dein ausländischer Schulabschluss berechtigt dich nicht zum direkten Hochschulzugang in Deutschland?\n Dann könnte unsere hochschulindividuelle Zugangsprüfung (HZP) genau das Richtige für dich sein!\n\n Mit der HZP bietet dir die Hochschule Karlsruhe eine Alternative zum Studienkolleg und zur Feststellungsprüfung. Voraussetzung für die Teilnahme an der HZP ist ein erfolgreich absolvierter TestAS (Test für Ausländische Stduierende).\n\n Der TestAS ist ein Studieneignungstest, der deine allgemeinen und fachspezifischen Fähigkeiten für ein Studium überprüft. Er besteht aus einem Kernmodul und einem Fachmodul, das zu deinem Wunschstudiengang passen muss. Welches Fachmodul du für deinen gewünschten Studiengang benötigst, kannst du auf unserer Website nachsehen.\n\n Wenn du die HZP erfolgreich bestehst, erhältst du eine Studienberechtigung für deinen Wunschstudiengang an der Hochschule Karlsruhe. So kannst du deinen Weg ins Studium auch ohne den Besuch eines Studienkollegs beginnen.\n\n Weiterführende Informationen zur HZP und den erforderlichen TestAS-Fachmodulen findest du hier:",
      farbe: "#d72305",
	  link: "bilder/platzhalter.gif",
	  linkText: "Weiterführende Informationen"
	},

    "studienkolleg": {
      typ: "ergebnis",
      bereich: "Kein passendes Angebot",
      titel: "Besuch eines Studienkolleg",
      beschreibung:
        "Auf Grundlage deiner Angaben können wir dir an der Hochschule Karlsruhe aktuell leider kein passendes Angebot für deinen Weg ins Studium machen.\n\n Um in Deutschland studieren zu können, musst du zunächst ein Studienkolleg besuchen und die Feststellungsprüfung erfolgreich ablegen.\n\n Wir wünschen dir viel Erfolg auf deinem weiteren Weg und hoffen, dich bald an der Hochschule Karlsruhe willkommen heißen zu dürfen!",
      farbe: "#d72305"
    }
  }
};
