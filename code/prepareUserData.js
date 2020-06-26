module.exports.function = function ($vivContext, previousUserData, mensajeAlertaConfig, contacto) {
  // Use previous data or default init
  // const userData = previousUserData || { version: 1}
  const userData = previousUserData || { version: 1}

  if (mensajeAlertaConfig) {
    userData.mensajeAlertaConfig = mensajeAlertaConfig
  }

  if (contacto) {
    userData.contacto = contacto
  }

  return userData
}