function keySearch(userInput, index) {
    let searchObject = createSearchObjectArray();
    let search = searchObject[index];
    console.log(search);
    let keywordFound = false;
    for(let i = 0; i < search.keywords.length; i++) {
        if(search.keywords[i] ===  userInput) {
            window.location.replace(search.url + '#' + search.keywords[i].toLowerCase());
            keywordFound = true;
            markItem(userInput);
            break;
        }
    }
    if(!keywordFound) {
        window.alert(userInput.toUpperCase() + " wurde nicht gefunden");
    }
}

function createSearchObjectArray() {
    return [searchCMS, searchCompiler, searchPhp, searchIde, searchIndex, searchGlossar,
        searchIt, searchMarketing, searchLogistik, searchProgrammiersprache];
}

function markItem(item) {
    let context = document.querySelectorAll("Body");
    let instance = new Mark(context);
    instance.mark(item);
}

let searchCMS = {
    title: 'Content Management System',
    url: 'cms.html',
    keywords: [
        'CMS',
        'Vorteile',
        'Funktionsweise',
        'WYSIWYG',
        'WYSIWYG-Editor',
        'Open Source',
        'Benutzerrechte',
        'Module'
    ]
};

let searchCompiler = {
    title: 'Compiler',
    url: 'compiler.html',
    keywords: [
        'Aufgaben',
        'Interpreter',
        'Funktionsweise',
        'Just-in-time',
        'Programmiersprache',
        'Maschinencode',
        'Assembler'
    ]
};

let searchProgrammiersprache = {
    title: 'Programmiersprache',
    url: 'programmiersprache.html',
    keywords: [
        'Funktionsweise',
        'Binärcode',
        'Trends',
        'Klassen',
        'funktional',
        'imperativ',
        'objektorientiert'
    ]
};

let searchIde = {
    title: 'IDE',
    url: 'ide.html',
    keywords: [
        'Merkmale',
        'Bestandteile',
        'PHPStorm',
        'GUI-Builder',
        'Kommandozeile',
        'PyCharm',
        'Benutzerrechte',
        'Debugger'
    ]
};

let searchIndex = {
    title: 'Startseite',
    url: 'ide.html',
    keywords: [
        'Schnellzugriff',
        'Compiler',
        'IDE',
        'PHP'
    ]
};

let searchPhp = {
    title: 'PHP',
    url: 'php.html',
    keywords: [
        'Beispiel',
        'Skript',
        'Beschreibung',
        'Versionen',
        'Einführungstutorial',
        '<?php',
        'parsen'
    ]
};

let searchIt = {
    title: 'It',
    url: 'it.html',
    keywords: [
        'Compiler',
        'Content Management System',
        'Programmiersprachen',
        'PHP',
        'IDE'
    ]
};

let searchLogistik = {
    title: 'Logistik',
    url: 'logistik.html',
    keywords: [
        'Logistik',
    ]
};

let searchMarketing = {
    title: 'Marketing',
    url: 'marketing.html',
    keywords: [
        'CMS',
    ]
};

let searchGlossar = {
    title: 'Glossar',
    url: 'glossar.html',
    keywords: [
        'Compiler',
        'Content Management System',
        'Programmiersprachen',
        'PHP',
        'IDE'
    ]
};