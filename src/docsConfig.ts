const defaults: DocsConfig = {
    abap: "https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-US/abenabap_index.htm",
    bat: "https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands#BKMK_CmdRef",
    bibtex: "http://www.bibtex.org/Using/",
    clojure: "https://clojure.org/reference/reader",
    coffeescript: "https://coffeescript.org/#language",
    c: "https://www.gnu.org/software/gnu-c-manual/gnu-c-manual.html",
    cpp: "https://en.cppreference.com/w/",
    csharp: "https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/",
    css: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference",
    dockerfile: "https://docs.docker.com/engine/reference/builder/",
    fsharp: "https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/index",
    "git-commit": "https://git-scm.com/docs",
    "git-rebase": "https://git-scm.com/docs",
    go: "https://golang.org/ref/spec",
    groovy: "http://groovy-lang.org/single-page-documentation.html",
    handlebars: "https://handlebarsjs.com/reference.html",
    html: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
    java: "https://docs.oracle.com/javase/9/docs/api/java/lang/ref/Reference.html",
    javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference",
    javascriptreact: "https://reactjs.org/docs/react-api.html",
    json: "https://www.w3schools.com/jsref/jsref_obj_json.asp",
    jsonc: "http://json-c.github.io/json-c/",
    latex: "http://www.texdoc.net/",
    less: "http://lesscss.org/features/#features-overview-feature",
    lua: "https://www.lua.org/manual/5.3/",
    makefile: "https://www.gnu.org/software/make/manual/html_node/Quick-Reference.html",
    markdown: "https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet",
    "objective-c": "https://developer.apple.com/documentation/objectivec",
    perl: "https://perldoc.perl.org/index-functions.html",
    perl6: "https://docs.perl6.org/language.html#Fundamental_topics",
    php: "http://php.net/manual/en/langref.php",
    powershell: "https://docs.microsoft.com/en-us/powershell/scripting/overview?view=powershell-6",
    jade: "http://jade-lang.com/reference",
    python: "https://docs.python.org/3/reference/index.html#reference-index",
    r: "https://cran.r-project.org/manuals.html",
    razor: "https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-2.2",
    ruby: "https://docs.ruby-lang.org/en/2.6.0/index.html",
    rust: "https://doc.rust-lang.org/std/index.html",
    sscs: "https://sass-lang.com/documentation/file.SASS_REFERENCE.html",
    sass: "https://sass-lang.com/documentation/file.SASS_REFERENCE.html",
    shaderlab: "https://docs.unity3d.com/Manual/SL-Reference.html",
    shellscript: "https://www.gnu.org/software/bash/manual/bash.html",
    sql: "https://www.w3schools.com/sql/sql_quickref.asp",
    swift: "https://docs.swift.org/swift-book/ReferenceManual/AboutTheLanguageReference.html",
    typescript: "https://www.typescriptlang.org/docs/handbook/basic-types.html",
    typescriptreact: "https://reactjs.org/docs/react-api.html",
    tex: "https://latexref.xyz/",
    vb: "https://docs.microsoft.com/en-us/dotnet/visual-basic/language-reference/",
    xml: "https://www.w3schools.com/xml/dom_nodetype.asp",
    xsl: "https://www.w3.org/TR/xslt-10/",
    yaml: "https://camel.readthedocs.io/en/latest/yamlref.html"
};

export interface DocsConfig {
    [index: string]: string;
    abap: string;
    bat: string;
    bibtex: string;
    clojure: string;
    coffeescript: string;
    c: string;
    cpp: string;
    csharp: string;
    css: string;
    dockerfile: string;
    fsharp: string;
    "git-commit": string;
    "git-rebase": string;
    go: string;
    groovy: string;
    handlebars: string;
    html: string;
    java: string;
    javascript: string;
    javascriptreact: string;
    json: string;
    jsonc: string;
    latex: string;
    less: string;
    lua: string;
    makefile: string;
    markdown: string;
    "objective-c": string;
    perl: string;
    perl6: string;
    php: string;
    powershell: string;
    jade: string;
    python: string;
    r: string;
    razor: string;
    ruby: string;
    rust: string;
    sscs: string;
    sass: string;
    shaderlab: string;
    shellscript: string;
    sql: string;
    swift: string;
    typescript: string;
    typescriptreact: string;
    tex: string;
    vb: string;
    xml: string;
    xsl: string;
    yaml: string;
}

const languageNames = {
    abap: "ABAP",
    bat: "Windows Bat",
    bibtex: "BibTeX",
    clojure: "Clojure",
    coffeescript: "Coffeescript",
    c: "C",
    cpp: "C++",
    csharp: "C#",
    css: "CSS",
    dockerfile: "Dockerfile",
    fsharp: "F#",
    "git-rebase": "Git",
    "git-commit": "Git",
    go: "Go",
    groovy: "Groovy",
    handlebars: "Handlebars",
    html: "HTML",
    ini: "Ini",
    java: "Java",
    javascript: "JavaScript",
    javascriptreact: "JavaScript React",
    json: "JSON",
    latex: "LaTeX",
    less: "Less",
    lua: "Lua",
    makefile: "Makefile",
    markdown: "Markdown",
    "objective-c": "Objective-C",
    "objective-cpp": "Objective-C++",
    perl6: "Perl 6",
    perl: "Perl",
    php: "PHP",
    powershell: "Powershell",
    jade: "Pug",
    python: "Python",
    r: "R",
    razor: "Razor",
    ruby: "Ruby",
    rust: "Rust",
    scss: "SCSS",
    sass: "SASS",
    shaderlab: "ShaderLab",
    shellscript: "Bash",
    sql: "SQL",
    swift: "Swift",
    typescript: "TypeScript",
    typescriptreact: "TypeScript React",
    tex: "TeX",
    vb: "Visual Basic",
    xml: "XML",
    xsl: "XSL",
    yaml: "YAM"
};
module.exports = { defaults, languageNames };
