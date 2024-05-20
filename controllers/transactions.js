const Transaction = require("../models/Transaction");

//description: Get all transactions
//route: GET /api/v1/transactions
//access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();
    console.log("entering to get end point", transactions);
    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server err",
    });
  }
};

//description: Add transaction
//route: POST /api/v1/transactions
//access Public
exports.addTransaction = async (req, res, next) => {
  try {
    const { text, amount } = req.body;
    const transaction = await Transaction.create(req.body);
    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        error: messages,
      });
    }
    console.log(err);
  }
};

//description: Delete transaction
//route: DELETE /api/v1/transactions
//access Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params._id);

    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: "No transaction found",
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
