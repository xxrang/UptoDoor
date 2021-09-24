module.exports = {
    Login: require('./Users/Login'),
    SignOut: require('./Users/Signout'),
    SignUp: require('./Users/Signup'),
    UserInfo: require('./Users/Userinfo'),
    UpdateUser: require('./Users/Updateuser'),
    UserOrder: require('./Users/Userorder'),
    Order: require('./Users/Order'),
    DeleteOrder: require('./Users/Deleteorder'),
    AdminInfo: require('./Admin/Admininfo'),
    Position: require('./Admin/Position'),
    Image: require('./Image/Image'),
    Store: require('./Admin/Store'),
    StoreData: require('./Admin/Storedata'),
    UpdateStore: require('./Admin/Updatestore'),
    Email: require('./Auth/Email'),
    EmailSend: require('./Auth/EmailSend'),
    Kakaologin: require('./Oauth/kakao/Login'),
    KakaoSignout: require('./Oauth/kakao/Signout'),
    Naverlogin: require('./Oauth/naver/Login'),
    NaverSignout: require('./Oauth/naver/Signout'),
    Address: require('./Map/Address'),
    StoreInfo: require('./Map/Storeinfo'),
    StoreMap: require('./Map/Store')
}
