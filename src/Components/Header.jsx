import reactImg from '../assets/react-core-concepts.png';
const randomDescrption = ['Fundamental', 'Core', 'Cruicial'];

function getRandomDescrption(max){
  return Math.floor(Math.random() * (max +1));
}

export default function Header(){
    const dynamicContent = randomDescrption[getRandomDescrption(2)];
    return (
      <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>Pradeep Essentials</h1>
          <p>
            {dynamicContent} React concepts you will need for almost any app you are
            going to build!
          </p>
      </header>
    )
  }