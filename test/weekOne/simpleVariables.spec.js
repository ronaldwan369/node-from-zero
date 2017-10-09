import { expect } from 'chai';
import {
    taskOne,
    taskTwo,
    taskThree,
    taskFour,
    taskFive,
    taskSix,
} from '../../src/weekOne/simpleVariables';

describe('Week One Tasks', () => {
    it('[taskOne] should return a string that combines the to parameters with a space', () => {
        const firstWord = Math.random().toString(36).substring(7);
        const secondWord = Math.random().toString(36).substring(7);

        const expectedOutput = `${firstWord} ${secondWord}`;
        expect(taskOne(firstWord, secondWord)).to.equal(expectedOutput);
    });

    it('[taskTwo] should insert a parameter into the phrase "Look at the ___ boat."', () => {
        const insertedWord = Math.random().toString(36).substring(7);

        const expectPhrase = `Look at the ${insertedWord} boat.`;
        expect(taskTwo(insertedWord)).to.equal(expectPhrase);
    });

    it('[taskThree] should return "true" when given parameter "foo", or "false" if not', () => {
        expect(taskThree('foo')).to.be.true;
        expect(taskThree('bar')).to.be.false
    });

    it('[taskFour] should return "true" when given parameter starts with "foo" and ends with a "d", or "false" if not', () => {
        expect(taskFour('food')).to.be.true;
        expect(taskFour('bar')).to.be.false;        
        expect(taskFour('fooooooooooood')).to.be.true;
        expect(taskFour('fooo')).to.be.false;
    });

    describe('BONUS', () => {
        it('[taskFive] return a stored value, setting that value ONLY if given an input', () => {
            expect(taskFive(50)).to.equal(50);
            expect(taskFive(2000)).to.equal(2000);
        });

        it('[taskFive] should give stored value a value of 100 by default', () => {
            expect(taskFive()).to.equal(100);
        });

        it('[taskFive] should give a value of 10 if given a value of 0 or below', () => {
            expect(taskFive(0)).to.equal(10);
            expect(taskFive(-1)).to.equal(10);
        });

        it('[taskFive] should subtract from / return the value of [taskFive], setting the perment value of [taskFive] to this new value', () => {
            const storedValue = taskFive(500);
            taskSix(100);
            taskSix(50);

            expect(taskFive()).to.equal(350);
        });
    });
});
