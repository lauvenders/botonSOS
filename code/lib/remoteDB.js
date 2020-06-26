var http = require('http')
var properties = require('./properties.js')
var airtable = require('./services/airtable.js')
// These may appear null at compile time because they are fetched dynamically at runtime
var service = properties.get("config", "service")
var remoteDB
if (service) {
  switch (service) {
    case "airtable":
      remoteDB = airtable
      break;
    default:
      throw "Unrecognized service: " + service
  }
}

module.exports = {
  /**
   * DELETE UserData
   * params: userData
   **/
  deleteUserData: remoteDB && remoteDB.deleteUserData,
  /**
   * READ UserData if exists, otherwise return nothing
   * params: bixbyUserId
   **/
  getUserData: remoteDB && remoteDB.getUserData,
  /**
   * UPDATE UserData if exists, otherwise CREATE UserData
   * params: bixbyUserId, userData
   */
  putUserData: remoteDB && remoteDB.putUserData
}