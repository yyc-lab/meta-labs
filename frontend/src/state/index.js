import {setGlobal} from 'reactn'

setGlobal({
  token: '',
  user: null,
  projects: null,
  tasks: [],
  currentProject: null
})

export {useGlobal, resetGlobal} from 'reactn'