let country_list = [
"austrailia",
"brazil",
"canada",
"denmark",
"egypt",
"finland",
"germany",
"hungary",
"iceland",
"japan",
"kuwait",
"luxenbourg",
"mongolia",
"nepal",
"oman",
"pakistan",
"qatar",
"russia",
"sweden",
"thailand",
"america",
"vietnam",
"yemen",
"zimbabwe"
]
story.printText("guess the country", 80, 100)
let abc_guess = game.askForString("type in 10 letters (no numbers)", 10)
story.printText(abc_guess, 80, 35)
let random_country = randint(0, 23)
let correct_guess_count = 0
let correct_abc = ""
for (let abcindex = 0; abcindex <= 9; abcindex++) {
    if (country_list[random_country].includes(abc_guess.charAt(abcindex))) {
        correct_guess_count += 1
        correct_abc = "" + correct_abc + abc_guess.charAt(abcindex)
    }
}
game.showLongText(correct_abc, DialogLayout.Top)
let guessed_country = game.askForString("type in 10 letters (no numbers)", 10)
if (true) {
	
}
game.showLongText(country_list[random_country], DialogLayout.Bottom)
