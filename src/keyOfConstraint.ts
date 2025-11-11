//key of: type operator

type RichPeoplesVehicle = {
    car: string;
    bike: string;
    cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";

type MyVehicle2 = keyof RichPeoplesVehicle;

const myVehicle: MyVehicle2 = "ship";


