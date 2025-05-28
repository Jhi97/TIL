//타입 별칭
type User = {
    id : number;
    name : string;
    location : string;
}

let user: User = {
    id: 1,
    name: "TypeScript",
    location: "서울시",

};

//인덱스 시그니처
type CountryCodes = {
    [key: string]: string;
}

let countryCodes: CountryCodes = {
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk"

}

