
import React,{useState} from 'react'
import {Link} from 'react-router-dom'
const Register = () => {
    const [input,setInput]=useState({});
    const[allData,setAllData]=useState([])
    const [selected,setselected]=useState({
        selec:''
    });
    const [selectedImages,setSelectdtedImages]=useState([])
    const changleHnadler=(e)=>{
      const name=e.target.name;
      const value=e.target.value;
      setInput(values =>({
          ...values, [name]:value
      }))
  }
  const imageChange=(e)=>{
  //console.log(e.target.files)
  if(e.target.files){
    const filesarray=Array.from(e.target.files).map((file)=>URL.createObjectURL(file))
    setSelectdtedImages((prevImage)=>prevImage.concat(filesarray))
    Array.from(e.target.files).map(
      (file)=>URL.revokeObjectURL(file)
    )
  }
  
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
  
    const employee={
        ...input,
        ...selected
    }
   
    setAllData((emp)=>{
        return [...emp,employee]
    })
    console.log(allData)
  
  setInput({    
     name:'',
     email:'',
     phone:'',
     des:''
  })
  
  }
  const onSelect=(e)=>{
  
  const value=e.target.value;
  
  setselected({
  selec:value
  })
  
  
  
  }
    return (
        <div className='container'>
       <div className="App">
             <form>
             <div className="mb-3">
      <label for="na,e" className="form-label">Name</label>
      <input type="email" name="name" value={input.name} onChange={changleHnadler} className="form-control" id="name" aria-describedby="emailHelp"/>
      
    </div>
    <div className="mb-3">
      <label for="exampleInputEmail1" className="form-label">Email address</label>
      <input type="email" name="email" value={input.email} onChange={changleHnadler} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      
    </div>
    <div className="mb-3">
      <label for="exampleInputphone" className="form-label">Phone</label>
      <input type="number" name="phone" value={input.phone} onChange={changleHnadler} className="form-control" id="exampleInputphone"/>
    </div>
   <div className="mb-3">
   <select className="form-select" onChange={onSelect} aria-label="Default select example">
    <option   defaultValue >Country</option>
    <option value="India">India</option>
    <option value="Nepal">Nepal</option>
    <option value="Bangladesh">Bangladesh</option>
  </select>
   </div>
   <div className="mb-3">
      <label for="exampleInputphone" className="form-label">Description</label>
      <textarea name="des" value={input.des} onChange={changleHnadler} className="form-control" />
    </div>
    <div className='mb-3'>
   <input  type="file" multiple id='file' onChange={imageChange} />
    </div>
  
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Register</button>
  </form> 
  {/* <h3>Allready have an account ? <span><Link classNameName="btn btn-primary" to="/login">Sign in</Link></span></h3> */}
          </div>

<div className="table">
<table className="table table-success table-striped">
<thead>
    <tr>
      
      <th scope="col">name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Country</th>
    </tr>
  </thead>
  <tbody>
 
   {allData.map((elem)=>{
       return (   <tr key={elem.name}>
     
       <td>{elem.name}</td>
       <td>{elem.email}</td>
       <td>{elem.phone}</td>
       <td>{elem.selec}</td>
     </tr>
       )
   })}
  </tbody>
</table>
</div>
          </div>
          );
};

export default Register;
