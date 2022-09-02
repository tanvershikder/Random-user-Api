const express = require("express")

const router = express.Router()
const userController = require('../../Controller/user.controler')

router.route('/Get/user/All')
/**
 * @api {get} / get request
 * @apiDescription get all user with limit
 * @apiPermission admin
 * 
 * @apiHeader {string} Authentication user's access token
 * @apiQuery {Number{1-}}               user par page
 * @apiSuccess {objecet []} all user
 * 
 * @apiError (unauthorized 401) UnAuthorized only authneticatic user can access the data
 * @apiError (Forbiden 403)     forbiden  if user not admin
 * 
 * 
 */
.get(userController.gellAllusers)

router.route('/Get/User/Random')

/**
 * @api {get} / get request
 * @apiDescription get Random user
 * @apiPermission admin
 * 
 * @apiHeader {string} Authentication user's access token
 * @apiParam {Number{1-}}        page{limit=1-}       list page
 * @apiParam {Number{1-100}}        page{limit=10}       uaer par page
 * 
 * @apiSuccess {objecet []} all user
 * 
 * @apiError (unauthorized 401) UnAuthorized only authneticatic user can access the data
 * @apiError (Forbiden 403)     forbiden  if user not admin
 * 
 * 
 */
.get(userController.getRandom)

router.route('/Post/user/save')
/**
 * @api {post} /post request
 * @apiDescription post a user
 * @apiPermission admin
 * @apiBody send user data if you don't all information then it send an message
 * 
 * 
 * @apiHeader {string} Authentication user's access token
 * 
 * @apiSuccess {objecet []} all user
 * 
 * @apiError (unauthorized 401) UnAuthorized only authneticatic user can access the data
 * @apiError (Forbiden 403)     forbiden  if user not admin
 * 
 * 
 */
.post(userController.postUserData)

router.route('/Patch/user/save/:id')
/**
 * @api {patch} /patch request
 * @apiDescription patch a user data
 * @apiPermission admin
 * @apiBody send user data 
 *
 * @apiHeader {string} Authentication user's access token
 * 
 * @apiSuccess {objecet []} all user
 * 
 * @apiError (unauthorized 401) UnAuthorized only authneticatic user can access the data
 * @apiError (Forbiden 403)     forbiden  if user not admin
 * 
 * 
 */
.patch(userController.patchUserData)


router.route('/Patch/user/bulk-update')
.patch(userController.patchMultipleuserData)


router.route('/Delete/user/delete/:id')
.delete(userController.deleteUser)

module.exports = router;