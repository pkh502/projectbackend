import * as sessionService from '../services/sessionService.js';
import { sendResponse } from '../utils/response.js';

export const getSessions = async (req, res, next) => {
  try {
    const sessions = await sessionService.getSessions(req.params.courseId, req.user);
    sendResponse(res, 200, sessions);
  } catch (error) {
    next(error);
  }
};

export const getSessionById = async (req, res) => {
  const { courseId, id } = req.params;

  try {
    const session = await sessionService.getSessionById(courseId, id);  // Adjusted here
    sendResponse(res, 200, session);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch session' });
  }
};

export const createSession = async (req, res, next) => {
  console.log("Request Body:", req.body);
  try {
    const session = await sessionService.createSession(
      req.params.courseId,
      req.body,
      req.user
    );
    sendResponse(res, 201, session);
  } catch (error) {
    next(error);
  }
};

export const updateSession = async (req, res, next) => {
  try {
    const session = await sessionService.updateSession(
      req.params.courseId,
      req.params.id,
      req.body,
      req.user
    );
    sendResponse(res, 200, session);
  } catch (error) {
    next(error);
  }
};

export const deleteSession = async (req, res, next) => {
  try {
    await sessionService.deleteSession(req.params.courseId, req.params.id, req.user);
    sendResponse(res, 200, null, 'Session deleted successfully.');
  } catch (error) {
    next(error);
  }
};
