const USER_NAME_KEY = 'name';
export function getUserName() {
  if (typeof localStorage == 'undefined') {
    return '';
  }
  const userName = localStorage.getItem(USER_NAME_KEY) || '';

  return userName !== 'undefined' ? userName : '';
}

export function setUserName(name: string) {
  localStorage.setItem(USER_NAME_KEY, name);
}
