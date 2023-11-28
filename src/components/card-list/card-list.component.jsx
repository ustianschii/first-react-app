import "./card-list.styles.css";
import CardContainer from "./card-container/card-container.component";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <CardContainer monster={monster} />;
      })}
    </div>
  );
};

export default CardList;

// interface Monster {
//   name: string;
//   email: string;
//   id: string;
// }

// interface CardListProps {
//   monsters: Monster[]
// }

// const CardList = ({monsters}: CardListProps) => {
//   return (
//     <div className="card-list">
//       {monsters.map(({name, email,id}) => (
//         <div className="card-container" key={id}>
//           <img
//             alt={`monster ${name}`}
//             src={`https://robohash.org/${id}?set=set2&size=180x180`}
//           />
//           <h2>{name}</h2>
//           <p>{email}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardList;
