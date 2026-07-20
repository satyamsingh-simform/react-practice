import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form"
import {minLength, z} from 'zod';

const formSchema=z.object({
    email:z.email().min(3,'3 min length').max(50,'max 50 length'),
    password:z.string().min(3,'3 min length').max(50,'max 50 length'),
    confirm:z.string().min(3,'3 min length').max(50,'max 50 length'),
})
.refine((data) => data.password === data.confirm, {
    message: "Passwords do not match",
    path: ["confirm"],
  });

export const ReactForm = () => {
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver:zodResolver(formSchema)
    });

    function formSubmit(data){
        console.log(data);
    }

  return (
    <div onSubmit={handleSubmit(formSubmit)}>
        <form >
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" className="border" placeholder="enter email" 
                {...register('email')}/>
                {errors.email && <>{errors.email.message}</>}
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" className="border" placeholder="enter password"
                {...register('password')}
                />
            </div>
            <div>
                <label htmlFor="confirm-pass">Confirm Password:</label>
                <input type="password" id="confirm-pass" className="border"
                {...register('confirm')}
                />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}
