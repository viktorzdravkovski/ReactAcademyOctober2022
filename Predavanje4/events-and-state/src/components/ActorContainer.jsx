import Actor from './Actor';
import './ActorContainer.css';

const ActorContainer = (props) => {
  // const configuration = {
  //     theme: {
  //         background: 'white',
  //     },
  //     state: {
  //         userLoggedIn: false,
  //     }
  // };

  const { actorList } = props;

  return (
    <div className='actor-container'>
      {actorList.map((actor) => {
        return (
          <Actor
            name={actor.name}
            age={actor.age}
            isMarried={actor.isMarried}
          />
        );
      })}
    </div>
  );
};

export default ActorContainer;
