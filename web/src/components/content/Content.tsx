import type { FunctionComponent } from "react"
import BottomNav from "../ui/BottomNav"
import ToggleTheme from "../ui/ToggleTheme"

const Content: FunctionComponent = () => {

  return (
    <main className="dark:bg-gray-800 min-h-screen w-full overflow-auto pb-16 md:pb-0" >
      <div className="fixed top-4 right-4 z-50 w-auto h-auto">
        <ToggleTheme />
      </div>
      <BottomNav />
    </main>
  )
}

export default Content
