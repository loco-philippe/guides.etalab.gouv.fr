(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{434:function(e,s,t){"use strict";t.r(s);var r=t(43),n=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"phase-de-concertation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#phase-de-concertation"}},[e._v("#")]),e._v(" Phase de concertation")]),e._v(" "),t("div",{staticClass:"lexique"},[t("p",{staticClass:"title"},[e._v("Lexique : Phase de concertation")]),t("p",[e._v("La phase de concertation est la phase centrale de la création d’un schéma de données. C'est l’étape où plusieurs parties prenantes (producteurs, réutilisateurs, experts métiers et techniques) se rassemblent pour définir et spécifier les éléments essentiels à la constitution de ce schéma.")])]),t("p",[e._v("Pour spécifier un schéma de données, il est nécessaire de définir :")]),e._v(" "),t("ul",[t("li",[e._v("les champs ;")]),e._v(" "),t("li",[e._v("les types associés de ces champs (une date, un nombre, une chaîne de caractère etc.) ;")]),e._v(" "),t("li",[e._v("les contraintes de chaque champ (entier positif, texte dans une liste fermée etc.) ;")]),e._v(" "),t("li",[e._v("la description de chaque champ ;")]),e._v(" "),t("li",[e._v("une documentation associée au schéma de données décrivant le contexte, les acteurs, les cas d’usages.")])]),e._v(" "),t("h2",{attrs:{id:"procedure-de-collaboration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#procedure-de-collaboration"}},[e._v("#")]),e._v(" Procédure de collaboration")]),e._v(" "),t("p",[e._v("Nous conseillons de mener cette phase de concertation en travaillant sur un document partagé, accessible en ligne, tel qu’un "),t("a",{attrs:{href:"https://framapad.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Framapad"),t("OutboundLink")],1),e._v(" ou Google Doc. L’important est que plusieurs contributeurs puissent contribuer (modifier ou mettre des commentaires) sans avoir besoin d’être présents physiquement ou de recevoir des versions intermédiaires par e-mails.")]),e._v(" "),t("p",[e._v("En complément de ce document partagé, nous vous conseillons d’organiser plusieurs réunions afin de débattre du schéma de données à produire. L’implication d’une multitude d’acteurs est clé : vous devez rassembler des producteurs, experts métiers, experts techniques et réutilisateurs. La richesse des profils et des enjeux permettra d’aboutir à la solution la plus adaptée.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Référencer votre schéma")]),e._v(" "),t("p",[e._v("Référencer votre schéma sur "),t("a",{attrs:{href:"https://schema.data.gouv.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr"),t("OutboundLink")],1),e._v(" vous permettra de bénéficier de conseils de la part d’Etalab et de ses partenaires institutionnels et associatifs. Découvrez comment "),t("a",{attrs:{href:"/producteurs-schemas/integration-schema-datagouv"}},[e._v("référencer votre schéma en cours de concertation")]),e._v(".")])]),e._v(" "),t("h2",{attrs:{id:"grands-principes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#grands-principes"}},[e._v("#")]),e._v(" Grands principes")]),e._v(" "),t("p",[e._v("Nous avons listé ci-dessous plusieurs conseils qui vous permettront de construire un schéma de données de qualité.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Profiter de l’existant.")]),e._v(" De nombreux standards existent déjà, qu’ils concernent des formats de données ou des formats de champs. Certains standards sont devenus incontournables aujourd’hui, comme "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/ISO_8601",target:"_blank",rel:"noopener noreferrer"}},[e._v("ISO-8601"),t("OutboundLink")],1),e._v(" pour les dates ou "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/WGS_84",target:"_blank",rel:"noopener noreferrer"}},[e._v("WGS 84"),t("OutboundLink")],1),e._v(" pour les coordonnées géographiques.")]),e._v(" "),t("li",[t("strong",[e._v("Identifier et associer l’écosystème.")]),e._v(" Les personnes/organisations que vous associez sont la meilleure garantie d’un schéma de données efficace et largement adopté, permettant d'aboutir à un véritable standard :\n"),t("ul",[t("li",[e._v("D'un côté les producteurs, qui connaissent la réalité de leurs données, de la collecte, etc. et qui ont leurs propres usages.")]),e._v(" "),t("li",[e._v("De l'autre les usagers, avec leurs besoins et leurs difficultés, qu’ils soient déjà connus, « sous le radar » ou en devenir.")])])]),e._v(" "),t("li",[t("strong",[e._v("Prendre le temps.")]),e._v(" Un schéma de données est susceptible de concerner beaucoup de producteurs et d’usagers. Sa modification peut avoir un impact important. Il est donc crucial de prendre le temps d’obtenir tous les retours avant de publier un schéma utilisable par le plus grand nombre. Un schéma de données devrait être publié quand il est prêt, non pas en fonction d’un impératif de délai.")]),e._v(" "),t("li",[t("strong",[e._v("Lever les implicites et les ambiguïtés.")]),e._v(" Le diable est dans les détails… Toutes les spécifications d’un schéma de données doivent être les plus claires possibles, y compris pour des cas/données qui n’existent pas encore mais pourraient apparaître à l’avenir.")]),e._v(" "),t("li",[t("strong",[e._v("Éviter la redondance mais sans l’exclure absolument.")]),e._v(" Trois champs pour définir une latitude et une longitude ("),t("code",[e._v("latitude")]),e._v(", "),t("code",[e._v("longitude")]),e._v(", "),t("code",[e._v("lat-lon")]),e._v(") est inutilement redondant. Toutefois, préciser le nom d’une commune en plus de son code INSEE rend les données plus faciles à lire et à exploiter.")]),e._v(" "),t("li",[t("strong",[e._v("Utiliser des données pivot relevant d’un référentiel ouvert")]),e._v(" pour relier les données à d’autres données, par exemple l’utilisation du numéro SIREN pour identifier des organisations. Ce principe permet aussi d’éviter l’abondance de détails et d’aller à l’essentiel : l’obtention d’informations complémentaires se fera par le biais d’un autre référentiel.")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Exemples à votre disposition")]),e._v(" "),t("p",[e._v("Vous pouvez parcourir des fichiers de schémas sur "),t("a",{attrs:{href:"https://schema.data.gouv.fr",target:"_blank",rel:"noopener noreferrer"}},[e._v("schema.data.gouv.fr"),t("OutboundLink")],1),e._v(" pour faciliter votre travail. Consultez par exemple "),t("a",{attrs:{href:"https://schema.data.gouv.fr/etalab/schema-stationnement/latest.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("le schéma des lieux de stationnement"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("En complément, nous avons rédigé "),t("RouterLink",{attrs:{to:"/qualite/"}},[e._v("un guide dédié à la préparation de jeux de données")]),e._v(" qui pourrait vous être utile pour définir votre schéma.")],1)]),e._v(" "),t("h2",{attrs:{id:"points-de-sortie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#points-de-sortie"}},[e._v("#")]),e._v(" Points de sortie")]),e._v(" "),t("p",[e._v("À l’issue de cette phase, vous devriez :")]),e._v(" "),t("ul",[t("li",[e._v("Avoir réuni divers partenaires afin de collaborer sur votre schéma de données;")]),e._v(" "),t("li",[e._v("Avoir décidé des différents champs de votre schéma de données, leurs types et définitions et produit une documentation associée.")])])])}),[],!1,null,null,null);s.default=n.exports}}]);