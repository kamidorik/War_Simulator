function myFunction() {
var country = ["Russia", "USA", "France", "Germany", "China", "United Kingdom", "Italy", "Spain", "Japan", "Republic of Korea", "Poland"];
var alliance = [{'name':'Allies', 'countrie':[]},{'name':'Comintern', 'countrie':[]}, {'name':'Axis', 'countrie':[]}];
var normflag = ["'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/900px-Flag_of_Russia.svg.png'", "http://www.hoi4wiki.com/images/3/32/United_States.png", "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.svg.png", "http://www.hoi4wiki.com/images/c/cc/West_Germany.png", "http://www.hoi4wiki.com/images/8/81/China.png", "http://www.hoi4wiki.com/images/2/29/United_Kingdom.png", "http://vignette1.wikia.nocookie.net/harrypotter/images/b/b3/Flag_of_Italy.png/revision/latest?cb=20150427040631&path-prefix=ru", "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.svg.png", "http://oi63.tinypic.com/2ibyivt.jpg", "http://www.jposc.undp.org/content/dam/jposc/img/Flags/Partner%20Countries/UNDP-JPOSC-Flag-South_Korea.svg.png", "http://www.mapascotland.org/wp-content/uploads/2014/02/poland-flag.jpg"];
var commcountry = ["USSR", "The Communist States of America", "Communist France", "DDR", "People's Republic of China", "Britain Communist Republic", "Italian Socialist Republic", "Spanish Democratic Republic", "Communist Japan", "People's Republic of Korea", "Polish People's Republic"];
var commflag = ["http://www.hoi4wiki.com/images/6/67/Soviet_Union.png", "http://i.imgur.com/66ltGUT.png", "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Communist_France.svg", "http://www.hoi4wiki.com/images/f/f2/East_Germany.png", "http://www.hoi4wiki.com/images/c/c1/Chinese_People%27s_Republic.png","http://img15.deviantart.net/cbdf/i/2011/195/2/5/communist_britain_flag_by_party9999999-d3r9ib6.png", "http://vignette1.wikia.nocookie.net/harrypotter/images/b/b3/Flag_of_Italy.png/revision/latest?cb=20150427040631&path-prefix=ru", "http://orig10.deviantart.net/a33e/f/2015/339/8/6/spain_02__gdr_emblem_rye_with_rep__coat_of_arms__by_matritum-d9j4c8t.png", "http://vignette2.wikia.nocookie.net/althistory/images/f/f5/North_Japan_%28Flag_Contest%29.png/revision/latest?cb=20140122044045", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Flag_of_North_Korea.svg/800px-Flag_of_North_Korea.svg.png", "http://orig00.deviantart.net/150b/f/2013/280/4/2/flag_of_eastern_poland_by_tiltschmaster-d6pmj4i.png"];
var fasccountry = ["Russian Empire", "The Confederate States of America", "Vichy France", "German Empire", "Chinese Empire", "Britain Empire", "Kingdom of Italy", "Nationalist Spain", "Japanese Empire", "Korean Empire", "Poland-Hungary"];
var fascflag = ["https://i.redd.it/e2sdx2s3px7y.png", "http://vignette4.wikia.nocookie.net/thesquad/images/0/0e/FascistUSA.png/revision/latest?cb=20150404044934", "http://www.hoi4wiki.com/images/e/ec/Vichy_France.png", "http://www.hoi4wiki.com/images/e/e9/German_Reich.png", "http://www.hoi4wiki.com/images/d/d0/Shanxi.png", "http://www.hoi4wiki.com/images/2/29/United_Kingdom.png", "http://www.hoi4wiki.com/images/2/2a/Italy.png", "http://www.hoi4wiki.com/images/2/2c/Nationalist_Spain.png", "http://www.hoi4wiki.com/images/f/fc/Japan.png", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Flag_of_Korea_%281899%29.svg/850px-Flag_of_Korea_%281899%29.svg.png", "https://www.alternatehistory.com/forum/attachments/poland-hungary-flag-jpg.237392/"];
var ideology = ["Capitalism", "Communism", "Fascism"];
var numcountry = 0;
var countries = []
var turn = 0;
var nenemy = 10;
var stop = "False"

document.write("<br>Countries generation...</br>");
function check() {
	var curideology = ideopoints.indexOf(Math.max.apply( Math, ideopoints ));
	var ideopp = ideology.indexOf(countries[i].ideology);
	var civ = Math.floor(Math.random() * (2 - 0) + 0)
	if ((curideology != ideology.indexOf(countries[i].ideology) && (turn > 3) && (countries[i].canrevolution == "True") && (ideopp != 2))) {
		var numcountry = (countries[i].id-1);
		if (countries[i].alliance != "none") {
			var ideo = ideology.indexOf(countries[i].ideology);
			var alcou1 = alliance[ideo].countrie;
			var defeated = alcou1.indexOf(countries[i].name);
			alliance[ideo].countrie.splice(defeated, 1);
		}
		if (curideology == 1) {
			tcountry = commcountry;
			tflag = commflag;
		} else if (curideology == 2) {
			tcountry = fasccountry;
			tflag = fascflag;
		} else {
			tcountry = country;
			tflag = normflag;
		} 

		oldname = countries[i].name
		curideology = ideology[curideology];
		curcountry = tcountry[numcountry];
		curflag = tflag[numcountry];

		countries[i].name = curcountry;
		countries[i].ideology = curideology;
		countries[i].flag = curflag;
		countries[i].canrevolution = "False"
		countries[i].alliance = "none"

		for (ooo = 0; ooo < countries.length; ooo++) {
			countries[ooo].canattack.push(countries[i].name);
		}

		document.write("<br><green>"+oldname+" is becoming "+countries[i].name+"!</green>");
		document.write("<br><img src="+countries[i].flag+" width="+"64"+"></br>");
	}
	if ((curideology != ideology.indexOf(countries[i].ideology) && (turn > 3) && (countries[i].canrevolution == "True") && (ideopp == 2 || ideopp == 1) && (civ == 1))) {
		document.write("<br><green>Revolution is coming to "+countries[i].name+"!</green>");
		var win = Math.floor(Math.random() * (2 - 0) + 0)
		if (win == 1) {
			var numcountry = (countries[i].id-1);
			if (curideology == 1) {
				tcountry = commcountry;
				tflag = commflag;
			} else if (curideology == 2) {
				tcountry = fasccountry;
				tflag = fascflag;
			} else {
				tcountry = country;
				tflag = normflag;
			}
			curideology = ideology[curideology];
			curcountry = tcountry[numcountry];
			curflag = tflag[numcountry];
			countries[i].canrevolution = "False"
			curwarpower = Math.floor(Math.random() * (countries[i].warpower - 30) + 30)

			++nenemy;

			for (ooo = 0; ooo < countries.length; ooo++) {
				countries[ooo].canattack.push(curcountry);
			}

			countries.push({'name':curcountry, 'ideology':curideology, 'warpower':curwarpower, 'flag':curflag, 'canattack':canattack, 'alliance':calliance, 'ideopoints': ideopoints, 'canrevolution': "False", 'id':numcountry});
			countries[i].warpower = countries[i].warpower - curwarpower
			if (countries[i].warpower < 0) {
					document.write("<br><green>"+countries[i].name+" is destroyed!</green>");
					--nenemy;
					if (countries[i].alliance != "none") {
						var ideo = ideology.indexOf(countries[i].ideology);
						var alcou1 = alliance[ideo].countrie;
						var defeated = alcou1.indexOf(countries[i].name);
						alliance[ideo].countrie.splice(defeated, 1);
					}
					countries.splice(i, 1);
			}
			document.write("<br><green>New country is created!</green>");
			document.write("<br>"+curcountry+"</br>");
			document.write("<br><img src="+curflag+" width="+"64"+"></br>");
			document.write("<br>"+curideology)
		} else {
			document.write("<br><red>Revolution in "+countries[i].name+" is failed!</red>");
		}
	} 
}
for (i = 0; i < country.length; i++) {
	var ideopoints = [Math.floor(Math.random() * (31 - 0) + 0), Math.floor(Math.random() * (31 - 0) + 0), Math.floor(Math.random() * (31 - 0) + 0)]
	var curideology = ideopoints.indexOf(Math.max.apply( Math, ideopoints ));
	var tcountry = "nothing"
	var tflag = "nothing"
	var canattack = []
	var calliance = "none"
	if (curideology == 1) {
		tcountry = commcountry;
		tflag = commflag;
	} else if (curideology == 2) {
		tcountry = fasccountry;
		tflag = fascflag;
	} else {
		tcountry = country;
		tflag = normflag;
	} 
	curideology = ideology[curideology];
	curcountry = tcountry[numcountry];
	curflag = tflag[numcountry];

	++numcountry;

    countries.push({'name':curcountry, 'ideology':curideology, 'warpower':Math.floor(Math.random() * (101 - 30) + 30), 'flag':curflag, 'canattack':canattack, 'alliance':calliance, 'ideopoints': ideopoints, 'canrevolution': "True", 'id':numcountry});
  
    document.write("<br>"+countries[i].name+"</br>");
    document.write("<br><img src="+countries[i].flag+" width="+"64"+"></br>");
    document.write("<br>"+countries[i].ideology+"; Warpower: "+countries[i].warpower)
}
for (i = 0; i < countries.length; i++) {
	var test = countries[i].canattack;
	for (ooo = 0; ooo < countries.length; ooo++) {
		test.push(countries[ooo].name);
	}
	var index = test.indexOf(countries[i].name);
	test.splice(index, 1);
}
top:
while (countries.length > 1) {
	++turn;
	document.write("<br>Turn: "+turn+"</br>");

	if (turn == 50) {
		for (i = 0; i < countries.length; i++) {
			document.write("<br><green>"+countries[i].name+" superpower that have won!</green>");
			document.write("<br><img src="+countries[i].flag+" width="+"64"+"></br>");
		}
		break top;
	}
	for (aaa = 0; aaa < ideology.length; aaa++) {
		if (countries.length == alliance[aaa].countrie.length) {
			break top;
		}
	}
	for (i = 0; i < countries.length; i++) {
	var ccchoise = Math.floor(Math.random() * (3 - 0) + 0)
	var idepo = countries[i].ideopoints[ccchoise];
	++idepo;
	check();
		if (countries[i] == undefined) {
			++i;
			if (i > countries.length) {
				i = 0;
			}
		}
		choise = Math.floor(Math.random() * (3 - 0) + 0);
		enemy = Math.floor(Math.random() * (nenemy - 0) + 0);
		if (countries[enemy] == undefined) {
			++enemy;
			if (enemy > countries.length) {
				enemy = 0;
			}
		}
		if (choise == 1 && jQuery.inArray(countries[enemy].name, countries[i].canattack) != -1 && (i < enemy || i > enemy)) {
			document.write("<br><red>"+countries[i].name+" "+countries[i].warpower+" is decided to start war with "+countries[enemy].name+" "+countries[enemy].warpower+"!</red>");
			if (countries[i].warpower > countries[enemy].warpower) {
				document.write("<br><green>"+countries[enemy].name+" is destroyed by "+countries[i].name+"!</green>");
				countries[i].warpower = countries[i].warpower + (countries[enemy].warpower/2);
				--nenemy;
				if (countries[enemy].alliance != "none") {
					var ideo = ideology.indexOf(countries[enemy].ideology);
					var alcou2 = alliance[ideo].countrie;
					var defeated = alcou2.indexOf(countries[enemy].name);
					alliance[ideo].countrie.splice(defeated, 1);
				}
				countries.splice(enemy, 1);
			} else {
				document.write("<br><red>"+countries[i].name+" was tried to conquest "+countries[enemy].name+", but failed!</red>");
				countries[i].warpower = countries[i].warpower - countries[enemy].warpower;
				if (countries[i].warpower < 0) {
					document.write("<br><green>"+countries[i].name+" is destroyed!</green>");
					--nenemy;
					if (countries[i].alliance != "none") {
						var ideo = ideology.indexOf(countries[i].ideology);
						var alcou1 = alliance[ideo].countrie;
						var defeated = alcou1.indexOf(countries[i].name);
						alliance[ideo].countrie.splice(defeated, 1);
					}
					countries.splice(i, 1);
				}
			}
		} else if (choise == 2 && (i < enemy || i > enemy)) {
				var ideo = ideology.indexOf(countries[i].ideology);
				document.write("<br><blue>"+countries[i].name+" "+countries[i].warpower+" is proposed "+countries[enemy].name+" to join "+alliance[ideo].name+" alliance!</blue>");
				if (countries[i].alliance == "none" && alliance[ideo].countrie.length == 0) {
					document.write("<br><green>"+countries[i].name+" is created the "+alliance[ideo].name+" alliance!</green>");
					countries[i].alliance = alliance[ideo].name;
					alliance[ideo].countrie.push(countries[i].name)
				}
				cchoise = Math.floor(Math.random() * (2 - 0) + 0);
				if (countries[i].ideology == countries[enemy].ideology && countries[enemy].alliance == "none") {
					document.write("<br><green>"+countries[enemy].name+" is joined to "+alliance[ideo].name+" alliance!</green>");
					alliance[ideo].countrie.push(countries[enemy].name)
					countries[enemy].alliance = alliance[ideo].name;
					for (nnn = 0; nnn < countries.length; nnn++) {
						if (countries[nnn].alliance == countries[enemy].alliance) {
							var index1 = countries[enemy].canattack.indexOf(countries[i].name);
							countries[enemy].canattack.splice(index1, 1);
							var index2 = countries[i].canattack.indexOf(countries[enemy].name);	
							countries[nnn].canattack.splice(index2, 1);
						}
					}
				} else if (countries[i].alliance == countries[enemy].alliance) {
					document.write("<br><red>"+countries[enemy].name+" is already in "+alliance[ideo].name+" alliance!</red>")
				} else {
					document.write("<br><red>"+countries[enemy].name+" is refused to join "+alliance[ideo].name+" alliance!</red>")
				}
		} else {
			document.write("<br><yellow>"+countries[i].name+" is decided to skip this turn</yellow>");
			countries[i].warpower = countries[i].warpower + 2;
		}
	}
}
for (aaa = 0; aaa < ideology.length; aaa++) {
	if (countries.length == 1) {
		document.write("<br><green>"+countries[0].name+" with "+countries[0].ideology+" ideology and "+countries[0].warpower+" warpower have won!</green></br>");
		document.write("<br><img src="+countries[0].flag+" width="+"64"+"></br>");
		break
	} else {
		if (countries.length == alliance[aaa].countrie.length) {
			document.write("<br>"+alliance[aaa].name+" have won!");
			for (bbb = 0; bbb < alliance[aaa].countrie.length; bbb++) {
				document.write("<br><green>"+countries[bbb].name+" with "+countries[bbb].ideology+" ideology and "+countries[bbb].warpower+" warpower have won!</green></br>");
				document.write("<br><img src="+countries[bbb].flag+" width="+"64"+"></br>");
			}
			break
		}
	}
}
}
