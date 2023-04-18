const express = require("express");
const battingController = require("../Controllers/user");
const commnMid = require("../Middleware/Auth");
const Router = express.Router();

//==================[EndPoints]====================================//

Router.post("/tag", battingController.tag);
Router.post("/user", battingController.createUser);
Router.get("/getUsers", battingController.getUsers);
Router.post("/category", battingController.category);
Router.post("/userlogin", battingController.userLogin);
Router.post("/getContact", battingController.getContact);
Router.post("/AcademyLogin", battingController.AcademyLogin);
Router.post("/academy/coach", battingController.createAcademy);
Router.post("/updatePassword", battingController.updatePassword);
Router.post("/getContactCoach", battingController.getContactCoach);
Router.post("/updateCoachPassword", battingController.updateCoachPassword);
Router.put(
  "/:userId/updateComplete",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.updateComplete
);
Router.get(
  "/:userId/Tags",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getTags
);
Router.get(
  "/:userId/Categoy",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getCategory
);
Router.post(
  "/:userId/bow_batPost",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.bow_bat
);
Router.get(
  "/:userId/getRoutine",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getRoutine
);
Router.get(
  "/:userId/getNewRoutine",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getNewRoutine
);
Router.put(
  "/:userId/updateDrill",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.updateDrill
);
Router.post(
  "/:userId/batting",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.createBattings
);
Router.get(
  "/:userId/getAllUsers",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getAllUsers
);
Router.post(
  "/:userId/bowling",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.createBowlings
);
Router.get(
  "/:userId/getPersonal",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getPersonal
);
Router.get(
  "/:userId/getProgress",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getProgress
);
Router.put(
  "/:userId/updateWicket",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.updateWicket
);
Router.post(
  "/:userId/PowerTest",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.createPowerTest
);
Router.put(
  "/:userId/updateBatting",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.updateBatting
);
Router.put(
  "/:userId/updateBowling",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.updateBowling
);
Router.put(
  "/:userId/updateRoutine",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.updateRoutine
);
Router.put(
  "/:userId/updateBat_Bow",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.updateBat_Bow
);
Router.post(
  "/:userId/createRoutine",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.createRoutine
);
Router.post(
  "/:userId/wicketKeeping",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.createWickets
);
Router.get(
  "/:userId/getPastRoutine",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getPastRoutine
);
Router.delete(
  "/:userId/deleteRoutine",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.deleteRoutine
);
Router.post(
  "/:userId/scoreAndremark",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.scoreAndremark
);
Router.get(
  "/:userId/getRoutineCount",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getRoutineCount
);
Router.post(
  "/:userId/readinessSurvey",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.readinessSurvey
);
Router.post(
  "/:userId/StrengthTest",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.createStrengthTest
);
Router.get(
  "/:userId/getOngoingRoutine",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getOngoingRoutine
);
Router.get(
  "/:userId/getCalendarCount",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getCalendarCount
);
Router.post(
  "/:userId/playerRoutine",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.createPlayerRoutine
);
Router.get(
  "/:userId/getAssignedBydrills",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getAssignedByDrills
);

Router.put(
  "/:userId/updateCategoryRoutine",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.updateCategoryRoutine
);
Router.get(
  "/:userId/getNewDrill",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getNewDrill
);
Router.get(
  "/:userId/getOngoingDrill",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getOngoingDrill
);
Router.get(
  "/:userId/getPastDrill",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.getPastDrill
);
Router.post(
  "/:userId/feedback",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.createFeedback
);
Router.put(
  "/:userId/updateDates",
  commnMid.jwtValidation,
  commnMid.authorization,
  battingController.updateDate
);

//===================== checking your end point valid or not =======================//
Router.all("/**", function (req, res) {
  res.status(404).send({
    status: false,
    message: "Make Sure Your Endpoint is Correct or Not!",
  });
});

module.exports = Router;
