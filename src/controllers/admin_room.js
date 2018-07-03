import models from '../database/models';

export default (req, res, next) => {
  const { params: { id: roomId } } = req;
  models.Rooms.findOne({ where: { id: roomId } }).then((roomInfo) => {
    const roomName = roomInfo.room_name;
    constels.ExtBookings.findAll({
      include: [{
        model: models.Bookings,
        where: { room_id: roomId },
        includes: [{
          model: models.Rooms,
        }],
      }, {
        model: models.Clients,
      }],
    }).then((result) => {
      res.render('admin_rooms', {
        pageTitle: 'admin Rooms',
        layout: 'admin',
        clients: result,
        roomName,
        jsFile: ['admin'],
      });
    }).catch((e) => {
      next(e);
    });
  });
};
