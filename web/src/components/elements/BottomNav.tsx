import type { FunctionComponent } from "react"
import { Users, FileText, Info, Flag, User } from "lucide-react"
import type { ContentId } from "../../contexts/contentContext"
import { useContent } from "../../contexts/contentContext"

type NavItemProps = {
  icon: (active: boolean) => React.ReactNode
  id: ContentId
  label: string
}

const NavItem: FunctionComponent<NavItemProps> = ({ icon, id, label }) => {

  const { shownContentId, setShownContentId } = useContent();

  const isActive = shownContentId === id;

  return (
    <button
      onClick={() => setShownContentId(id)}
      className="relative flex flex-1 flex-col items-center justify-center p-3 transition-colors duration-200 cursor-pointer gap-1 bg-transparent"
      style={{ outline: "none" }}
    >
      <span
        className={`
          absolute left-0 top-0 h-[3px] bg-blue-500
          transition-all duration-300 rounded-4xl
          ${isActive ? "w-full" : "w-0"}
        `}
        style={{ top: "-10px" }}
      />
      {icon(isActive)}
      <p className={`font-semibold text-sm ${isActive ? "text-blue-500" : "text-gray-400 dark:text-gray-200"}`}>{label}</p>
    </button>
  )
}

const iconClass = "w-7 h-7 transition-colors duration-300";

const BottomNav: FunctionComponent = () => {
  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center h-23"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <NavItem
        icon={active => (
          <Users className={`${iconClass} ${active ? "text-blue-500" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        id="community"
        label="Comunidade"
      />
      <NavItem
        icon={active => (
          <FileText className={`${iconClass} ${active ? "text-blue-500" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        id="articles"
        label="Artigos"
      />
      <NavItem
        icon={active => (
          <Flag className={`${iconClass} ${active ? "text-blue-500" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        id="complaint"
        label="Denúncias"
      />
      <NavItem
        icon={active => (
          <Info className={`${iconClass} ${active ? "text-blue-500" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        id="about"
        label="Sobre "
      />
    </nav>
  )
}

export default BottomNav
