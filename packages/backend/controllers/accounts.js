const accountRouter = require("express").Router();
const Account = require("../models/accounts");

accountRouter.get("/", async (req, res) => {
  const accounts = await Account.find({});

  res.json(accounts);
});

accountRouter.post("/", async (req, res) => {
  const accounts = req.body;
  accounts.forEach((account) => {
    const newAccount = new Account({
      t_id: account.t_id,
      name: account.name,
      username: account.username,
    });
  });

  res.status(200).end();
});

module.exports = accountRouter;
