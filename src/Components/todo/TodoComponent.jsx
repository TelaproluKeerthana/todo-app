import { useParams } from "react-router-dom"
import {retrieveTodoApi} from './api/TodoApiService';
import { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
const TodoComponent =()=>{
const[description,setDescription]=useState('')
const[targetDate,setTargetDate]=useState('')
const {id}=useParams()
useEffect(()=>getTodos(),[id])
const getTodos=()=>{
    retrieveTodoApi('in28minutes',id)
    .then((response)=>{
      console.log(response)
      setDescription(response.data.description)
      setTargetDate(response.data.targetDate)

    })
    .catch((error)=>console.log(error))   
}
const onSubmit=(values)=>{
    console.log(values)
}
const validate=(values)=>{
    let errors={
    }

    if(values.description.length<5){
        errors.description='enter atleast 5 characters'
    }
    if(values.targetDate.length==null){
        errors.targetDate='enter a TD'
    }
    return errors
}


return (
<div className="container">
<h1>Update your todo details </h1>
<div>
    <Formik initialValues={{description,targetDate}} enableReinitialize={true} onSubmit={onSubmit} validate={validate} validateOnBlur={false} validateOnChange={false}>
        {
            (props)=>(
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component='div' className="alert alert-warning"/>
                    <fieldset className="form-group">
                        <label>Description</label>
                        <Field type="text" className='form-control' name="description"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Target Date</label>
                        <Field type="date" className='form-control' name="targetDate" />
                    </fieldset>
                    <div>
                        <button type="submit" className="btn btn-success mt-3 "> Submit</button>
                    </div>
                </Form>
            )
        }
    </Formik>
</div>
</div>
)
}
export default TodoComponent;