import React from "react";
import { Formik, Form ,Field, FieldArray } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Formikform = () => {
    return (
        <div>
            <Formik
            initialValues={{name : "", city : "" , phone : "" , children : []}}
            validate = {values => {
                var phoneno = /^\d{10}$/;
                const errors = {};
                if(!values.phone.match(phoneno)) {
                    errors.phone = 'alphabet is not allowed';
                    return errors;
                }
                
            }}
            >
                {({values}) => (
                   <Form>
                   <lable>Name:</lable><br/>
                   <Field name = "name" type = "text"></Field><br/>
                   <lable>Contact Number:</lable><br/>
                   <Field  country={'in'} name = "phone"></Field><br/>
                   <lable>City Name:</lable><br/>
                   <Field name = "city" type = "text"></Field><br/><br/>
                   <FieldArray
                           name="children"
                           render={arrayHelpers => (
                           <div>
                            <><lable>Children Name:</lable><br/></>
                               {values.children && values.children.length > 0 ? (
                               values.children.map((friend, index) => (
                                   <div key={index}>
                                   <Field name={`children.${index}`} />
                                   <button
                                       type="button"
                                       onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                   >
                                       -
                                   </button>
                                   <button
                                       type="button"
                                       onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                   >
                                       +
                                   </button>
                                   </div>
                               ))
                               ) : (
                               <button type="submit" onClick={() => arrayHelpers.push('')}>
                                   {/* show this when user has removed all children from the list */}
                                   Add Children
                               </button>
                               )}
                           </div>
                           )}
                       />
                <br/><button name = "formicsubmit" type = "submit">Submit</button>
               </Form>  
                )
                }  
            </Formik>
        </div>
    );

};

export default Formikform; 


