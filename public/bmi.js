"use strict";
function bmi(massInKg, heightInM) {
    let bmi = massInKg / (heightInM *= heightInM);
    return bmi;
}
;
bmi(81.2, 1.78);
