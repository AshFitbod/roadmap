import { useTheme } from 'next-themes'

export default function Header() {
  const { resolvedTheme } = useTheme()

  return (
    <header className="pt-20 mb-12">
      <div className="flex justify-center">
        <img
          src={resolvedTheme === 'light' ? '/logo-light.svg' : '/logo-dark.svg'}
          alt="fitbod"
          width={140}
        />
      </div>

      <div className="mt-6 text-center text-dimmed">
        <p>Help us figure out what features to build out next!</p>
        <p>Vote up the features you want to see in the coming year.</p>
      </div>
    </header>
  )
}
