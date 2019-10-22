

export class Price {

    subPrices: Price[] = [];
    public value: number;
    public operation: Operation;

    public static parse(s: string): Price {
        let op: Operation;
        switch (s[0]) {
            case '+':
                op = '+';
                break;
            case '-':
                op = '-';
                break;
            case '*':
                op = '*';
                break;
            case '/':
                op = '/';
                break;
            default:
        }
        const p = new Price();
        p.operation = op;
        p.value = Number(s.substring(1));
        return p;
    }

    public computeOp(cumul = 0): number {
        switch (this.operation) {
            case '+':
                return cumul + this.value;
            case '*':
                return cumul * this.value;
            case '-':
                return cumul - this.value;
            case '/':
                return cumul / this.value;
            default:
                return cumul + this.value;
        }
    }

    public compute(cumul = 0): number {
        if (this.subPrices) {
            let res = cumul;
            // additions first
            this.subPrices.forEach(p => {
                if (p.operation) {
                    if (p.operation !== '*' && p.operation !== '/') {
                        res = p.computeOp(res);
                    }
                } else {
                    res = p.compute(res);
                }
            });
            // multiplications
            this.subPrices.forEach(p => {
                if (p.operation) {
                    if (p.operation === '*' || p.operation === '/') {
                        res = p.computeOp(res);
                    }
                }
            });
            return Math.max(0, res);
        } else {
            return this.computeOp(cumul);
        }
    }

    public addPrices(prices: Price[]) {
        prices.forEach(p => this.subPrices.push(p));
    }

    public addPrice(p: Price) {
        this.subPrices.push(p);
    }

}

export type Operation = '+' | '*' | '-' | '/';
