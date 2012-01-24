var bioGrammar = [];

bioGrammar[] = [];

bioGrammar["book_title"] = [

];

Agile Java, Agile in a Flash (w/ @tottinge), Java Style, Clean Code (contributor)
Lean Software Development, Implementing Lean Software Development, and Leading Lean Software Development
The Joy of Clojure
in a nutshell
Learn ... the easy way
 Android in Practice


bioGrammar["book_sentence"] = [
	"<book_title>",
	"<book_title> and <book_title>",
	"<book_title> and <book_title> (contributor)"
];

bioGrammar["book_bio"] = [
	"Author of <book_sentence>",
	"Co-author of <book_sentence>
];

bioGrammar["programming_language"] = [
	"Ruby on Rails",
	"Java",
	"Clojure",
	"Haskell",
	"RoR",
	"Groovy",
	"Python"
	"Javascript"
];

bioGrammar["code"] = [
	"code",
	"<programming_language> <software>"
];

bioGrammar["software"] = [
	"software",
	"apps",
	"webs",
	"applications"
];

bioGrammar["company"] = [
	"<company_domain>",
	"<company_name>",
	"<company_with_surname> <company_surname>"
];

bioGrammar["company_name"] = [
	"CompuGlobalHyperMegaNet",
	"Agile<company_gerund",
	"Awesome<company_gerund>"
];

bioGrammar["company_with_surname"] = [
	"Craft",
	"Zen",
	"Superior"
];

bioGrammar["company_surname"] = [
	"Technologies",
	"Soft",
	"Software",
	"Solutions",
];

bioGrammar["company_gerund"] = [
	"Learning",
	"Coding",
	"Crafting"
];

bioGrammar["domain"] = [
	".com",
	".net",
	".biz",
];

bioGrammar["company_domain"] = [
	"<company_name><domain>",
	"<company_with_surname><company_surname><domain>"
];

bioGrammar["code_writer"] = [
	"I write <code> for <company>"
];
bioGrammar["bio"] = [
	"<code_writer>",
	"<book_bio>"
];


