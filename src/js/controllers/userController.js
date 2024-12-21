import catchAsync from '../utils/catchAsync.js';
import User from '../models/userModel.js';
import AppError from '../utils/appError.js';
export const getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    status: 'success',
    data: {
      users,
    },
  });
});
export const getUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    return next(new AppError('User not found', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
export const createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      user,
    },
  });
});
export const updateUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!user) {
    return next(new AppError('User not found', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      user,
    },
  });
});
export const deleteUser = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return next(new AppError('User not found', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null,
  });
});
