function workinghours(req, res, next) {
    let currentDate = new Date();
    let dayOfWeek = currentDate.getDay();
    let currentHour = currentDate.getHours();
    let openingdays = [1, 2, 3, 4, 5,0];
  
    if (openingdays.includes(dayOfWeek) && currentHour >= 9 && currentHour <= 17) {
      return next();
    } else {
      res.redirect('errorpage');
    }
  }
  
  module.exports = workinghours;
  