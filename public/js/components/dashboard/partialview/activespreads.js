const React = require('react');

//import Spread from './spreads/spread';

export default class ActiveSpreads extends React.Component {
   constructor(props) {
      super(props);
      this.CTXspread = null;
      this.dbSource = this.props.dataSource;
      this.state = {
         trackedBids: [],
         onView: false
      };

   }
   componentDidMount() {
      this.CTXspread = this.props.callCT()
      this.CTXspread.seedSpread();
      this.props.setSpreadRef(this.CTXspread);
   }
   componentWillMount() {


   }
   componentWillUnmount() {

   }
   render() {

      return (<div className="active-spreads">
    			<ul className="spread-labels">
    			<li className="index-li">Index</li>
    			<li>Ask</li>
    			<li>Bid</li>
    			<li>%</li>
    			</ul>
               <canvas id="activeSpreads" width="200" height="650"></canvas>
              </div>)
   }
};