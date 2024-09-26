'use client'
import {AppProgressBar as ProgressBar} from 'next-nprogress-bar'

const Progress = ({}) => {
  return (
    <ProgressBar
      height="4px"
      color="#F74D4D"
      options={{ showSpinner: false }}
      shallowRouting
    />
  )
}

export default Progress
