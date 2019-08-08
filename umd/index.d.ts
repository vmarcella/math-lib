declare interface NumberConstructor {
    GOLDENRATIO: number;
}
declare interface Number {
    round(): number;
    floor(): number;
    ceil(): number;
    pad(leftPadding: number, rightPadding: number): string;
    degToRad(): number;
    radToDeg(): number;
    toDollars(): string;
    tax(rate: number): number;
    withTax(rate: number): number;
    interest(rate: number, years: number, decimalPlaces?: number): string;
    mortage(interestRate: number, years: number): number;
    decimalToHex(): string;
}
