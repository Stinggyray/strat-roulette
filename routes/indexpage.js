let strats = require("../strats.json");

["easy", "med", "hard", "pistol"].forEach(function(diff) {
  ["atk", "def"].forEach(function(side) {
	strats[diff][side] = {
		...strats[diff][side],
		...strats[diff].all
	}
  });
  delete strats[diff]["all"];
});
module.exports.set = function (app) {
	app.get('/', (req, res) => {
		res.render('index', {
			title: "Stinggy's Strat Roulette",
			strats: JSON.stringify(strats),
			metadata: {
				description: "Sting's Valorant Strat Roulette. Welcome to hell.",
				og_title: "Stinggy's Strat Roulette",
				og_description: "Sting's Valorant Strat Roulette. Welcome to hell.",
				og_url: "https://strat.stinggy.com",
				og_image: "https://stinggy.com/android-chrome-512x512.png"
			}
		});
	});
}
