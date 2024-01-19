import Navbar from './_components/navbar'

type ProtectedLayoutProps = {
  children: React.ReactNode
}

export default function ProtectedLayoutProps({
  children
}: ProtectedLayoutProps) {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-200 to-blue-800">
      <div className="w-[95%] md:w-[600px] mx-auto space-y-6">
        <Navbar />
        {children}
      </div>
    </div>
  )
}
