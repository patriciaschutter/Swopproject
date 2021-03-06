module.exports = (app) => {
	app.get('/subscription', (req, res) => {
		if(req.session.user){ // means already logged in so no need to go be on subscribe page, if by mistake there then redirected to index
			res.render("index", {
				first_name: req.session.user.first_name
			})
		}
		else {
			res.render('subscription')
		}
	})

	app.post('/subscriptionRoute', (req, res)=> {
		console.log("subscription type: ", req.body.button)
		if(req.session.user){
			res.render("index",{
				first_name: req.session.user.first_name
			})
		}
		else{
			res.render('signup', {
			subscription: req.body.button
			})
		}
	})
}