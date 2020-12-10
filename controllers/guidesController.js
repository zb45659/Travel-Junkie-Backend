const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const GuideModel = require("../models").Guide;
const ReviewModel = require("../models").Review;

// CREATE A NEW Review FOR A Guide
// router.post("/:id/newreview", async (req, res) => {
//   let guide = await GuideModel.findByPk(req.params.id);
//   let review = await guide.createReview(req.body);
//   res.json({ guide, review });
// });

// GET ARTIST PROFILE
router.get("/profile/:id", async (req, res) => {
  let guide = await GuideModel.findByPk(req.params.id, {
    include: UserModel,
  });
  res.json({ guide });
});

// GET ALL ARTISTS
router.get("/", async (req, res) => {
  let allGuides = await GuideModel.findAll({ include: ReviewModel });
  res.json({ allGuides });
});

// CREATE A NEW Guide
router.post("/", async (req, res) => {
  let newGuide = await GuideModel.create(req.body);
  res.json({ newGuide });
});

// UPDATE A Guide
router.put("/:id", async (req, res) => {
  let updatedGuide = await GuideModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  let guide = await GuideModel.findByPk(req.params.id, {
    include: ReviewModel,
  });
  res.json({ guide });
});

// DELETE A ARTIST
router.delete("/:id", async (req, res) => {
  await GuideModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `Guide with id ${req.params.id} was deleted.`,
  });
});

module.exports = router;