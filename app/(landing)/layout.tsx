const LandingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="h-screen bg-gradient-to-r from-gray-400 via-black-500 to-green-600 overflow-auto">

      <div className="mx-auto max-w-screen-xl h-full w-full">
        {children}
      </div>
    </main>
  )
}

export default LandingLayout;