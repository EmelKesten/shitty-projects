import '../App.css'
import Strela from '../assets/strela.png'
import Preuzimanje from '../assets/preuzimanje.png'
const Comp3 = () => {
  return (
    <div className='register text-center pt-5 mt-2'>
       <p className="arrow mt-5">
        <img src={Strela} alt="" /> Online Registrations
        <img src={Preuzimanje} alt="" />
      </p>
      <h1 className="text mb-5">
      Admission Going On ! Hurry Up<br />
        To Admit Your Seat
      </h1>
      <div className='form'>
        <div>
            <input placeHolder="Full Name......" className='input1'/>
        </div>
        <div>
            <input placeHolder="Progam.........." className='input1'/>
        </div>
        <div>
            <input placeHolder="Time/Shift........" className='input1'/>
        </div>
        <div>
        <button type="button" id='enroll' className="btn btn-primary btn-lg " href="#">
            ENROLL COURSES ➔
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comp3
