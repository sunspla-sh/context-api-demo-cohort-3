import CompC from "./CompC";

function CompB(props){
  return (
    <div>
      <h3>Hey from CompB</h3>
      <CompC message={props.message} setMessage={props.setMessage} />
    </div>
  );
}

export default CompB;