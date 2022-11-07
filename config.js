// 实例化 veGameSDK 的参数
const initConfig = {
  userId: 'vegame-demo',
  enableLocalKeyboard: true, // 是否开启本地键盘输入。前提：需要联系运营同学给游戏所在业务开启「拉起本地输入法配置」
  accountId: 'Please enter your accountId here', // startConfig.token 对应的 accountId
};

// 调用 veGameSDK.start 的参数
const startConfig = {
  gameId: 'Please enter your gameId here',
  token: {
    CurrentTime: 'Please enter your CurrentTime here',
    ExpiredTime: 'Please enter your ExpiredTime here',
    SessionToken:
      'Please enter your SessionToken here',
    AccessKeyID: 'Please enter your AccessKeyID here',
    SecretAccessKey: 'Please enter your SecretAccessKey here',
  },
  roundId: 'vegame-demo-roundid',
  rotation: 'portrait', // landscape：横屏启动; portrait：竖屏启动
};

window.initConfig = initConfig;
window.startConfig = startConfig;
