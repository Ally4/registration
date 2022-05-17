import './App.css';

function App() {
  return (
    <div className="App">

      <div className='navigation'>
        <div className='logo'>OpenMRS</div>
        <div className='partA'>
          <div>&#x1F50E;</div>
          <div>&#x1F50E;</div>
          <div>&#x1F50E;</div>
          <div>&#x1F50E;</div>
          <div>&#x1F50E;</div>
        </div>
      </div>
      <div className='all'>
      <div>
      <h2>Creating New Patient</h2>
      <label className='fading'>Jump to</label>
      <div >&#8627; <a href="#Identifiers">Identifiers</a></div>
      <div>&#8627; <a href="#Personal">Personal Details</a></div>
      <div>&#8627; <a href="#Domicile">Domicile Details</a></div>
      <div>&#8627; <a href="#Residence">Residence Details</a></div>
      <div>&#8627; <a href="#Other">Other Details</a></div>                         
      </div>
      <div>


      <div>
        <h4>Search</h4>
        <div className='background'>
        <select name="selection" id="type">
        <option value="Unknown">Unknown</option>
        <option value="Patient">Patient</option>
        <option value="Doctor">Doctor</option>
        </select>
        </div>
      </div>


      <div>
      <h4 id='Identifiers'>Identifiers</h4>
      <label className='fading'>All fields are required unless the marked options</label><br></br>
      <div className='background'><br></br>
        <label>UPID</label><br></br>
        <input></input><br></br>
        <label>Primary case Id</label><br></br>
        <input></input><br></br>
        <label>NID</label><br></br>
        <input></input><br></br>
        <label>NIN</label><br></br>
        <input></input><br></br>
        <label>NID Application number</label><br></br>
        <input></input><br></br>
        <label>Passport</label><br></br>
        <input></input><br></br>
        
        </div>
      </div>


      <div>
      <h4 id='Person'>Person Details</h4>
      <label className='fading'>All fields are required unless the marked options</label><br></br>
      <div className='background'><br></br>
      <label>Surname</label><br></br><br></br>
        <input></input><br></br><br></br>
        <label>Post-names</label><br></br><br></br>
        <input></input><br></br>
        <div className='dateAndGender'>
        </div>
        <label className='fading'>Vital Status</label><br></br>
        <select name="selection" id="type"><br></br>
        <option value="Select">Select</option>
        </select>
        <label className='fading'>Marital Status</label><br></br>
        <select name="selection" id="type"><br></br>
        <option value="Select">Select</option>
        </select>
        <label className='fading'>Nationality</label><br></br>
        <select name="selection" id="type"><br></br>
        <option value="Select">Rwandan</option>
        </select>   
        <label>father name</label><br></br>
        <input></input><br></br>
        <label>mother name</label><br></br>
        <input></input><br></br>
        <label>spouse name</label><br></br>
        <input></input><br></br>
        </div>
      </div>

      <div>
      <h4 id='Domicile'>Domicile details</h4>
      <label className='fading'>All fields are required unless the marked options</label><br></br>
      <div className='background'><br></br>
      <label>Country</label><br></br>
        <input></input><br></br>
        <label>Province</label><br></br>
        <input></input><br></br>
        <label>District</label><br></br>
        <input></input><br></br>
        <label>Sector</label><br></br>
        <input></input><br></br>
        <label>Cell</label><br></br>
        <input></input><br></br>
        <label>Village</label><br></br>
        <input></input><br></br>
        </div>
      </div>

      <div>
      <h4 id='Residence'>Residence details</h4>
      <label className='fading'>All fields are required unless the marked options</label><br></br>
      <div className='background'><br></br>
      <label>Country</label><br></br>
      <select name="selection" id="ty<br></br>pe">
        <option value="Select">Rwanda</option>
        </select> 
        <label>Province</label><br></br>
        <select name="selection" id="typ<br></br>e">
        <option value="Select">Select</option>
        </select> 
        <label>District</label><br></br>
        <select name="selection" id="typ<br></br>e">
        <option value="Select">Select</option>
        </select> 
        <label>Sector</label><br></br>
        <select name="selection" id="t<br></br>ype">
        <option value="Select">Select</option>
        </select> 
        <label>Cell</label><br></br>
        <select name="selection" id="type">
        <option value="Select">Select</option>
        </select> 
        <label>Village</label><br></br>
        <select name="selection" id="ty<br></br>pe">
        <option value="Select">Select</option>
        </select> 
        <label>Address</label><br></br>
        <input></input><br></br>
        </div>
      </div>

      <div>
      <h4 id='Other'>Other details</h4>
      <label className='fading'>All fields are required unless the marked options</label><br></br>
      <div className='background'><br></br>
      <label>Phone</label><br></br>
        <input></input><br></br>
        <label>Education Level</label><br></br>
        <select name="selection" id="type"><br></br>
        <option value="Select">Select</option>
        </select> 
        <label>Religion</label><br></br>
        <input></input><br></br>
        <label>Profession</label><br></br>
        <select name="selection" id="type">
        <option value="Select">Select</option>
        </select> 
        </div>
      </div>
      <div>
        <div>Create patient</div>
        <div>Clear</div>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
