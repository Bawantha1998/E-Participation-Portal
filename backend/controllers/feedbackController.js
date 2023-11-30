const db = require("../database/connection");
const { sendEmail } = require("../controllers/emailController");

const getFeedback = (req, res) => {
  const contentId = req.params.content_id;
  const q =
    "SELECT * FROM tbl_feedback LEFT JOIN tbl_content ON tbl_content.content_id = tbl_feedback.content_id WHERE  tbl_content.content_url = ? and tbl_feedback.feedback_status = 1";
  db.query(q, [contentId], (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
};

const addGeneralFeedback = (req, res) => {
  const q =
    "INSERT INTO tbl_general_feedback (`first_name`, `last_name`, `email`, `phone_no`, `gen_subject`, `gen_feedback` ) VALUES (?)";
  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.phone_no,
    req.body.gen_subject,
    req.body.gen_feedback,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      return res.status(500).send(err);
    }

    // Send email to the user
    sendEmail(
      req.body.email,
      "General Feedback Received",
      "Thank you for your feedback!"
    );

    return res.json(data);
  });
};

const addFeedback = (req, res) => {
  const q =
    "INSERT INTO tbl_feedback (`first_name`, `last_name`, `email`, `phone_no`, `feedback`, `content_id`, `created_at` ) VALUES (?)";

  const currentDate = new Date();
  const formattedDate =
    [
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      currentDate.getDate(),
    ].join("-") +
    " " +
    [
      currentDate.getHours(),
      currentDate.getMinutes(),
      currentDate.getSeconds(),
    ].join(":");

  const values = [
    req.body.first_name,
    req.body.last_name,
    req.body.email,
    req.body.phone_no,
    req.body.feedback,
    req.body.content_idInput,
    formattedDate,
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error("Error adding feedback:", err);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    return res.json(data);
  });
};

exports.getFeedback = getFeedback;
exports.addGeneralFeedback = addGeneralFeedback;
exports.addFeedback = addFeedback;
