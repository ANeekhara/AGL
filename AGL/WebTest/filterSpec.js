describe('Filters', function () {
    beforeEach(function () {
        module('AGLApp');
    });

    describe("People Pet Category Filter", function () {
        var petCategory;
        var emptyArray = [];
        beforeEach(inject(function ($filter) {
            petCategory = $filter('peoplePetCategory', {});
        }));

        //spec 1
        it("Should return Empty array when passed Null",
            function () {
                expect(petCategory(null)).toEqual(emptyArray);
            });

        //spec 2
        it("Should return Empty array when undefined", function () {
            expect(petCategory('undefined')).toEqual(emptyArray);
        });

        //spec 3
        it("Should return Empty array when option is missing", function () {
            var peopleWithNoPets =
            [
                { "name": "Bob", "gender": "Male", "age": 23 },
                { "name": "Jennifer", "gender": "Female", "age": 18, "pets": [] }
            ];
            expect(petCategory(peopleWithNoPets)).toEqual(emptyArray);
        });

        //spec 4
        it("Should return Empty array when male has no pets", function () {
            var peopleWithNoPets =
            [
                { "name": "Bob", "gender": "Male", "age": 23 },
                { "name": "Jennifer", "gender": "Male", "age": 18, "pets": [] }
            ];
            expect(petCategory(peopleWithNoPets, "male")).toEqual(emptyArray);
        });

        //spec 5

        it("Should return Empty array when male/female has no cats", function () {
            var peopleWithNoCat =
            [
                { "name": "Fred", "gender": "Male", "age": 40, "pets": [{ "name": "Sam", "type": "Dog" }] },
                { "name": "Samantha", "gender": "Female", "age": 40, "pets": [{ "name": "Tabby", "type": "Dog" }] }
            ];
            expect(petCategory(peopleWithNoCat, "Female")).toEqual(emptyArray);
        });

        //spec 6
        it("Should return sorted array when Cat is is upperCase", function () {
            var catWithnotparticularCase =
            [
                { "name": "Fred", "gender": "Female", "age": 40, "pets": [{ "name": "Sam", "type": "CAT" }] },
                { "name": "Samantha", "gender": "Male", "age": 40, "pets": [{ "name": "Tabby", "type": "Dog" }] },
                { "name": "AK", "gender": "Female", "age": 40, "pets": [{ "name": "Abby", "type": "cat" }] }
            ];
            var sortedList = [
                { "name": "Sam", "type": "CAT" },
                { "name": "Abby", "type": "cat" }
            ];
            expect(petCategory(catWithnotparticularCase, "Female")).toBe(sortedList);
        });

    });
});
