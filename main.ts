let country_list = [
"austrailia",
"brazil",
"canada",
"dennmark",
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
"united states of america",
"vietnam",
"yemen",
"zimbabwe"
]
story.printText("guess the country", 80, 100)
let abc_guess = game.askForString("type in 10 letters (no numbers)", 10)
story.printText(abc_guess, 80, 35)
let random_country = randint(0, 23)
game.splash("" + country_list[random_country])
let correct_guess_count = 0
for (let abcindex = 0; abcindex <= 9; abcindex++) {
    if (country_list[random_country].includes(abc_guess.charAt(abcindex))) {
        correct_guess_count += 1
        info.setScore(correct_guess_count)
    }
}
