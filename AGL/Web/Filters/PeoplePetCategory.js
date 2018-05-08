angular.module('AGLApp')
    .filter('peoplePetCategory', function () {
        return function (peoplePetItems, gender) {
            var matches = [];
            var petToMatch = 'CAT';
            if (typeof peoplePetItems != 'undefined' && peoplePetItems && gender != 'undefined' && gender) {
                matches = peoplePetItems.filter(function (item) {
                    return (item.gender.toLowerCase() === gender.toLowerCase() && item.pets);
                }).reduce(function (t, a) {
                        a.pets.forEach(function (pet) {
                            t.push(pet);
                        });
                        return t;
                    },
                    []).filter(function (i) {
                    return (i.type.toUpperCase() === petToMatch);
                });
            }
            return matches;
        };

      
    });
