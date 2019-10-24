

export class Price {

    subPrices: Price[] = [];
    public source: string;
    public value: number;
    public operation: Operation;

    public static parse(s: string, source: string): Price {
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
        p.source = source;
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

    public detail(tab = 0): string {
        let res = '';
        // additions first
        this.subPrices.forEach(p => {
            if (p.operation) {
                if (p.operation !== '*' && p.operation !== '/') {
                    res += `${this.spaces(tab)}[${p.source}] ${p.operation}${p.value}<br>`;
                }
            } else {
                res += p.detail(tab + 1);
            }
        });
        // multiplications
        this.subPrices.forEach(p => {
            if (p.operation) {
                if (p.operation === '*') {
                    res += `${this.spaces(tab)}[${p.source}] x${p.value}<br>`;
                }
                if (p.operation === '/') {
                    res += `${this.spaces(tab)}[${p.source}] x${(1 / p.value).toFixed(2)}<br>`;
                }
            }
        });
        return res;
    }

    private spaces(tabs: number) {
        let res = '';
        for (let i = 0; i < tabs; i++) {
            res += '  ';
        }
        return res;
    }

}

export type Operation = '+' | '*' | '-' | '/';
