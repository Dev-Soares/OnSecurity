import Sidebar from "../components/content/Sidebar.tsx"
import Content from "../components/content/Content.tsx"

const MainPage = () => {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between ">
        <Sidebar />
        <Content />
    </main>
  )
}

export default MainPage
