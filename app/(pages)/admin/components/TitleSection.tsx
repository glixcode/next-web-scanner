interface TitleSectionProps {
    description: string
    title: string
}

const TitleSection = ({title, description}: TitleSectionProps) => {
  return (
    <section className='title-section text-gray-900'>
        <h2 className='text-lg font-bold'>{title}</h2>
        <p className='text-gray-600 text-xs'>{description}</p>
    </section>
  )
}

export default TitleSection