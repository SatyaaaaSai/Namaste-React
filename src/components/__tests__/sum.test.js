import { sum } from "../sum"


test("calaculating the sum of the Two numbers",()=>{
        const result=sum(5,2);

        expect(result).toBe(7);
})