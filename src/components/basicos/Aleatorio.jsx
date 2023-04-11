export default props => {
  const { min, max } = props
  const aleatorio = parseInt(Math.random() * (props.max - props.min)) + props.min

  return (
    <>
      <p>Número Aleatório entre {min} e {max}: <strong><i>{aleatorio}</i></strong></p>
    </>
  )
}