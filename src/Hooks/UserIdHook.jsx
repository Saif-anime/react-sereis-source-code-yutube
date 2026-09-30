import React, {useId} from 'react'

export const UserIdHook = () => {
    const uniquser = useId();
    const passuniq  = useId();
  return (
    <>
    <div id={uniquser}>UserIdHook</div>
    <div id={passuniq}>PassUniq</div>

    </>
  )
}
