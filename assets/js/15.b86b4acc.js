(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{379:function(e,s,n){e.exports=n.p+"assets/img/extrait_decision.393661b3.png"},380:function(e,s,n){e.exports=n.p+"assets/img/logigramme.d3610eed.png"},441:function(e,s,n){"use strict";n.r(s);var t=n(43),i=Object(t.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"pourquoi-et-comment-pseudonymiser-dans-l-administration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pourquoi-et-comment-pseudonymiser-dans-l-administration"}},[e._v("#")]),e._v(" Pourquoi et comment pseudonymiser dans l'administration")]),e._v(" "),t("h2",{attrs:{id:"qu-est-ce-que-la-pseudonymisation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#qu-est-ce-que-la-pseudonymisation"}},[e._v("#")]),e._v(" Qu'est-ce que la pseudonymisation ?")]),e._v(" "),t("h3",{attrs:{id:"quelle-difference-entre-anonymisation-et-pseudonymisation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quelle-difference-entre-anonymisation-et-pseudonymisation"}},[e._v("#")]),e._v(" Quelle différence entre anonymisation et pseudonymisation ?")]),e._v(" "),t("p",[e._v("Anonymisation et pseudonymisation sont deux notions parfois difficile à distinguer, et qui concernent toutes deux la "),t("strong",[e._v("protection des données à caractère personnel")]),e._v(".")]),e._v(" "),t("div",{staticClass:"lexique"},[t("p",{staticClass:"title"},[e._v("Lexique : Donnée à caractère personnel")]),t("p",[e._v("Toute information relative à une personne physique identifiée ou qui peut être identifiée, directement ou indirectement, par référence à un nom, un numéro d’identification (par exemple le numéro de sécurité sociale) ou à un ou plusieurs éléments qui lui sont propres.")])]),t("p",[e._v("Le "),t("a",{attrs:{href:"https://www.cnil.fr/fr/lanonymisation-des-donnees-un-traitement-cle-pour-lopen-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide de la CNIL sur l'anonymisation des données"),t("OutboundLink")],1),e._v(" présente bien la différence entre anonymisation et pseudonymisation :")]),e._v(" "),t("div",{staticClass:"lexique"},[t("p",{staticClass:"title"},[e._v("Lexique : Anonymisation")]),t("p",[e._v("« "),t("strong",[e._v("L’anonymisation")]),e._v(" est un traitement qui consiste à utiliser un ensemble de techniques de manière à rendre "),t("strong",[e._v("impossible, en pratique, toute identification de la personne")]),e._v(" par quelque moyen que ce soit et ce de "),t("strong",[e._v("manière irréversible")]),e._v(". »")])]),t("div",{staticClass:"lexique"},[t("p",{staticClass:"title"},[e._v("Lexique : Pseudonymisation")]),t("p",[e._v("« "),t("strong",[e._v("La pseudonymisation")]),e._v(" est un traitement de données personnelles réalisé de manière à ce qu'on ne puisse plus attribuer les données relatives à une personne physique sans avoir recours à des informations supplémentaires. En pratique "),t("strong",[e._v("la pseudonymisation consiste à remplacer les données directement identifiantes")]),e._v(" (nom, prénom, etc.) d’un jeu de données par des données indirectement identifiantes (alias, numéro dans un classement, etc.). [...] En pratique, il est toutefois bien souvent possible de retrouver l’identité de ceux-ci grâce à des données tierces. C’est pourquoi des données pseudonymisées demeurent des données personnelles. "),t("strong",[e._v("L’opération de pseudonymisation est réversible, contrairement à l’anonymisation")]),e._v(". »")])]),t("p",[e._v("La différence entre anonymisation et pseudonymisation réside ainsi dans le "),t("strong",[e._v("caractère réversible ou non")]),e._v(" de la dissimulation des données à caractère personnel.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Un exemple de différence entre pseudonymisation et anonymisation")]),e._v(" "),t("p",[e._v("Supposons qu'une caisse d'allocations familiales (CAF) dispose d'une base de données contenant les noms, dates de naissance et adresses des demandeurs d'allocation logement en 2019, ainsi que les montants des allocations reçues et le nombre de personnes dans le foyer.")]),e._v(" "),t("p",[e._v("Si la CAF souhaite "),t("strong",[e._v("anonymiser")]),e._v(" ces données, elle pourra supprimer les informations potentiellement identifiantes comme les noms, dates de naissances et adresses, puis aggréger les montants des allocations en ne publiant par exemple que la moyenne par commune. Impossible d'identifier qui se cache derrière les allocations reçues, ce qui garantit la protection totale des données personnelles. Mais impossible aussi de comparer les bénéficiaires des années 2018 ou 2020 avec ceux de 2019, puisque l'on ne dispose pas des données à l'échelle individuelle.")]),e._v(" "),t("p",[e._v("Si elle souhaite "),t("strong",[e._v("pseudonymiser")]),e._v(" ces données, elle remplacera les noms et dates par un identifiant unique (au lieu de supprimer les colonnes) et remplacera les adresses complètes par les seules communes. On peut cette fois-ci comparer les identifiants entre bases pour retrouver les allocataires communs, sans pour autant être en mesure de connaître directement leur identité. Cependant, pour les communes avec un faible nombre d'habitants, les informations sur la composition du foyer pourraient être suffisantes pour réidentifier certains bénéficiaires et ainsi connaître le montant qu'ils perçoivent.")])]),e._v(" "),t("p",[e._v("Ainsi, si l'anonymisation seule garantit une totale protection des données à caractère personnel, elle implique parfois une importante perte d'information, nécessaire à empêcher la réidentification mais limitant les réutilisations possibles des données. La pseudonymisation est donc une alternative attractive, à condition de garantir une protection suffisante.")]),e._v(" "),t("h3",{attrs:{id:"pourquoi-pseudonymiser-des-documents-administratifs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pourquoi-pseudonymiser-des-documents-administratifs"}},[e._v("#")]),e._v(" Pourquoi pseudonymiser des documents administratifs ?")]),e._v(" "),t("p",[e._v("La "),t("a",{attrs:{href:"https://www.legifrance.gouv.fr/affichLoiPubliee.do?idDocument=JORFDOLE000031589829&type=general&legislature=14",target:"_blank",rel:"noopener noreferrer"}},[e._v("loi n°2016-1321 pour une République numérique"),t("OutboundLink")],1),e._v(" fait de "),t("strong",[e._v("l’ouverture des données publiques la règle par défaut")]),e._v(". Etalab propose par ailleurs "),t("a",{attrs:{href:"https://guides.etalab.gouv.fr/juridique/ouverture/",target:"_blank",rel:"noopener noreferrer"}},[e._v("un guide détaillé sur l'ouverture de ces données"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Lorsque les administrations diffusent dans ce cadre des documents contenant des données personnelles, "),t("strong",[e._v("l'occultation préalable des éléments à caractère personnel est généralement une obligation")]),e._v(" qui s’impose à elles en application de l'"),t("a",{attrs:{href:"https://www.legifrance.gouv.fr/affichCodeArticle.do?idArticle=LEGIARTI000033205514&cidTexte=LEGITEXT000031366350&dateTexte=20161009",target:"_blank",rel:"noopener noreferrer"}},[e._v("article L. 312-1-2"),t("OutboundLink")],1),e._v(" du Code des relations entre le public et l’administration, sauf dans "),t("a",{attrs:{href:"https://guides.etalab.gouv.fr/juridique/ouverture/#la-diffusion-de-vos-documents-administratifs",target:"_blank",rel:"noopener noreferrer"}},[e._v("certains cas particuliers"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"quelles-donnees-personnelles-dois-je-retirer-de-mes-donnees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quelles-donnees-personnelles-dois-je-retirer-de-mes-donnees"}},[e._v("#")]),e._v(" Quelles données personnelles dois-je retirer de mes données ?")]),e._v(" "),t("p",[e._v("Cela dépend du contexte réglementaire, le même cadre ne s'appliquant pas à tous les documents. Néanmoins, il conviendra la plupart du temps de "),t("strong",[e._v("pseudonymiser toute information se rapportant à une personne physique identifiée ou identifiable")]),e._v(". Une « personne physique identifiable » est une personne physique qui peut être identifiée, directement ou indirectement, notamment par référence à un identifiant tel qu'un nom, un numéro d'identification, des données de localisation, un identifiant en ligne, ou à un ou plusieurs éléments spécifiques propres à son identité physique, physiologique, génétique, psychique, économique, culturelle ou sociale.")]),e._v(" "),t("p",[e._v("Pour plus de détails sur les "),t("strong",[e._v("différents cadres légaux")]),e._v(", vous pouvez consulter le "),t("a",{attrs:{href:"https://www.cnil.fr/sites/default/files/atoms/files/guide_open_data.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("guide juridique de la publication des données publiques"),t("OutboundLink")],1),e._v(" élaboré par la CNIL et la CADA.")]),e._v(" "),t("p",[e._v("Pour satisfaire à l'obligation d'occultation, "),t("strong",[e._v("la CNIL préconise d'anonymiser")]),e._v(" les documents administratifs avant de les diffuser, garantissant ainsi une parfaite impossibilité de réidentification. Néanmoins, pour les documents qui contiennent des données non structurées, en particulier du texte libre, le curseur de la « quantité d'information » à retirer d'un jeu de données pour éviter tout risque de réidentification est difficile à évaluer. De fait, "),t("strong",[e._v("une complète anonymisation est difficile à atteindre et à évaluer")]),e._v(" et peut aboutir à une trop grande perte d'informations.")]),e._v(" "),t("p",[e._v("Un bon exemple de document administratif pseudonymisé sont les décisions de justice, diffusées notamment sur le site Légifrance. Y sont retirés notamment les noms, prénoms, adresses, dates civiles (naissance, décès, mariage) des personnes physiques. D'autres catégories d'informations, comme les noms d'entreprises, la description de faits (dates et montants d'une transaction par exemple) pourraient permettre, en les recoupant avec d'autres informations, de réidentifier une personne physique. Cependant, retirer trop de catégories d'informations reviendrait à perdre beaucoup d'informations et appauvrirait le contenu d'une décision.")]),e._v(" "),t("p",[t("img",{attrs:{src:n(379),alt:"Extrait de décision pseudonymisée"}}),e._v(" "),t("em",[e._v("Un extrait de décision de justice pseudonymisée")])]),e._v(" "),t("p",[t("strong",[e._v("Il y a donc un arbitrage à faire entre la minimisation du risque de réidentification et la préservation de l'utilité des données.")]),e._v(" Trouver le bon curseur n'est pas simple et doit passer par une double analyse des risques de réidentification, à la fois "),t("strong",[e._v("juridique")]),e._v(" (pour évaluer par exemple quelles données ne doivent pas pouvoir être réidentifiées) et "),t("strong",[e._v("technique")]),e._v(" (pour estimer la possibilité technique de réidentifier ces données). Juger de l'utilité de conserver ou non certaines catégories de données "),t("strong",[e._v("dépendra aussi des usages envisagés")]),e._v(" de ces données.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Quelle quantité de données retirer ? Un exemple fictif")]),e._v(" "),t("p",[e._v("Prenons l'exemple d'un extrait de décision de justice fictive : "),t("em",[e._v("« Monsieur Dupont est accusé d'avoir cambriolé l'établissement \"Café de la Paix\" à Gentioux-Pigerolles, en Creuse, situé en face de son domicile, et d'avoir dérobé la recette de la semaine évaluée à 1 000€ »")]),e._v(".")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Cas 1")]),e._v(" : on conserve le plus d'information possible, en supprimant néanmoins les noms des personnes physiques et morales. La pseudonymisation sera par exemple : "),t("em",[e._v("« Monsieur X. est accusé d'avoir cambriolé l'établissement \"Café E.\" à Gentioux-Pigerolles, en Creuse, situé en face de son domicile, et d'avoir dérobé la recette de la semaine évaluée à 1 000€ »")]),e._v(". Le problème, c'est que s'il n'y a qu'un seul café dans ce petit village, il est très aisé de comprendre de quel établissement on parle, de sa localisation et donc celle du domicile de l'accusé, et ainsi de réidentifier ce dernier si l'on est familier du village. La pseudonymisation est donc inutile et ne protège pas suffisamment les données à caractère personnel.")]),e._v(" "),t("li",[t("strong",[e._v("Cas 2")]),e._v(" : on conserve le moins d'information possible. On pourra alors obtenir la pseudonymisation suivante : "),t("em",[e._v("« Monsieur X. est accusé d'avoir cambriolé l'établissement \"E.\" à Y., en Z., situé en face de son domicile, et d'avoir dérobé la recette de la semaine évaluée à N€ »")]),e._v(". Le problème c'est qu'il n'y a là plus beaucoup d'information utile. Par exemple, comment réaliser une cartographie du crime sans localisation ? Comment estimer les préjudices moyens des cambriolages pour un assureur ?")])])]),e._v(" "),t("p",[e._v("Un rapport du "),t("a",{attrs:{href:"https://www.cnil.fr/sites/default/files/atoms/files/wp216_fr.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("groupe de travail du G29 sur la protection des personnes à l'égard du traitement des données à caractère personnel"),t("OutboundLink")],1),e._v(" présente une analyse détaillée des risques de réidentification après pseudonymisation, d'un point de vue juridique et technique, et des bonnes pratiques en fonction des types de données.")]),e._v(" "),t("h2",{attrs:{id:"quelles-sont-les-differentes-methodes-de-pseudonymisation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quelles-sont-les-differentes-methodes-de-pseudonymisation"}},[e._v("#")]),e._v(" Quelles sont les différentes méthodes de pseudonymisation ?")]),e._v(" "),t("h3",{attrs:{id:"dans-le-cas-ou-les-donnees-a-caractere-personnel-sont-tabulaires"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dans-le-cas-ou-les-donnees-a-caractere-personnel-sont-tabulaires"}},[e._v("#")]),e._v(" Dans le cas où les données à caractère personnel sont tabulaires")]),e._v(" "),t("p",[e._v("Lorsque les données à caractère personnel sont contenues dans un jeu de données tabulaire (c'est-à-dire, pour faire simple, sous forme d'un tableau dont les lignes sont des entrées et les colonnes des catégories d'information), il est aisé de procéder directement à des traitements visant à pseudonymiser ou anonymiser, en "),t("strong",[e._v("supprimant les colonnes concernées ou en chiffrant leur contenu")]),e._v(". Ce cas de figure n'est pas l'objet de ce guide. Pour plus d'informations à ce sujet, on se référera "),t("a",{attrs:{href:"https://www.cnil.fr/fr/lanonymisation-des-donnees-un-traitement-cle-pour-lopen-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("aux ressources de la CNIL sur l'anonymisation"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"dans-le-cas-ou-les-donnees-a-caractere-personnel-apparaissent-dans-du-texte-libre"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dans-le-cas-ou-les-donnees-a-caractere-personnel-apparaissent-dans-du-texte-libre"}},[e._v("#")]),e._v(" Dans le cas où les données à caractère personnel apparaissent dans du texte libre")]),e._v(" "),t("p",[e._v("Lorsque les données à caractère personnel sont contenues dans du texte libre, le ciblage précis des éléments identifiants dans le texte est une tâche souvent complexe. Encore largement réalisée par des humains, "),t("strong",[e._v("cette tâche est coûteuse en temps et peut requérir une expertise spécifique dans la matière traitée")]),e._v(" (dans les textes juridiques par exemple). L'intelligence artificielle et les techniques de traitement du langage naturel peuvent permettre d'automatiser cette tâche souvent longue et fastidieuse.")]),e._v(" "),t("h4",{attrs:{id:"une-methode-d-automatisation-simple-les-moteurs-de-regles"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#une-methode-d-automatisation-simple-les-moteurs-de-regles"}},[e._v("#")]),e._v(" Une méthode d'automatisation simple : les moteurs de règles")]),e._v(" "),t("p",[e._v("Il existe des méthodes assez intuitives permettant d'automatiser la tâche de pseudonymisation, comme "),t("strong",[e._v("les moteurs de règles")]),e._v('. Les moteurs de règles sont un ensemble de règles prédéfinies « à l\'avance ». Par exemple, une règle de pseudonymisation pourrait être : « si le mot qui suit "Monsieur" ou "Madame" commence par une majuscule, alors ce mot est un prénom ». La complexité du langage naturel et la diversité des formulations qui se trouvent dans du texte libre fait que ce type de moteur de règles a de forte chance de faire beaucoup d\'erreurs dans des textes administratifs dont la forme varie souvent. Il est cependant bien adapté à des textes simples, ou lorsque la méthode a besoin d\'être parfaitement explicable et simplement modifiable.')]),e._v(" "),t("h4",{attrs:{id:"une-methode-plus-complexe-l-intelligence-artificielle-ia"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#une-methode-plus-complexe-l-intelligence-artificielle-ia"}},[e._v("#")]),e._v(" Une méthode plus complexe : l'intelligence artificielle (IA)")]),e._v(" "),t("p",[e._v("L'utilisation de l'IA pour automatiser la pseudonymisation de documents peut être plus ou moins pertinente. Les solutions d'IA pour pseudonymiser des données textuelles sont en grande majorité des modèles supervisés. "),t("strong",[e._v("Ces modèles d'IA dits d'apprentissage supervisé se sont beaucoup développés ces dernières années")]),e._v(", en particulier les modèles de réseaux de neurones profonds (ou "),t("em",[e._v("deep learning")]),e._v(") qui sont aujourd'hui les plus performants.")]),e._v(" "),t("p",[e._v("Ces modèles supervisés sont des algorithmes qui prennent en entrée des données avec des "),t("em",[e._v("labels")]),e._v(" (ou étiquettes en français), dont ils vont chercher à « apprendre » la logique d'attribution. L'objectif est ainsi que lorsqu'on leur présente une nouvelle donnée « non labelisée », l'algorithme soit capable de retrouver seul le bon label.")]),e._v(" "),t("p",[e._v("Dans le cas de la pseudonymisation, les données d'entrées sont "),t("strong",[e._v("chacun des mots du document à pseudonymiser")]),e._v(" et le label qu'on leur attribue est la  "),t("strong",[e._v("catégorie sémantique")]),e._v(" à laquelle il se rattache : nom, prénom, adresse, etc. Ces catégories varient selon la nature du document et le degré de pseudonymisation souhaité. En traitement du langage naturel, ce type de tâche s'appelle la "),t("strong",[e._v("reconnaissance d'entités nommées")]),e._v(" ("),t("em",[e._v("Named Entity Recognition (NER)")]),e._v(" en anglais).")]),e._v(" "),t("p",[e._v("Mais pour que ces modèles puissent arriver à de bonnes performances, ils nécessitent de remplir un certain nombre de prérequis. Assez exigeants, ils sont pourtant indispensables au succès de l'utilisation de l'IA appliquée à la pseudonymisation. Nous vous proposons de les passer en revue dans la section suivante.")]),e._v(" "),t("h2",{attrs:{id:"quels-sont-les-prerequis-pour-utiliser-l-intelligence-artificielle-pour-pseudonymiser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quels-sont-les-prerequis-pour-utiliser-l-intelligence-artificielle-pour-pseudonymiser"}},[e._v("#")]),e._v(" Quels sont les prérequis pour utiliser l'intelligence artificielle pour pseudonymiser ?")]),e._v(" "),t("h3",{attrs:{id:"disposer-de-donnees-brutes-de-qualite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disposer-de-donnees-brutes-de-qualite"}},[e._v("#")]),e._v(" Disposer de données brutes de qualité")]),e._v(" "),t("p",[e._v("La qualité des données brutes (c'est-à-dire avant tout traitement) que l'on souhaite utiliser est un premier critère essentiel qui sera déterminant pour la performance de l'algorithme. Cette qualité fait souvent référence à "),t("strong",[e._v("la facilité d'utilisation du format utilisé")]),e._v(". En effet, les données textuelles brutes peuvent se présenter sous différents formats, plus ou moins lisibles. Idéalement, les documents textuels sont stockés au "),t("strong",[e._v("format "),t("em",[e._v("txt")]),e._v(" ou "),t("em",[e._v("json")])]),e._v(". Des formats moins standards ("),t("em",[e._v("doc")]),e._v(", "),t("em",[e._v("pdf")]),e._v(", "),t("em",[e._v("png")]),e._v(", etc..) nécessiteront des conversions afin de pouvoir être traités. Lorsque les documents sont au format image (car résultant par exemple d'une numérisation de documents papiers), la mise en place d'une brique de "),t("a",{attrs:{href:"https://fr.wikipedia.org/wiki/Reconnaissance_optique_de_caract%C3%A8res",target:"_blank",rel:"noopener noreferrer"}},[e._v("reconnaissance optique de caractères"),t("OutboundLink")],1),e._v(" sera nécessaire afin de les convertir au format texte, et complexifie donc le traitement en amont du projet. La qualité des données brutes est évaluée par les data scientists en amont du projet.")]),e._v(" "),t("h3",{attrs:{id:"disposer-d-un-grand-volume-des-donnees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#disposer-d-un-grand-volume-des-donnees"}},[e._v("#")]),e._v(" Disposer d'un grand volume des données")]),e._v(" "),t("p",[e._v("Essentiel également, le volume de documents annotés nécessaires dépendra de la complexité de la tâche de pseudonymisation, qui sera fonction notamment du nombre de catégories d'entités nommées retenues et de la complexité du langage utilisé dans les documents. Il est en général nécessaire de disposer de l'ordre de "),t("strong",[e._v("plusieurs milliers de documents afin d'obtenir des résultats optimaux")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"avoir-la-possibilite-d-annoter-ses-donnees"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#avoir-la-possibilite-d-annoter-ses-donnees"}},[e._v("#")]),e._v(" Avoir la possibilité d'annoter ses données")]),e._v(" "),t("p",[e._v("Puisque la tâche de notre IA consiste à reconnaître la catégorie sémantique de chaque mot, il est nécessaire en amont de tout projet de "),t("strong",[e._v("disposer « d'exemples » que l'on souhaite montrer à l'algorithme pour qu'il s'entraîne")]),e._v(". Il sera donc nécessaire de constituer au préalable, à la main (humaine), une base d'exemples corrects. "),t("strong",[e._v("Cette tâche consistant à attribuer des labels à certains mots ou groupes de mots d'un document s'appelle l'annotation")]),e._v(". Cette tâche pourra nécessiter des compétences spécifiques en fonction de la nature des documents et des catégories à annoter.")]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("L'annotation, un processus exigeant et chronophage")]),e._v(" "),t("p",[e._v("Le processus d'annotation requiert de mobiliser des équipes souvent nombreuses (pour aller plus vite) mais aussi qualifiées. Par exemple, si vous cherchez à identifier les noms, prénoms et adresses dans un "),t("a",{attrs:{href:"https://www.service-public.fr/particuliers/vosdroits/F2474",target:"_blank",rel:"noopener noreferrer"}},[e._v("recours administratif"),t("OutboundLink")],1),e._v(", une simple maîtrise du français suffira. En revanche, si vous cherchez à identifier les moyens et les conclusions juridiques mentionnées, il vous faudra disposer d'une équipe de juristes expérimentés ! Pour des documents complexes, il pourra ainsi être nécessaire de mobiliser longuement des experts métiers pour obtenir une quantité d'annotation suffisante et de qualité (avec le moins de mauvais labels). On parle même de campagnes d'annotation !")])]),e._v(" "),t("p",[e._v("Afin de constituer un ensemble de documents annotés, il est nécessaire d'utiliser un logiciel d'annotation qui permet d'enregistrer les annotations réalisées par les annotateurs. Il existe de nombreux logiciels d'annotation, dont beaucoup sont open source comme "),t("a",{attrs:{href:"http://doccano.herokuapp.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Doccano"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"avoir-acces-a-des-infrastructures-de-calcul-adequates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#avoir-acces-a-des-infrastructures-de-calcul-adequates"}},[e._v("#")]),e._v(" Avoir accès à des infrastructures de calcul adéquates")]),e._v(" "),t("p",[e._v("L'entraînement de modèles de traitement du langage récents, basés sur des réseaux de neurones profonds (deep learning), "),t("strong",[e._v("nécessite des ressources dédiées et exigeantes")]),e._v(". D'une part, la volumétrie de données nécessaires pour l'entraînement peut mener à la constitution de corpus de plusieurs giga voire téraoctets et peut nécessiter des infrastructures de stockages dédiées, comme des "),t("strong",[e._v("serveurs de stockage")]),e._v(". D'autre part, l'entraînement des modèles est pour sa part très gourmand en capacités de calcul, et s'appuie notamment des "),t("strong",[e._v("processeurs graphiques")]),e._v(" ("),t("em",[e._v("GPU")]),e._v(" en anglais) qui permettent d'accélérer considérablement le temps de calcul. Même en disposant de GPU de dernières générations, il faut compter plusieurs jours voire plusieurs semaines pour un apprentissage complet du modèle.")]),e._v(" "),t("p",[e._v("En résumé, de nombreuses conditions doivent être remplies avant de se lancer dans un projet d'utilisation de l'IA pour la pseudonymisation. Voici résumé le questionnement logique à suivre :\n"),t("img",{attrs:{src:n(380),alt:"logigramme des prérequis"}})]),e._v(" "),t("h2",{attrs:{id:"ressources-externes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ressources-externes"}},[e._v("#")]),e._v(" Ressources externes")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.cnil.fr/fr/lanonymisation-des-donnees-un-traitement-cle-pour-lopen-data",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guide de l'anonymisation pour les données ouvertes"),t("OutboundLink")],1),e._v(" de la CNIL")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnil.fr/sites/default/files/atoms/files/guide_open_data.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guide pratique (juridique) de la publication en ligne et de la réutilisation des données publiques"),t("OutboundLink")],1),e._v(" élaboré par la CNIL, la CADA et Etalab")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnil.fr/fr/guide-rgpd-du-developpeur",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guide RGPD du développeur"),t("OutboundLink")],1),e._v(" de la CNIL")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.cnil.fr/sites/default/files/atoms/files/wp216_fr.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("Avis sur les techniques d’anonymisation"),t("OutboundLink")],1),e._v(" du Groupe de travail du G29 sur la protection des personnes à l'égard du traitement des données à caractère personnel")]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.enisa.europa.eu/publications/pseudonymisation-techniques-and-best-practices",target:"_blank",rel:"noopener noreferrer"}},[e._v("Guide « Pseudonymisation techniques and best practices »"),t("OutboundLink")],1),e._v(" de l’Agence Européenne de Cybersécurité (ENISA)")])])])}),[],!1,null,null,null);s.default=i.exports}}]);