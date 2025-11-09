

type UserRole = 'admin' | 'user'

const getDashboard = (role: UserRole) => {
    if (role === 'admin') {
        return 'admin Dashboard'
    }
    else if (role === 'user') {
        return 'user Dashboard'
    } else {
        return 'guest dashboard'
    }
};

getDashboard('guest');

//intersection &

type Employee = {
    id: string,
    name: string,
    phoneNo: string
};

type Manager = {
    id: string,
    designation: string,
    teamSize: number,

}

type EmployeeManager = Employee & Manager

const chowdhuryShaheb: EmployeeManager = {
    id: '123',
    name: "Chowdhuri Shaheb",
    phoneNo: '01518313916',
    designation: 'manager',
    teamSize: 12
};

console.log(chowdhuryShaheb);