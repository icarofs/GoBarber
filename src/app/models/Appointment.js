module.exports = (sequelize, dataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: dataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { ForeignKey: 'user_id' })
    Appointment.belongsTo(models.User, { ForeignKey: 'provider_id' })
  }

  return Appointment
}
