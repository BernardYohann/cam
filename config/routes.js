/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },

  //AUTH
  'post /login' : 'AuthController.login',
  'post /register' : 'AuthController.register',
  'get /logout' : 'AuthController.logout',
  //USER
  'get /user' : 'UserController.getAllUsers',
  'get /user/:id' : 'UserController.getUserById',
  'put /user/update' : 'UserController.updateUser',
  'delete /user/delete/:id' : 'UserController.deleteUser',
  //CAMERA
  'get /camera/:id' : 'CameraController.getCameraById',
  'post /camera/add' : 'CameraController.addCamera',
  'put /camera/update' : 'CameraController.addCamera',
  'delete /camera/delete/:id' : 'CameraController.deleteCamera',
  //CAMERA ACTIONS
  'put /camera/switchon/:id' : 'CameraController.switchOn',
  'put /camera/switchoff/:id' : 'CameraController.switchOff',
  'put /camera/turnleft/:id' : 'CameraController.turnLeft',
  'put /camera/turnright/:id' : 'CameraController.turnRight',
  //USERCAMERAROLE
  'get /usercamerarole/:cameraid/:userid/role' : 'UserCameraRoleController.getRole',
  'get /usercamerarole/:cameraid/users' : 'UserCameraRoleController.getCameraUsers',
  'get /usercamerarole/:userid/cameras' : 'UserCameraRoleController.getUserCameras',
  'post /usercamerarole/add' : 'UserCameraRoleController.addUserCameraRole',
  'put /usercamerarole/update/:id' : 'UserCameraRoleController.addUserCameraRole',
  'delete /usercamerarole/delete/:id' : 'UserCameraRoleController.deleteUserCameraRole',
  //ROLE
  'get /role' : 'RoleController.getAllRoles',
  'get /role/:id' : 'RoleController.getRoleById',
  'put /role/update' : 'RoleController.updateRole',
  //LOGS
  'get /log' : 'LogController.getAllLogs',
  'get /log/camera/:id' : 'LogController.getLogByCameraId',
  'get /log/user/:id' : 'LogController.getLogByUserId',
  'post /log/add' : 'LogController.addLog',

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
