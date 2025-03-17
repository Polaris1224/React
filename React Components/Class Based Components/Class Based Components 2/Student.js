import React from 'react';

//Props in class based components.
// class Student extends React.Component {
//     render() {
//         console.log(this.props) ;
//         return (
//             <>
//                 {/*Props in React... We can also destructure props before return*/}
//                 <h1>Hello, {this.props.name}</h1>
//             </>
//         )
//     }
// }

//Props in functional components. We just pass as an argument to the function.
function Student(props) {
    console.log(props) ;
    return (
        <>
            {/*Props in React... We can also destructure props before return*/}
            <h1>Hello, {props.name}</h1>
        </>
    )
}

export default Student;