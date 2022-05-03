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
"zimbabwe",
"newzealand",
"spain",
"turkey",
"peru",
"portugal",
"srilanka",
"madagascar",
"papuanewguinea",
"tonga",
"fiji",
"indonesia",
"india",
"argentina",
"phillipines",
"ukraine",
"vaticancity",
"myammar",
"laos",
"tuvalu",
"vanuatu",
"venezuela",
"paraguay",
"guyana",
"poland",
"kyrgyzstan",
"northkorea",
"southkorea",
"micronesia",
"algeria",
"chile",
"colombia",
"cuba",
"bangladesh",
"china",
"arabemerites",
"turkmenistan",
"iran",
"iraq",
"saudiarabia",
"england",
"ireland",
"norway",
"southafrica",
"zambia",
"lesotho",
"malawi"
]
story.printText("guess the country", 80, 100)
let abc_guess = game.askForString("type in 10 letters (no numbers)", 10)
story.printText(abc_guess, 80, 35)
let random_country = randint(0, 69)
let correct_guess_count = 0
let correct_abc = ""
let incorrect_abc = ""
for (let abcindex = 0; abcindex <= 9; abcindex++) {
    if (country_list[random_country].includes(abc_guess.charAt(abcindex))) {
        correct_guess_count += 1
        correct_abc = "" + correct_abc + abc_guess.charAt(abcindex)
    } else {
        incorrect_abc = "" + incorrect_abc + abc_guess.charAt(abcindex)
    }
}
game.showLongText("Correct:" + correct_abc + "           " + "Incorrect:" + incorrect_abc, DialogLayout.Top)
let guessed_country = game.askForString("try to guess the country", 14)
if (guessed_country == country_list[random_country]) {
    game.splash("you guessed the country!")
    game.over(true)
} else {
    game.splash("you did not guess the country.")
    game.showLongText(country_list[random_country], DialogLayout.Bottom)
    game.over(false)
}
