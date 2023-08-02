import { LogOutButton } from "../../molecules/LogOutButton"
import { Logo } from "../../molecules/Logo"

export const Header = () => {
	return <>
	<div className="flex flex-row justify-between sticky top-0 z-10 bg-white py-[32px] -mx-[2px]">
		<Logo />
		<LogOutButton />
	</div>
	</>
}