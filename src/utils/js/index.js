import fitRem from './rem.js'

function isLocal() {
  const hostname = localion.hostname
  return /127\.0\.0\.1/.test(hostname) || /localhost/.test(hostname) || /^(\d+\.){1,}\d+$/.test(hostname)
}

function getUrlParam(name) {
  const params = QueryString.parse(location.search)
  return (name === 'undefined') ? undefined : params[name]
}

export {
  fitRem,
  isLocal,
  getUrlParam
}
