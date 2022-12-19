const Traveller = require('./traveller')
const Location = require('./location')
const Trip = require('./trip')

Traveller.belongsToMany(Location, {
  through: "trip",
  as: "locations",
  foreignKey: "traveller_id"
});

Location.belongsToMany(Traveller,{
  through: "trip",
  as: "travellers",
  foreignKey: "location_id"
})

module.exports = { Traveller, Location, Trip }