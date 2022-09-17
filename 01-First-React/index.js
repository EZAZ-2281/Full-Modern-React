//what i want to show, and where 
ReactDOM.render(<h1>Hello,Everyone</h1>, document.getElementById("root"));
ReactDOM.render(<ul><li>item-1</li><li>item-2</li></ul>, document.getElementById("root"))

function myFunc(){
    return (
        <p>Dhaka, Bangaldesh</p>
    )
}
ReactDOM.render(
    <div>
        <myFunc /> 
    </div>,
    document.getElementById("root")
)
// we are rendering the myFunc this is called compossability