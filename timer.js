Date.prototype.getInterval = function (otherDate) {
  var interval;

  if (this> otherDate) {
    interval = this.getTime() - otherDate.getTime();
  } else {
    interval = otherDate.getTime() - this.getTime();
  }

  return interval;
};

/* id가 timer인 태그를 나타내는 문서 객체 */
var timer = document.getElementById('timer');
/* 괄호 안에 (년, 월, 일, 시, 분, 초, 밀리초) 순으로 기입 */
var dateToCompare = new Date(2016, 3, 6, 13, 0, 0, 0);

setInterval(function() {
  var dummy = '전역할 때까지 남은 시간은...... \n\t\t';

  var dateToday = new Date();
  var interval = dateToday.getInterval(dateToCompare);

  var miliseconds = interval % 1000;
  var seconds = Math.floor(( interval / 1000 ) % 60 );
  var minutes = Math.floor(( interval / (1000 * 60) ) % 60 );
  var hours = Math.floor(( interval / (1000 * 60 * 60) ) % 24 );
  var days = Math.floor(( interval / (1000 * 60 * 60 * 24)));

  dummy += days + '일 ';
  dummy += hours + '시간 ';
  dummy += minutes + '분 ';
  dummy += seconds + '초 ';
  dummy += miliseconds;

  timer.innerHTML = dummy;
}, 1);
