type Num = number;

function bmi(massInKg: Num, heightInM: Num ){
let bmi = massInKg /  (heightInM *= heightInM);
    return bmi;
};

bmi(81.2, 1.78);