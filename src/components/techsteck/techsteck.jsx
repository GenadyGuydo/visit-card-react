import './techsteck.css'


const TechSteck = (props) => {

  let arrTech = []
  console.log(arrTech);
  arrTech.push('C','C++','C#','HTML','CSS','JavaScript','TypeScript','React','ReactNative','Vue','Angular','Node.js','Redux','Python','Jawa','Ruby','MongoDB','Swift','Rust',)

  return (<div className="tech-container">
  <div className="tech-title">Choise your technologies</div>
   <div className="tech-list">
   {arrTech.map((item, index) => (

        <div key={index}>{item}</div>
          ))}
  </div>
  </div> );
}

export default TechSteck ;
