interface TitleSectionProps {
    description: string
    title: string
}

const TitleSection = ({title, description}: TitleSectionProps) => {
  return (
    <section className='title-section text-gray-900 mb-8'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='text-gray-600 text-sm'>{description}</p>
    </section>
  )
}

export default TitleSection