import Sidebar from "../components/elements/Sidebar.tsx"
import Content from "../components/elements/Content.tsx"

const MainPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-between 2xl:pl-32 bg-white dark:bg-gray-950">
        <Sidebar />
        <Content />
    </main>
  )
}

export default MainPage
