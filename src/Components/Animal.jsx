import randColor from '../FUNCTIONS/randColor';

const Animal = ({ name, photo }) => {
  return (
    <>
      <div style={{ margin: '20px' }}>
        <h2 style={{ background: randColor(), width: '70%', margin: 'auto' }}>
          {name}
        </h2>
        <img src={photo} alt={`${name}-animal`} style={{ width: '70%' }} />
      </div>
    </>
  );
};

export default Animal;
