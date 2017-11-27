function Adder({n1,n2}){
const sum = n1 + n2 ;
// return React.createElement('h1',{}, sum)
return (<h1>{sum}</h1>)
}

ReactDOM.render(
React.createElement(Adder,{ n1:4, n2:5}),
  document.getElementById('app')
  //ここはhtmlのdivのidから
);

ReactDOM.render(
  <Adder n1 ={2} n2={4}/>,
document.getElementById('app'));



// React.createElement(Adder,{ n1:10, n2:5}),
//   document.getElementById('app')
//   //ここはhtmlのdivのidから
// );
