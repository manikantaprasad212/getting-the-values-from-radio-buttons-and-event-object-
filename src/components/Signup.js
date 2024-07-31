import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

function Signup() {


    let stateSelectRef=useRef();
    let resultParaRef = useRef();
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let maleRBRef = useRef();
    let femaleRBRef = useRef();
    let selectedGender;
    let selectedMartialstatus;

    let onCreateAccount = ()=>{

        if(stateSelectRef.current.value== "Select State"){
            alert("Please Select your state.")

        }else{ 

            let salutation ="";

            if(selectedGender == "male"){
                 salutation = 'Mr.';
            }
            if(selectedGender == "female"){
                if(selectedMartialstatus == "single"){
                salutation = "Miss.";
                }else{
                    salutation = "Mrs.";  
                }
            }
             resultParaRef.current.innerHTML = `${salutation} ${firstNameInputRef.current.value} ${lastNameInputRef.current.value} from ${stateSelectRef.current.value} Congrats your account has been created welcome to the page.`;

        }

       

    };
  return (
    <div className="App">
        <form>
            <h2>Signup</h2>
            <div>
                <label>First Name</label>
                <input ref={firstNameInputRef}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input ref={lastNameInputRef}></input>
            </div>
            <div>
                <label>Gender</label>
                <input type="radio" name="gender" ref={maleRBRef} onChange={()=>{
                    if(maleRBRef.current.checked == true){
                         selectedGender = "male";
                    }
                }}></input>
                <label style={{width:"auto"}}>Male</label>
                <input type="radio" name="gender" ref={femaleRBRef} onChange={()=>{
                    if (femaleRBRef.current.checked == true){
                        selectedGender = "female"
                    }
                }}></input>
                <label style={{width:"auto"}}>Female</label>
            </div>
            <div>
                <label>Martial Status</label>
                <input type="radio" name="ms" onChange={(evenObj)=>{
                    console.log(evenObj);
                    if(evenObj.target.checked == true)
                        {
                       selectedMartialstatus = "single";
                    }
                }}></input>
                <label style={{width:"auto"}}>Single</label>
                <input type="radio" name="ms"onChange={(evenObj)=>{
                    console.log(evenObj);
                    if(evenObj.target.checked == true)
                        {
                            selectedMartialstatus = "married";
                    }
                }}
                ></input>
                <label style={{width:"auto"}}>Married</label>
            </div>
            <div>
                <label>Age</label>
                <input></input>
            </div>
            <div>
                <label>E-mail</label>
                <input></input>
            </div>
            <div>
                <label>Password</label>
                <input></input>
            </div>
            <div>
                <label>Sate</label>
                <select ref={stateSelectRef}>
                <option>Select State</option>
                <option value="AP">Andhra Pradesh</option>
                <option value="AP">Arunachal Pradesh</option>
                <option value="GR">Gujarat</option>
                <option value="HR">Haryana</option>
                <option value="HP">Himachal Pradesh</option>
                <option value="JR">Jharkhand</option>
                <option value="KR">Karnataka</option>
                <option value="KL">Kerala</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="MH">Maharashtra</option>
                <option value="MI">Manipur</option>
                <option value="ML">Meghalaya</option>
                <option value="MZ ">Mizoram</option>
                <option value="NL">Nagaland</option>
                <option value="OD">Odisha</option>
                <option value="PB">Punjab</option>
                <option >Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Tripura</option>
                <option>Uttar Pradesh</option>
                <option value="UH">Uttarakhand</option>
                <option value="WB">West Bengal</option>
    
                </select>
            </div>
            <div>
                <label>Profile pic</label>
                <input></input>
            </div>
            <div>
                <label>Mobile.No</label>
                <input></input>
            </div>
            <div>
                <label>Address</label>
                <input></input>
            </div>
            <div>
               <button type="button" onClick={()=>{
    
               onCreateAccount ();

               }} >Create Account</button>
            </div>
            <p ref={resultParaRef}></p>
        </form>
        <br></br>
        <br></br>
        <Link to ="/">Login</Link>
    </div>
  )
}

export default Signup