class HttpConnection {
  static get (url) {
    fetch (url)
      .then(hr => hr.json())
        
    /*
      .then(httpresponse => httpresponse.json())
        .then(callback)
        */
  }
  static add (url, object, callback) {
    const conf = { method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(object) }
    fetch(url, conf)
    .then(hr => hr.json())
      .then(callback)
  }
  static delete (url, id, callback) {
    let conf = { method: 'DELETE' }
    fetch(url + id + '/', conf)
      .then(httpresponse => httpresponse.status)
        .then(callback)
  }
}
