import type { FunctionComponent } from "react"
import BottomNav from "./BottomNav"
import Header from "./Header"
import { useContent } from "../../contexts/contentContext"


const Content: FunctionComponent = () => {

  const { shownContent } = useContent();

  return (
    <main className="dark:bg-gray-900 bg-white min-h-screen w-full overflow-auto pb-16 md:pb-10" >
      <Header userImg={null} />
      {shownContent}
      <BottomNav />
    </main>
  )
}

export default Content
