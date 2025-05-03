function isEven() {
  const date = new Date();
  const currentDay = date.getDate();
  return currentDay % 2 === 0;
}

console.log(`Сегодня ${isEven() ? 'чётный' : 'нечётный'} день.`);

module.exports = { isEven };
