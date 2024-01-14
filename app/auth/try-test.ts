{
  {
    const date = new Date()
    const options = { timeZone: 'Asia/Jakarta' }
    const formatter = new Intl.DateTimeFormat('id-ID', options)

    console.log(formatter.format(date))
  }
}
