import type { FunctionComponent } from "react"
import { Home, Users, FileText, Info, User } from "lucide-react"
import type { ContentId } from "../../contexts/contentContext"
import { useContent } from "../../contexts/contentContext"

type NavItemProps = {
  icon: (active: boolean) => React.ReactNode
  id: ContentId
}

const NavItem: FunctionComponent<NavItemProps> = ({ icon, id }) => {

  const { shownContentId, setShownContentId } = useContent();

  const isActive = shownContentId === id;

  return (
    <button
      onClick={() => setShownContentId(id)}
      className="relative flex flex-col items-center justify-center p-3 transition-colors duration-200 cursor-pointer bg-transparent"
      style={{ outline: "none" }}
    >
      {icon(isActive)}
      <span
        className={`
          absolute left-0 bottom-0 h-1 rounded-full bg-blue-600
          transition-all duration-300
          ${isActive ? "w-full" : "w-0"}
        `}
      />
    </button>
  )
}

const iconClass = "w-8 h-8 transition-colors duration-300";

const BottomNav: FunctionComponent = () => {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center h-20"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <NavItem
        icon={active => (
          <Home className={`${iconClass} ${active ? "text-blue-600" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        id="home"
      />
      <NavItem
        icon={active => (
          <Users className={`${iconClass} ${active ? "text-blue-600" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        id="community"
      />
      <NavItem
        icon={active => (
          <FileText className={`${iconClass} ${active ? "text-blue-600" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        id="articles"
      />
      <NavItem
        icon={active => (
          <Info className={`${iconClass} ${active ? "text-blue-600" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        id="about"
      />
      <NavItem
        icon={active => (
          <User className={`${iconClass} ${active ? "text-blue-600" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        id="profile"
      />
    </nav>
  )
}

export default BottomNav
