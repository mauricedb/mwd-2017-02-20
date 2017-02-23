
var person = {
    id: 1,
    firstName : '',
    lastName : ''
}

// person.firstName = 'Maurice'

person = Object.assign({}, person, {firstName : 'Maurice'})


people = [
    person
]

people = people.map(p => {
    if (p.id === id){
        return  Object.assign({}, p, {firstName : 'Maurice'})
    }

    return p;
})

people = people.filter(p => p.id !== id)

people = Object.freeze(people)