const axios = require("axios")

const fetchData = async (id) => {
    const results = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    return results.data;
}

const forEach = (items, callback) => {
    for(let i = 0; i < items.length; i++){
        callback(items[i])
    }
}


it("mock callback", ()=>{
    const mockCalledback = jest.fn(x => 42 + x)

    forEach([0,1], mockCalledback);


    expect(mockCalledback.mock.calls.length).toBe(2);
})



it("mock axios",  async () => {

    jest.spyOn(axios, "get").mockReturnValueOnce({
        data : {
            id: 1,
            todo: "Get 1M Dollars"
        }
    })
    const results = await fetchData(1)

    expect(results.todo).toBe( "Get 1M Dollars")


})