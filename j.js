class PhepTinh {
    constructor(soA, soB, tenPhepTinh) {
        this.soA = soA;
        this.soB = soB;
        this.tenPhepTinh = tenPhepTinh;
    }

    getResultString() {
        const kq = this.getResult();
        switch (this.tenPhepTinh) {
            case 'CONG': return `${this.soA} + ${this.soB} = ${kq}`;
            case 'TRU': return `${this.soA} - ${this.soB} = ${kq}`;
            case 'NHAN': return `${this.soA} * ${this.soB} = ${kq}`;
            default: return `${this.soA} / ${this.soB} = ${kq}`;
        }
    }

    getResult() {
        switch (this.tenPhepTinh) {
            case 'CONG': return this.soA + this.soB;
            case 'TRU': return this.soA - this.soB;
            case 'NHAN': return this.soA * this.soB;
            default: return this.soA / this.soB;
        }
    }
}

// tenPhepTinh la CONG TRU NHAN CHIA
//5 6 CONG -> '5 + 6 = 11'

const pt = new PhepTinh(5, 6, 'NHAN');
console.log(pt.getResultString()) // -> '5 + 6 = 11'
