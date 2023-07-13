function Quotes() {
    var RandomQuotes =[ "“Be yourself; everyone else is already taken.”" , "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”" , "“So many books, so little time.”" , "“A room without books is like a body without a soul.”" , "“You only live once, but if you do it right, once is enough.”" , "“Be the change that you wish to see in the world.”"];
    var AutherQuotes =[ "― Oscar Wilde" , "― Albert Einstein" , "― Frank Zappa" , "― Marcus Tullius Cicerov" , "― Mae West" , "― Mahatma Gandhi"];
    var x = Math.floor(Math.random() * RandomQuotes.length);
    document.getElementById("Quote").innerHTML = RandomQuotes[x];
    document.getElementById("Auther").innerHTML = AutherQuotes[x];
}

