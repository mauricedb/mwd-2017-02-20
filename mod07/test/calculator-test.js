describe('The calculator', function(){
    var calculator;
    beforeEach(() => {
        calculator = new Calculator();
    })

    describe('can add', () => {

        it('1 + 1 == 2', () =>{
            
        // spyOn(calculator, 'add').andReturn(5)

            var sum = calculator.add(1,1); 
            // if (sum !== 2) {
            //     throw new Error('Not 2')
            // }

            expect(sum).toBe(2);
        }
        )

        it('1 + 1 as strings == 2', () =>{
            // var calculator = new Calculator();
            var sum = calculator.add('1','1'); 
            expect(sum).toBe(2);
        }
        )

        it('0.1 + 0.2 == 0.3', () =>{
            // var calculator = new Calculator();
            var sum = calculator.add(0.1, 0.2); 
            expect(sum).toBeCloseTo(0.3, 15);
        }
        )
    })

})