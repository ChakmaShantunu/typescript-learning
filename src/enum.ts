// enum -- 

// set of fixed string leteral ek jaigai rakhe

// type UserRoles = 'admin' | 'editor' | 'viewer';

enum UserRoles {
    admin = 'admin',
    editor = 'editor',
    viewer = 'viewer',
};


const canEdit = (role: UserRoles) => {

    if (role === UserRoles.admin || role === UserRoles.editor) {
        return true
    }
    else return false;
};

const isEditPermissable = canEdit(UserRoles.admin);
console.log(isEditPermissable);