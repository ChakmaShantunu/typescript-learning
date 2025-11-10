
interface Developer<T, X = null> {
    name: string;
    salary: number;
    device: {
        model: string;
        brand: string;
        releaseYear: string;
    };

    smartWatch: T;
    bike?: X
};

interface BrandCharaWatch {
    heartRate: string;
    stopwatch: boolean;
};

interface AppleWatch {
    heartRate: string;
    stopwatch: boolean;
    callSupport: boolean;
    calculator: boolean;
    AiFeature: boolean;
}

const poorDeveloper: Developer<BrandCharaWatch, { brand: 'yamaha', engineCapacity: '200cc' }> = {
    name: 'mr. poor',
    salary: 20,
    device: {
        model: 'A21',
        brand: 'lenovo',
        releaseYear: '2013'
    },
    smartWatch: {
        heartRate: '200',
        stopwatch: true
    }
};


const richDeveloper: Developer<AppleWatch> = {
    name: 'mr. rich',
    salary: 200,
    device: {
        model: 'X345',
        brand: 'hp',
        releaseYear: '2025'
    },
    smartWatch: {
        heartRate: '200',
        stopwatch: true,
        callSupport: true,
        calculator: true,
        AiFeature: true,
    },
    bike: null
};
