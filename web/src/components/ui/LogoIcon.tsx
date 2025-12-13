import React from "react"
import logo from "/OnSecurityLight.png" // ajuste o caminho se necessário

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