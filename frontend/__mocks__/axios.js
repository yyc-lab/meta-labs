export default (opts) => {
  console.log('fake axios is called')
  return Promise.resolve({ fake: 'data' })
}