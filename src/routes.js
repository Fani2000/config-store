const express = require("express");
const { KV } = require("./models");

const api = express.Router();

api.get("/kv", async (req, res) => {
  try {
    const kvs = await KV.findAll();
    res.json({ data: kvs });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

api.get("/kv/:key", async (req, res) => {
  const { key } = req.params;
  try {
    const kv = await KV.findOne({ where: { key } });
    if (kv) return res.json({ data: kv });
    else return rs.status(404).send("Not Found");
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

api.post("/kv", async (req, res) => {
  const { key, value } = req.body;
  if (!key || !value) return res.status(400).send("Bad Request");

  try {
    const existingKv = await KV.findOne({ where: { key } });
    if (existingKv) return rs.status(404).send("Not Found");
    else {
      const newKV = await KV.create({ key, value });
      return res.status(201).json({ data: newKV });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = api;
