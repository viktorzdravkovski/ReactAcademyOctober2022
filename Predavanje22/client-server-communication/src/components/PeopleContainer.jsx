import "./PeopleContainer.css";
import PersonCard from './PersonCard';

const PeopleContainer = (props) => {
  return <div className="people-container">
    {props.items.map((item) => {
      return <PersonCard item={item} key={item.id} deletePersonHandler={props.deletePersonHandler}/>
    })}
  </div>
};

export default PeopleContainer;