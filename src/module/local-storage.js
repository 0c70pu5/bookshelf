const STORAGE_KEY = 'userInfo';

function getDefaultUserInfo() {
  return {
    name: 'guest',
    token: null
  }
}

function getUserInfo() {
  const s = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
  return {
    ...getDefaultUserInfo(),
    ...s
  };
}

function batchCreateOrUpdate(data) {
  let s = getUserInfo();
  Object.keys(data).forEach((field) => {
    s[field] = data[field];
  });

  localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
}

const userInfo = {
  get name() {
    return getUserInfo().name;
  },
  get token() {
    return getUserInfo().token;
  },
  get isAuth() {
    return Boolean(getUserInfo().token);
  },
  set auth(data) {
    batchCreateOrUpdate(data)
  },
  clear: function() {
    localStorage.removeItem(STORAGE_KEY);
  }
};

export {
  userInfo
}
