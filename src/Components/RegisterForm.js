import React from 'react';
import {useFormik} from 'formik';

export function RegisterForm(){
    const validate=values=>{
        const errors={}
        if (!values.name){
            errors.name="Required"
        }
        if (!values.email){
            errors.email='Required'
        }else if(values.email.length<15){
            errors.email="email must be 15 characters or more"
        }

        if (!values.number){
            errors.number="Required"
        }else if(values.number.length <10){
            errors.number="Number must be 10 digit"
        }

        if (!values.password){
            errors.password="Required"
        }else if (values.password.length<8){
            errors.password="Password must be 6 charaters or more"
        }else if (values.password ==='1234567890'){
            errors.password="Password must not be numbers"
        }

        if (!values.confirmpassword){
            errors.confirmpassword="Required"
        }else if (values.confirmpassword !==values.password){
            errors.confirmpassword="Passwords must be same"
        }
        return errors
    }
    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            number:'',
            password:'',
            confirmpassword:''
        },
        validate,
        onSubmit:values=>{
            alert("your entered details " 
            + JSON.stringify(values,null,2))
           alert( "welcome, " + values.name)
        }
    });
    return (
        <div>
            <h2>Register Here</h2>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="email"> Full Name : </label>
                <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} id="name" type="name" name="name"/>
                {formik.touched.name && formik.errors.name ? <div className="error">{formik.errors.name}</div>: null}
                <label htmlFor="email"> Email Address : </label>
                <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id="email" type="email" name="email"/>
                {formik.touched.email && formik.errors.email ?<div className="error">{formik.errors.email}</div>: null}
                <label htmlFor="number"> Number : </label>
                <input onChange={formik.handleChange} value={formik.values.number} onBlur={formik.handleBlur} id="number" type="number" name="number"/>
                {formik.touched.number && formik.errors.number ? <div className="error">{formik.errors.number}</div>:null}
                <label htmlFor="password"> Password : </label>
                <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} id="password" type="password" name="password"/>
                {formik.touched.password && formik.errors.password ?<div className="error">{formik.errors.password}</div>:null}
                <label htmlFor="confirmpassword"> Confirm Password : </label>
                <input onChange={formik.handleChange} value={formik.values.confirmpassword} onBlur={formik.handleBlur} id="confirmpassword" type="password" name="confirmpassword"/>
                {formik.touched.confirmpassword &&  formik.errors.confirmpassword ?<div className="error">{formik.errors.confirmpassword}</div>:null}
                <button type="submit" name="submit">Register</button>
            </form>
        </div>
    )
};