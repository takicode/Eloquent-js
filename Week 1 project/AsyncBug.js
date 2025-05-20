async function activityTable(day) {
  let logFileList = await textFile('camera_logs.txt')
  let logFiles = logFileList.split('\n').filter((file) => file.trim() !== '')

  let hourCounts = new Array(24).fill(0)

  for (let file of logFiles) {
    let content = await textFile(file.trim())
    let lines = content.split('\n').filter((line) => line.trim() !== '')

    for (let line of lines) {
      let timestamp = Number(line.trim())
      let date = new Date(timestamp)

      if (date.getDay() === day) {
        let hour = date.getHours()
        hourCounts[hour]++
      }
    }
  }
  return hourCounts
}
