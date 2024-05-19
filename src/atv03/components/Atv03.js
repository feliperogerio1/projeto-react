// import { getImageUrl } from "./utils";
import Gallery from "./Gallery";
import List from "./List";
import PackingList from "./PackingList";
import Profile from "./Profile";
import TeaGathering from "./TeaGathering";
import TeaSet from "./TeaSet";
import TodoList from "./TodoList";
import { Link } from 'react-router-dom';

// import Gallery from "./Profile";
// import { Profile } from "./Gallery";

// export default function Atv03() {
//     return (
//         <Gallery />
//     );
// }

// function Avatar({ person, size = 100}) {
//     return (
//         <img
//             className="avatar"
//             src={getImageUrl(person)}
//             alt={person.name}
//             width={size}
//             height={size}
//         />
//     );
// }

// function Card({ children }){
//     return (
//         <div className="card">
//             {children}
//         </div>
//     );
// }

/*export default function Profile() {
    return (
        <Card>
            <Avatar 
                size={100}
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2'
                }}
            />
             {/* <Avatar
                size={80}
                person={{
                    name: 'Akililu Lemma',
                    imageId: 'OKS67lh'
                }}
            />
            <Avatar
                size={50}
                person={{
                    name: 'Lin Lanying',
                    imageId: '1bX5QH6'
                }}
            />  }
        </Card>
    )
}*/

// export default function Atv03() {
//     return (
//         <PackingList />
//     );
// }

export default function Atv03() {
    return (
        <>
            <Link to="/">Retornar a página inicial</Link>
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
                <h2>List component</h2>
                <List />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>PackingList component</h2>
                <PackingList />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>Profile component</h2>
                <Profile />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>TeaGathering component</h2>
                <TeaGathering />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>TeaSet component</h2>
                <TeaSet />
            </div>
            <div style={{
                border: "black 1px solid",
                padding: "10px",
                margin: "5px"
            }}>
                <h2>TodoList component</h2>
                <TodoList />
            </div>
        </>
        
    );
}