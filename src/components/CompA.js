import CompB from "./CompB";

function CompA(props){
  return (
    <div>
      <h2>Hey from CompA</h2>
      <CompB message={props.message} setMessage={props.setMessage}/>
    </div>
  );
}

export default CompA;