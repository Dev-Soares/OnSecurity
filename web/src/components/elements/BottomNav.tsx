import type { FunctionComponent } from "react"
import { Users, FileText, Info, Flag, User } from "lucide-react"
import { useNavigate, useLocation } from "react-router-dom"

type NavItemProps = {
  icon: (active: boolean) => React.ReactNode
  route: string
  label: string
}

const NavItem: FunctionComponent<NavItemProps> = ({ icon, route, label }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const isActive = location.pathname === route;

  return (
    <button
      onClick={() => navigate(route)}
      className="relative flex flex-1 flex-col items-center justify-center px-3 py-1 transition-colors duration-200 cursor-pointer gap-1 bg-transparent"
      style={{ outline: "none" }}
    >
      <span
        className={`
          absolute left-0 top-0 h-[3px] bg-blue-500
          transition-all duration-300 rounded-4xl 
          ${isActive ? "w-full" : "w-0"}
        `}
        style={{ top: "-13px" }}
      />
      {icon(isActive)}
      <p className={`font-semibold text-sm ${isActive ? "text-blue-500" : "text-gray-400 dark:text-gray-200"} mt-0.5`}>{label}</p>
    </button>
  )
}

const iconClass = "w-7 h-7 transition-colors duration-300";

const BottomNav: FunctionComponent = () => {
  return (
    <nav
      className="lg:hidden fixed left-0 right-0 bottom-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center py-3"
      style={{ margin: 0, paddingBottom: 'calc(12px + env(safe-area-inset-bottom))' }}
    >
      <NavItem
        icon={active => (
          <Users className={`${iconClass} ${active ? "text-blue-500" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        route="/community"
        label="Comunidade"
      />
      <NavItem
        icon={active => (
          <FileText className={`${iconClass} ${active ? "text-blue-500" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        route="/articles"
        label="Artigos"
      />
      <NavItem
        icon={active => (
          <Flag className={`${iconClass} ${active ? "text-blue-500" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        route="/complaint"
        label="Denúncias"
      />
      <NavItem
        icon={active => (
          <Info className={`${iconClass} ${active ? "text-blue-500" : "text-gray-400 dark:text-gray-200"}`} />
        )}
        route="/about"
        label="Sobre "
      />
    </nav>
  )
}

export default BottomNav
