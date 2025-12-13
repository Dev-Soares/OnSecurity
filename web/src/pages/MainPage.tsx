import Sidebar from "../components/elements/Sidebar.tsx"
import Content from "../components/elements/Content.tsx"

const MainPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-row items-center justify-between ">
        <Sidebar />
        <Content />
    </main>
  )
}

export default MainPage
