 import Card from "./card";
 import '../App.css'

 const CardList = (props) =>
        <div className='list-container'>
            {props.monsterList
              .map((monster) => <Card monster={monster} key={monster.id}  /> )}
        </div>;


 export default CardList;