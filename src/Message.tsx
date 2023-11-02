//two ways, class components and function based components

//pascal casing
function Message() {

    const name = 'Steven'; 
    if (name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello</h1>
}

export default Message;
