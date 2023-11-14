
const localeSettings = {};
dayjs.locale(localeSettings);
  

$(function () {

  const currentHour = dayjs().format('H');
  function hourlyColor() {
    $('.time-block').each(function() {
      const blockHour = parseInt(this.id);
      $(this).toggleClass('past', blockHour < currentHour);
      $(this).toggleClass('present', blockHour === currentHour);
      $(this).toggleClass('future', blockHour > currentHour);
    });
  }
})


 

