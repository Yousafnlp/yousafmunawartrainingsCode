
import users from "../models/User.js"


export const controller =(request,response)=>{
        console.log("hello from home")
        response.send("hello from home......../")
    }

// saving data to mongoDB
export const saveForm = async (request, response) => {

        // let data = await new users(request.body);
        // let result = await data.save();
        // response.send(result);

        try{

            const {name, email, contact, dob, gender, course } =request.body

            if(!name || !email || !contact || !dob || !gender || !course){
                response.status(500).send({
                
                    success: false,
                    "message": "Please enter full information",
                    error: error.message
                })
              
            }
    
    


           let user = await users({name, email, contact, dob, gender, course }).save()

           response.status(201).send({

            success: true,
            "message": "User Registerd Successfuly",
            user
           })

    }
        catch(error){

            console.log(error)

            response.status(500).send({
                
                success: false,
                "message": "Error in Registration",
                error: error.message
            })

        }
    }


    

