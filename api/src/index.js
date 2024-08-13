const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const { connectDB } = require("./helpers/db");
const { port, host, db, authApiUrl } = require("./config");
const app = express();
const votesShchema = new mongoose.Schema({
	title: { type: String },
	date: { type: Date, default: new Date() },
	status: { type: String },
	candidates: [{ candidateName: { type: String } }],
	tickets: [{ ticket: { type: String }, vote: { type: String } }],
});
const Vote = mongoose.model("Vote", votesShchema);

app.use(express.json());

const startServer = () => {
	app.listen(port, async () => {
		console.log(`---START---`);

		const silence = new Vote({
			title: "Silence",
			date: Date.now(),
			status: "active",
			candidates: [
				{
					candidateName: "Silence",
				},
				{
					candidateName: "Stealth",
				},
			],
			tickets: [
				{
					ticket: "43242",
					vote: "Silence",
				},
			],
		});
		// await silence.save();
	});
};

app.get("/", (req, res) => {
	res.send(
		`Start on ${host}:${port}` + "<br>" + `On port ${host}` + "<br>" + `${db}`
	);
});

app.get("/getData", async (req, res) => {
	let x = await Vote.find();
	res.send(x);
});

app.post("/postData", async (req, res) => {
	try {
		const x = new Vote(req.body);
		console.log(JSON.stringify({ x }));
		await x.save();
		res.send({ message: "ok" });
	} catch (error) {
		res.status(500).send({
			message: "Error saving vote to database",
			error: error,
		});
	}
});

// app.get("/testCurrentUser", (req, res) => {
// 	axios.get(authApiUrl + "/currentUser").then((response) => {
// 		res.json({
// 			testCurrentUser: true,
// 			user: response.data,
// 		});
// 	});
// });

connectDB()
	.on("error", console.log)
	.on("disconnected", connectDB)
	.once("open", startServer);
