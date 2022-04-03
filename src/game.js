export default function sortWarriors(arr) {
  return arr.sort((a, b) => b.health - a.health);
}
