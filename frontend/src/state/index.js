import {setGlobal} from 'reactn'

setGlobal({
  server: 'http://localhost:3022/api/',
  token: '',
  user: null,
  projects: null,
  tasks: [],
  currentProject: null
})

export {useGlobal, resetGlobal} from 'reactn'
