import type { FunctionComponent } from "react"
import { Home, Users, FileText, Info, User } from "lucide-react"

type NavItemProps = {
  icon: React.ReactNode
  path?: string
}

const NavItem: FunctionComponent<NavItemProps> = ({ icon }) => {
  return (
    <button className="flex items-center justify-center p-3 text-blue-600 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 cursor-pointer">
      {icon}
    </button>
  )
}

const BottomNav: FunctionComponent = () => {
  return (
    <nav
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 flex justify-around items-center h-20"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <NavItem icon={<Home className="w-7 h-7" />} path="/" />
      <NavItem icon={<Users className="w-7 h-7" />} path="/comunidade" />
      <NavItem icon={<FileText className="w-7 h-7" />} path="/artigos" />
      <NavItem icon={<Info className="w-7 h-7" />} path="/sobre" />
      <NavItem icon={<User className="w-7 h-7" />} path="/perfil" />
    </nav>
  )
}

export default BottomNav
