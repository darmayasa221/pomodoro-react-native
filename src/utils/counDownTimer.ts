type TimerType = {
  minute: number;
  second: number;
};
const countDownTimer = (timer: TimerType): string => {
  const {minute, second} = timer;
  const min = minute < 10 ? `0${minute}` : minute;
  const sec = second < 10 ? `0${second}` : second;
  return `${min} : ${sec}`;
};
export default countDownTimer;
