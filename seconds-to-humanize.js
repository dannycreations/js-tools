function secondsToHumanize(seconds) {
  seconds = Number(seconds)
  let y = Math.floor(seconds / 31536000)
  let d = Math.floor(seconds % 31536000 / 86400)
  let h = Math.floor(seconds % 86400 / 3600)
  let m = Math.floor(seconds % 3600 / 60)
  let s = Math.floor(seconds % 3600 % 60)
  y = y > 0 ? y + (y == 1 ? ' Year ' : ' Years ') : ''
  d = d > 0 ? d + (d == 1 ? ' Day ' : ' Days ') : ''
  h = h > 0 ? h + (h == 1 ? ' Hour ' : ' Hours ') : ''
  m = m > 0 ? m + (m == 1 ? ' Minute ' : ' Minutes ') : ''
  s = s > 0 ? s + (s == 1 ? ' Second' : ' Seconds') : ''
  return (y + d + h + m + s).trimEnd()
}
