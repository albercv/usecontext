import { users } from "../data/users"

export const ValidateUser = (user, setFieldError, setWebError, setPswError) => {

    setFieldError(null)
    setWebError(null)
    setPswError(null)
    let storagedUser = null
    let validated = true

    console.log(user);

    const findUser = () => users.find(storagedUser =>{
        if(storagedUser.name === user.name) 
            return storagedUser

        return null
    })

    storagedUser = findUser();

    if (user.name === null || user.name.length <= 0 || !findUser()) {
        validated = false
        setFieldError("Ningún usuario con ese nombre")
    }

    if (!findUser() || user.web == null || user.web.length <= 0 ||  !(storagedUser.web === user.web)) {
        validated = false
        setWebError("Esa dirección web no existe")
    }

    if (!findUser() || !user.password || user.password.length <= 0 || !(storagedUser.psw === user.password)) {
        validated = false
        setPswError("La contraseña no coincide")
    }

    return validated
}