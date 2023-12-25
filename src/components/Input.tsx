import { ChangeEvent, RefObject, useState } from "react"

type PropsType = {
  // value: string,
  // title: string
  // setTitle: (title: string) => void
  title: RefObject<HTMLInputElement>
}

export const Input = (props: PropsType) => {

  // const [title, setTitle] = useState('')

  // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   props.setTitle(e.currentTarget.value)
  // }
  return (
    <input
      ref={props.title}
    // value={props.title} onChange={onChangeHandler} 
    />
  )
}