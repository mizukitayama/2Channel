import { LogOutButton } from "../../molecules/LogOutButton"
import { Logo } from "../../molecules/Logo"

export const Header = () => {
	return <>
	<div className="grid grid-cols-12 sticky top-0 z-10 bg-white py-[8px]">
		<Logo />
		<LogOutButton />
	</div>
	</>
}