import Toolbar from './Toolbar';
import Gallery from './Gallery';
import Counter from './Counter';
import Form from './Form';
import MovingDot from './MovingDot';
import Form2 from './Form2';
import Form3 from './Form3';
import List from './List';
import List2 from './List2';
import ShapeEditor from './ShapeEditor';
import CounterList from './CounterList';
import List3 from './List3';
import List4 from './List4';
import BucketList from './BucketList';
import { Link } from 'react-router-dom';


// export default function button() {
//     function handleClick() {
//         alert('You clicked me!');
//     }

//     return (
//         <button onClick={handleClick}>
//             Click me
//         </button>
//     );
// }

// function AlertButton({ message, children }) {
//     return (
//         <button onClick={() => alert(message)}>
//             {children}
//         </button>
//     );
// }

// export default function Toolbar() {
//     return (
//         <div>
//             <AlertButton message="Playing!">
//                 Play Movie
//             </AlertButton>
//             <AlertButton message="Uploading!">
//                 Upload Image
//             </AlertButton>
//         </div>
//     )
// }

// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// function PlayButton({ movieName }) {
//     function handlePlayClick() {
//         alert(`Playing ${movieName}!`);
//     }

//     return (
//         <Button onClick={handlePlayClick}>
//             Play "{movieName}"
//         </Button>
//     );
// }

// function UploadButton() {
//     return (
//         <Button onClick={() => alert('Uploading!')}>
//             Upload Image
//         </Button>
//     );
// }

// export default function Toobar() {
//     return (
//         <div>
//             <PlayButton movieName="Kiki's Delivery Service" />
//             <UploadButton />
//         </div>
//     );
// }

// function Button({ onSmash, children }) {
//     return (
//         <button onClick={onSmash}>
//             {children}
//         </button>
//     );
// }

// export default function Atv04() {
//     return (
//         <div>
//             <Button onSmash={() => alert('Playing!')}>
//                 Play Movie
//             </Button>
//             <Button onSmash={() => alert('Uploading')}>
//                 Upload Image
//             </Button>
//         </div>
//     );
// }

// export default function Atv04() {
//     return (
//         <Toolbar 
//             onPlayMovie={() => alert('Playing!')}
//             onUploadImage={() => alert('Uploading!')}
//         />
//     );
// }

// function Toolbar({ onPlayMovie, onUploadImage }) {
//     return (
//         <div>
//             <Button onClick={onPlayMovie}>
//                 Play Movie
//             </Button>
//             <Button onClick={onUploadImage}>
//                 Upload Image
//             </Button>
//         </div>
//     );
// }

// function Button({ onClick, children }) {
//     return (
//         <button onClick={onClick}>
//             {children}
//         </button>
//     );
// }

// export default function Toolbar() {
//     return (
//         <div className="Toolbar" onClick={() => {
//             alert('You clicked on the toolbar!');
//         }}>
//             <button onClick={() => alert('Playing!')}>
//                 Play Movie
//             </button>
//             <button onClick={() => alert('Uploading!')}>
//                 Upload Image
//             </button>
//         </div>
//     );
// }

// export default function Signup() {
//     return (
//         <form onSubmit={e => {
//             e.preventDefault();
//             alert('Submitting!');
//         }}>
//             <input />
//             <button>Send</button>
//         </form>
//     );
// }

export default function Atv04() {
    return (
        <>
            <Link to="/">Retornar a página inicial</Link>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>ShapeEditor component</h2>
                <ShapeEditor />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Toolbar component</h2>
                <Toolbar />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Gallery component</h2>
                <Gallery />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Counter component</h2>
                <Counter />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Form component</h2>
                <Form />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>MovingDot component</h2>
                <MovingDot />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Form2 component</h2>
                <Form2 />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Form3 component</h2>
                <Form3 />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>List component</h2>
                <List />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>List2 component</h2>
                <List2 />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>CounterList component</h2>
                <CounterList />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>List3 component</h2>
                <List3 />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>List4 component</h2>
                <List4 />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>BucketList component</h2>
                <BucketList />
            </div>
        </>
    );
}
