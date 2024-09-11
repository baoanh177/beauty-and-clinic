import { useArchive } from "@/hooks/useArchive"
import { IAuthInitialState } from "@/services/store/auth/auth.slice"

const UserName = () => {
  const {state} = useArchive<IAuthInitialState>("auth")
  return state.profile ? state.profile.name || state.profile.email.split("@").at(0) : ""
}

export default UserName