type PropsType = {
  name: string
  onClick: () => void
}

export const Button = (props: PropsType) => {

  const onClickHandler = () => props.onClick()

  return (
    <button onClick={onClickHandler}>{props.name}</button>
  )
}