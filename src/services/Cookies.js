import Cookies from 'js-cookie'

function setCookie(name, value, days) {
  Cookies.set(name, value, { expires: days, secure: true, sameSite: 'None', path: '/' })
}

function getCookie(name) {
  if (Cookies.get(name)) {
    return Cookies.get(name)
  } else {
    return sessionStorage.getItem(name)
  }
}

function removeCookie(name) {
  if (Cookies.get(name)) {
    Cookies.remove(name, { path: '/' })
  } else {
    sessionStorage.removeItem(name)
  }
}

function checkCookie() {
  if (getCookie('userLogin') || sessionStorage.getItem('userLogin')) {
    return true
  } else {
    return false
  }
}

export { setCookie, getCookie, removeCookie, checkCookie }
