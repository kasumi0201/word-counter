import React from 'React';
 // export default (()=> (<div>{this.timeNow.toString()}</div>))

export default class Timer extends React.Component{
constructor(props){
super(props);
}
render(){
  return(
    <div>{this.props.timeNow.toString()}</div>
  )
}}
