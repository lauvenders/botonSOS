var console = require('console')

module.exports.function = function getGeoPoint(geoPoint, mensajeAlerta, userData) {
  if (userData) {
    if (mensajeAlerta.equals(userData.mensajeAlertaConfig)) {
      return {
        contacto: userData.contacto,
        ubicacion: "https://www.latlong.net/c/?lat" + geoPoint.latitude + "&long=" + geoPoint.longitude,
        geoPoint: geoPoint
      }
    }
  }
  return null
}
