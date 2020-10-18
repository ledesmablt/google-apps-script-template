function test() {
  // captured in stackdriver logs
  Logger.log('hello world!');

  // returned when running 'clasp run test'
  return 'OK'
}
