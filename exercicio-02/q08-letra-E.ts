// strictNullChecks ativado
let x: number;
let y: number | null;
let z: number | undefined;
// x; // Variable 'x' is used before being assigned.ts(2454)
// y; //Variable 'y' is used before being assigned.ts(2454)
z; // Ok
x = 1;
y = null;
x; // Ok
y; // Ok