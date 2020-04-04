const User = require("../models/User");
const asyncHandler = require("../middleware/async");
const ErrorResponse = require("../utils/errorResponse");

// @desc    Get all users
// @route   GET /api/users
// @access  Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({ success: true, count: users.length, data: users });
});

// @desc    Get signle user
// @route   GET /api/users/:id
// @access  Public
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(`User with id: ${req.params.id} does not exists`, 404)
    );
  }

  res.status(200).json({ success: true, count: users.length, data: users });
});

// @desc    Create user
// @route   POST /api/users
// @access  Private
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = new User(req.body);

  await user.save();

  res.status(200).json({ success: true, data: users });
});

// @desc    Update user
// @route   PUT /api/users/:id
// @access  Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  let user;
  user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(`User with id: ${req.params.id} does not exists`, 404)
    );
  }

  user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ success: true, data: users });
});

// @desc    Delete user
// @route   DELETE /api/users/:id
// @access  Private
exports.deleteUser = asyncHandler(async (req, res, next) => {
  let user;
  user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorResponse(`User with id: ${req.params.id} does not exists`, 404)
    );
  }

  user = User.findByIdAndRemove(req.params.id);

  res.status(200).json({ success: true, data: users });
});
