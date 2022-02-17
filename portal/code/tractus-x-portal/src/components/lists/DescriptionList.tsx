const DescriptionList = (props) => {
  return(
    <dl className="df mb8">
      <dt className='dib w150 fs14 fggrey'>{props.title}</dt>
      <dd className='fs14 fg5a dib bw'>{props.description}</dd>
    </dl>
  )
}

export default DescriptionList;
