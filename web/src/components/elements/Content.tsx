import type { FunctionComponent } from "react"
import BottomNav from "../ui/BottomNav"
import ToggleTheme from "../ui/ToggleTheme"
import { useContent } from "../../contexts/contentContext"


const Content: FunctionComponent = () => {

  const { shownContent } = useContent();

  return (
    <main className="dark:bg-gray-900 bg-gray-200 min-h-screen w-full overflow-auto pb-16 md:pb-0" >
      <div className="fixed top-4 right-4 z-50 w-auto h-auto">
        <ToggleTheme />
      </div>
      {shownContent}
      <BottomNav />
    </main>
  )
}

export default Content
