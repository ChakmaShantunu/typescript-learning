//as const assertion


// enum UserRoles {
//     admin = 'admin',
//     editor = 'editor',
//     viewer = 'viewer',
// };

const UserRoles = {
    admin : 'ADMIN',
    editor : 'EDITOR',
    viewer : 'VIEWER',
} as const;


const canEdit = (role: typeof UserRoles[keyof typeof UserRoles]) => {

    if (role === UserRoles.admin || role === UserRoles.editor) {
        return true
    }
    else return false;
};

const isEditPermissable = canEdit(UserRoles.admin);
console.log(isEditPermissable);