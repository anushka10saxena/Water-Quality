
import './ph.scss';
import graph from './graph.png';
import Accordion from './Accordion/accordion'; 
function Ph(){
    return(
<div id="temp" className="container-fluid">
<div className="row">

<div className="col-sm-6 col-md-6 col-12">
    <Accordion/>
</div>

<div className="col-sm-6 col-md-6 col-12">

<img src={graph} loading="lazy" />
</div>


</div>

</div>
    );
}


export default Ph;