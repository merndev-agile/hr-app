

export const ValidationEmail = (email) => {
    const regex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i

    if (regex.test(email)) {
        return true;
    }

    return false;


}
export const ValidationPassword = (password) => {
    const validPassword = /^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$/i;
    if (validPassword.test(password)) {
        return (true)
    }
    return false;


}


