export const statusName = (statusInt) => {
	switch(statusInt) {
		case 0: 
			return 'pending'
		case 1:
			return 'accepted'
		case 2:
			return 'rejected'
		case 3:
			return 'error'
	}
}

export const fromDateToInt = (date) => {
  let result = Math.floor(date.getFullYear() * 10000)
  result += Math.floor((date.getMonth() + 1) * 100)
  result += date.getDate()
  return result
}

export const fromIntToDate = (date) => {
  const dateStr = date.toString(10)
  const year = dateStr.slice(0, 4)
  const month = dateStr.slice(4, 6)
  const day = dateStr.slice(-2)

  const parsedDate = new Date();
  parsedDate.setFullYear(parseInt(year))
  parsedDate.setMonth(parseInt(month) - 1)
  parsedDate.setDate(parseInt(day))

  return parsedDate
}
