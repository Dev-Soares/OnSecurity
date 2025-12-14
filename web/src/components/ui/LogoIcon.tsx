import React from "react"
import logoLight from "/OnSecurityLight.png"
import logoDark from "/OnSecurityDark.png"

const logo = 
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? logoDark
    : logoLight

type LogoIconProps = {
  size?: number | string
  className?: string
  alt?: string
}

const LogoIcon: React.FC<LogoIconProps> = ({
  size = 32,
  className = "",
  alt = "Logo",
}) => (
  <img
    src={logo}
    width={size}
    height={size}
    alt={alt}
    className={className}
    style={{ width: size, height: size }}
    draggable={false}
  />
)

export default LogoIcon