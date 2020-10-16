// build a simple JS user out of the weird formdata object
function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        character: formData.get('character'),
        hp: 50,
        scoobySnacks: 0,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    character: formData.get('character'),
    hp: 50,
    scoobySnacks: 0,
    completed: {}
});

export default makeUser;