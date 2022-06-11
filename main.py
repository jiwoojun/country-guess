country_list = ["australia",
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
    "luxembourg",
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
    "myanmar",
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
    "malawi"]
story.print_text("guess the country", 80, 100)
abc_guess = game.ask_for_string("type in 10 letters (no numbers)", 10)
story.print_text(abc_guess, 80, 35)
random_country = randint(0, 69)
correct_guess_count = 0
correct_abc = ""
incorrect_abc = ""
for abcindex in range(10):
    if country_list[random_country].includes(abc_guess.char_at(abcindex)):
        correct_guess_count += 1
        correct_abc = "" + correct_abc + abc_guess.char_at(abcindex)
    else:
        incorrect_abc = "" + incorrect_abc + abc_guess.char_at(abcindex)
game.show_long_text("Correct:" + correct_abc + "           " + "Incorrect:" + incorrect_abc,
    DialogLayout.TOP)
guessed_country = game.ask_for_string("try to guess the country", 14)
if guessed_country == country_list[random_country]:
    game.splash("you guessed the country!")
    game.over(True)
else:
    game.splash("you did not guess the country.")
    game.show_long_text(country_list[random_country], DialogLayout.BOTTOM)
    game.over(False)