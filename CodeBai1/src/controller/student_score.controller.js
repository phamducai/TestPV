const sequelize = require("../models/index");
const initModels = require("../models/init-models");
const model = initModels(sequelize);

// get all

model.student_scores.removeAttribute("student_id");

const getStudentScore = async (req, res) => {
  let data = await model.school_students.findAll({
    include: ["student_scores"],
  });

  let updatedData = data.map((student, i) => {
    // let totalScore = 0;
    // let totalWeight = 0;

    // student.student_scores.forEach((score, index) => {
    //   totalScore +=
    //     score.test_score_15 +
    //     score.test_score_45 * 2 +
    //     score.test_score_semester * 3;
    //   totalWeight += 6;
    //   let avgScore = totalScore / totalWeight;
    //   student.student_scores[index]["avgScore"] = avgScore;
    //   console.log(student.student_scores[index]["avgScore"]);
    // });

    // chuyển đổi đối tượng Sequelize thành đối tượng JSON
    let studentJson = student.toJSON();

    return {
      ...studentJson,
    };
  });

  res.status(200).send(updatedData);
};

const updateScore = async (req, res) => {
  let { studentid } = req.params;
  console.log(studentid);

  let dataOne = await model.student_scores.findAll({
    where: {
      student_id: studentid,
      subject_title: "Ngữ Văn",
    },
  });

  console.log(dataOne);
  if (dataOne) {
    // let { test_score_15, test_score_45, test_score_semester } = req.body;

    let model = {
      test_score_15: 5,
      test_score_45: 6,
      test_score_semester: 7,
    };

    let data = await model.student_scores.update(model, {
      where: {
        student_id: studentid,
        subject_title: "Toán ",
      },
    });
    console.log(data); // => [1]
    if (data[0] == 1) res.status(200).send("Cập nhật Điểm thành công");
  } else res.status(400).send("học sinh không tồn tại !");
};

module.exports = {
  getStudentScore,
  updateScore,
};
