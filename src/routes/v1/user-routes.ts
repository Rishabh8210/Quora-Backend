import { Router } from "express";
import UserController from "../../controllers/user-controller";
import { validateAuthorizationHeader } from "../../middleware/auth-validator";
const router = Router()
const userController = new UserController();

// User routes
router.post('/:followerId', validateAuthorizationHeader, userController.addInFollowingList);
router.get('/followings', validateAuthorizationHeader, userController.getFollowingList);
router.get('/followers', validateAuthorizationHeader, userController.getFollowersList);

router.post('/hashtags/:hashtagId', validateAuthorizationHeader, userController.followHashtags)
router.get('/hashtags', validateAuthorizationHeader, userController.getFollowedHashtags)
router.delete('/hashtags/:hashtagId', validateAuthorizationHeader, userController.removeFollowedHashtag);

router.get('/', userController.getUserByUsername)
router.get('/:userId', userController.getUserById);
router.delete('/:userId', userController.deleteUserData)
router.patch('/:userId', userController.updateUserData)

export default router