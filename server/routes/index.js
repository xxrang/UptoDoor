const express = require('express');
const router = express.Router();
const controllers = require('../controllers/index');
const auth = require('../middlewares/auth');
const upload = require('../middlewares/multer');

router.post('/users/signup', controllers.SignUp);
router.post('/users/signin', auth, controllers.Login);
router.post('/users/signout/', controllers.SignOut);
router.delete('/users', auth, controllers.Withdraw);
router.get('/users/userinfo',  controllers.UserInfo);
router.patch('/users/userinfo', auth, controllers.UpdateUser);
router.get('/users/orderinfo/:id', controllers.UserOrder);
router.post('/users/order', auth, controllers.Order);
router.delete('/users/order/:id', auth, controllers.DeleteOrder);
router.post('/users/address', auth, controllers.Address);
router.post('/admin/store', auth, controllers.Store);
router.get('/admin/store/:id', controllers.StoreData);
router.patch('/admin/store/:id', auth, controllers.UpdateStore);
router.get('/admin/admininfo', controllers.AdminInfo);
router.delete('/admin/store/:id', auth, controllers.DeleteStore);
router.get('/store', controllers.StoreMap);
router.get('/storeinfo/:id', auth, controllers.StoreInfo);
router.get('/auth/email', controllers.Email);
router.post('/auth/email', controllers.EmailSend);
router.post('/oauth/kakao/signout', auth, controllers.KakaoSignout);
router.post('/oauth/kakao/login', controllers.Kakaologin);
router.post('/oauth/naver/signout', auth, controllers.NaverSignout);
router.post('/oatuh/naver/login', controllers.Naverlogin);
router.post('/image', upload.single('file'), controllers.Image);
router.post('/feedback', controllers.Feedback);
router.post('/payment', controllers.Payment);
<<<<<<< HEAD
router.delete('/cancel/:id', controllers.Cancel);
router.get('/term', controllers.Term);
=======
router.delete("/cancel/:id", controllers.Cancel);
>>>>>>> 7aa89294683145cec8f5ab5eca889c758cb2805d
module.exports = router;
