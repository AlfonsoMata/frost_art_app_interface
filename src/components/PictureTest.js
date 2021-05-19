import React,{useState} from 'react';
import firebase from './FireBase';



const UploadPictureTest= ()=>{

    const [uploadValue,SetUploadValue] = useState(0);
    const [errorMesage,SetUpErrorMesage] = useState("");
    const [picture,SetUpPicture] = useState("");

    
    
    const handleOnChange =(e)=>
    {
        const file = e.target.files[0]
        const storageRef = firebase.storage().ref(`pictures/${file.name}`)
        const task = storageRef.put(file)

        task.on('state_changed',(snapshot)=>{
            let percentage=(snapshot.bytesTransferred/snapshot.totalBytes)*100
            SetUploadValue(percentage)
        },(error)=>{
            SetUpErrorMesage(`Ah ocurrido un error${error.message}`);
            //message: `Ha ocurrido un error: `
        },async ()=>{
                SetUpErrorMesage("archivoSubido");
                SetUpPicture(await task.snapshot.ref.getDownloadURL())
        })
    }

   
    return (
        <div>
            <img src="https://i.pinimg.com/564x/18/ec/9b/18ec9b92dd0e45ad0fc02a24a937cd2f.jpg"/>
            <progress value = {uploadValue} max='100'></progress>
            <input type='file' onChange={handleOnChange.bind(this)}/>
            <img width='500' src={picture} />
            {errorMesage}
    
        </div>
    )
      

   
}

export default UploadPictureTest;