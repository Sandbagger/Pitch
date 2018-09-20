'use strict';

const e = React.createElement;


class Typewriter extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			txt: '',
			fullTxt: '',
			loopNum: 0,
			isDeleting: false,
		}
	}

	 componentDidMount() {
	 	this.tick();
  }

	componentDidUpdate(prevProps, prevState) {
		 let delta = 200 - Math.random() * 100;

         if (this.state.isDeleting) { delta /= 2; }
        if (!this.state.isDeleting && this.state.txt === this.state.fullTxt) {
        delta = this.props.period;
        } else if (this.state.isDeleting && this.state.txt === '') {
       delta = 500;
        }

		 setTimeout(() => this.tick(), delta); 
	}

	

	tick() {
		
		let i = this.state.loopNum % this.props.toRotate.length;
		
		let setFullTxt = this.props.toRotate[i];

		let copy = Object.assign({},this.state);

		   if (this.state.isDeleting) {
        copy.txt = setFullTxt.substring(0, copy.txt.length - 1);
        } else {
        copy.txt = setFullTxt.substring(0, copy.txt.length + 1);
        }

      
        if (!this.state.isDeleting && this.state.txt === setFullTxt) {
      
        copy.isDeleting = true;
        } else if (copy.isDeleting && this.state.txt === '') {
        copy.isDeleting = false;
        console.log('looping', copy.loopNum, copy.delta)
        copy.loopNum = copy.loopNum + 1;
   
        }

        copy.fullTxt = setFullTxt;

        console.log('copytxt', copy)

        this.setState(() => copy, console.log('delta', this.state.delta))
	}
		
 render() {
  return e('span',null, this.state.txt)
 
  }
  
  
}

const domContainer = document.querySelector('#typewriter');
const cursor = e('span', {className: 'wrap'});
ReactDOM.render(e(Typewriter, {toRotate:["JavaScript", 'CSS', 'HTML', 'Node, React'], period: 2000}, cursor), domContainer);