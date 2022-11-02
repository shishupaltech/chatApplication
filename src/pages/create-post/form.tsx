import {useForm} from 'react-hook-form';
import * as yup from 'yup';
// but type script don't know the intereface of the data 
// so for that we will use interface
import {yupResolver} from '@hookform/resolvers/yup';
import {addDoc,collection} from 'firebase/firestore';
import {auth, db} from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import {useNavigate} from 'react-router-dom'
interface CreateFormData {
    title:string;
    description:string;
}

export const CreateForm = ()=>
{
    const navigate = useNavigate();
    const [user] = useAuthState(auth)
    const schema = yup.object().shape({
        title:yup.string().required("You must add a title"),
        description:yup.string().required("You must add description"),


    })
    const{register, handleSubmit,formState:{errors}} = useForm<CreateFormData>({
        resolver:yupResolver(schema),
    })
    const postsRef = collection(db,"posts");
    const onCreatePost=async (data:CreateFormData)=>{
        await addDoc(postsRef,{
            // title:data.title,
            // description:data.description,
            ...data,
            username:user?.displayName,
            userId:user?.uid,

        })
        navigate("/");
    }
    return(
        <form className='form' onSubmit={handleSubmit(onCreatePost)}>
            <input placeholder='Title...' {...register("title")}/>
            <p style={{color:"red"}}> {errors.title?.message} </p>
            <textarea placeholder='Description...' {...register("description")}/>
            <p style={{color:"red"}}> {errors.description?.message} </p>
            <input type="submit"/>


        </form>
    );
}