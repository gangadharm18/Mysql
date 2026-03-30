const users=require('./usersmodel')
const bookings=require('./bookingmodel')
const buses=require('./busesmodel')
const payments=require('./paymentsmodel')

users.hasMany(bookings)
bookings.belongsTo(users)

// users.hasOne(payments)
// payments.belongsTo(users)

buses.hasMany(bookings)
bookings.belongsTo(buses)

module.exports={
    users,
    bookings,
    buses,
    payments
}