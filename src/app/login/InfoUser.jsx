import Image from 'next/image'

// ------------------------------
export default function InfoUser({ user }) {
  if (!user) return null

  const { name, email, avatar } = user

  return (
    <InfoUserRoot>
      <InfoUserImage
        alt={name}
        src={avatar}
      />
      <InfoUserTitle>{name}</InfoUserTitle>
      <InfoUserEmail>{email}</InfoUserEmail>
    </InfoUserRoot>
  )
}

function InfoUserRoot({ children }) {
  return <section className='flex flex-col'>{children}</section>
}

function InfoUserImage({ alt, src }) {
  return (
    <Image
      className='m-auto rounded-full'
      src={src}
      width={130}
      height={130}
      alt={alt}
    />
  )
}

function InfoUserTitle({ children }) {
  return <h2 className='text-xl font-bold'>{children}</h2>
}

function InfoUserEmail({ children }) {
  return <p>{children}</p>
}
