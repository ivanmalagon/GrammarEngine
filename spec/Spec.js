var GetTokens = function(phrase)
{
	return new Parser().Evaluate(phrase);
}
	
describe ("Parsing", function() {
	
	var CheckTokenLengthAndText = function(tokens, tokensType, tokensText)
	{
		expect(tokens.length).toEqual(tokensType.length);
		for (var i = 0; i < tokens.length; i++)
			expect(tokensType[i].prototype.isPrototypeOf(tokens[i])).toBeTruthy();
		
		for (var i = 0; i < tokens.length; i++)
			expect(tokens[i].Text).toEqual(tokensText[i]);
	}
	
	it ("Simple parsing - T, NT", function()
	{	
		var tokens = GetTokens("Hey! <Accion>");
		CheckTokenLengthAndText(tokens, [Terminal, NonTerminal], ["Hey! ", "Accion"]);
	});
	
	it ("Only one terminal", function()
	{
		var tokens = GetTokens("Yep!");
		CheckTokenLengthAndText(tokens, [Terminal], ["Yep!"]);
	});
	
	it ("Only one non-terminal", function()
	{
		var tokens = GetTokens("<Accion>");
		CheckTokenLengthAndText(tokens, [NonTerminal], ["Accion"]);
	});
	
	it ("Non-terminal and terminal", function()
	{
		var tokens = GetTokens("<Accion> Sanchez");
		CheckTokenLengthAndText(tokens, [NonTerminal, Terminal], ["Accion", " Sanchez"]);
	});
	
	it ("Complex phrase", function()
	{
		var tokens = GetTokens("Hey! <Accion> <Objeto de la accion>!");
		CheckTokenLengthAndText(tokens, [Terminal, NonTerminal, Terminal, NonTerminal, Terminal], ["Hey! ", "Accion", " ", "Objeto de la accion", "!"]);
	});
});

describe ("Phrases validation", function() {

	it ("Open tag not closed", function()
	{		
		try
		{
			var tokens = GetTokens("Hey! <Acci");
			throw "Fail";
		}
		catch (error)
		{
			expect(error).toEqual("Close delimiter not found");	
		}
	});
	
	it ("Close tag not opened", function()
	{	
		try
		{
		var parser = GetTokens("Hey! Acci>");
			throw "Fail";
		}
		catch (error)
		{
			expect(error).toEqual("Open delimiter not found.");	
		}
	});	
	
	it ("Anidated tags not allowed", function()
	{	
		try
		{
			var parser = GetTokens("Hey! <Acci<Verbo raro> on>");
			throw "Fail";
		}
		catch (error)
		{
			expect(error).toEqual("Anidation for delimiters is not allowed.");	
		}
	});	
});

describe ("NonTerminal substitution", function() {

	var rewriter = new Rewriter();

	it ("Simple non-terminal substitution", function()
	{
		expect(rewriter.FullSubstitution("<Hello>", simpleGrammar)).toEqual("hello");
	});
	
	it ("Terminal substitution", function()
	{
		expect(rewriter.FullSubstitution("hi", simpleGrammar)).toEqual("hi");
	});
	
	it ("Several rounds substitution", function()
	{
		var text = rewriter.Substitute("<Composite>", simpleGrammar);
		expect(text).toEqual("<Hello> world!");
		text = rewriter.Substitute(text, simpleGrammar);
		expect(text).toEqual("hello world!");
	});
	
	it ("Several non-terminals substitution", function()
	{
		expect(rewriter.FullSubstitution("<A><B><C>", simpleGrammar)).toEqual("cccc");
	});

	it ("Recursivity not allowed", function()
	{	
		try
		{
			var text = rewriter.Substitute("<D>", simpleGrammar);
			throw "Fail";
		}
		catch (error)
		{
			expect(error).toEqual("Recursivity is not allowed in the grammar.");	
		}
	});
});

describe ("Multiple substitutions", function() {

	var rewriter = new Rewriter();
	
	it ("Substituting a rule with multiple options", function()
	{
		var text = rewriter.Substitute("<E>", simpleGrammar);
		expect((text == "<F>") || (text == "e")).toBeTruthy();	
	});
	
});