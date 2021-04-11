const obj = [{
    id: 8,
    count: 100,
    user: {
        email: "tamar@email.com",
        fullName: "Tamara Bbbb"
    }
},
{
    id: 10,
    count: 20,
    user: {
        email: "jojo@email.com",
        fullName: "jojo Bbbb"
    }
}
];

obj.map(el =>{
    el.email = el.user.email;
    el.fullName = el.user.fullName;
    delete el.user;
    console.log(el)
})