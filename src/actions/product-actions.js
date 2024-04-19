"use server" // 1.şart
import { config } from "@/helpers/config";
import { convertFormDataToJSON, transformYupErrors } from "@/helpers/form-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from 'yup';

const FormSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    price: Yup.number().required("Required"),
    image: Yup.string().required("Required"),
    imageBaseURL: Yup.string().required("Required"),
});

//2.şart async yapılmalı
export const createProductAction = async(prewState, formData) => { 
    //formData nın json formatına dönüştürülmesi gerekir
    const fields=convertFormDataToJSON(formData);


    //formdaki bilgilerin validationdan geçirilmesi gerekir
    //oluştueduğumuz formschema nın senkron validate methoduna field ı gönderiyoruz
    //validasyon kısmının try catch içerisinde yapılması gerekiyor yoksa hata fırlatır
    //{abortEarly: false}=> hatayı tek tek yakalamak yerine tüm formu kontrol edip hatayı toplu olarak göstermiş olacak
    try {
    //validation    
    FormSchema.validateSync(fields, {abortEarly: false});
    fields.image=fields.imageBaseURL + fields.image;
    delete fields.imageBaseURL;//gerek kalmadı silelim

    //mutation (api ye bağlanılan kısım)
    const res=await fetch(`${config.apiURL}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fields),        
    })

    //product ın güncel bilgilerin gelmesi için revalidate işlemi yapılmalı
    revalidatePath("/products");
    revalidatePath("/dashboard/products");

    } catch (err) {
		if (err instanceof Yup.ValidationError) {
			return transformYupErrors(err.inner);
		}

		return {
			message: "Something went wrong",
			errors: null,
		};
    }
    
    
    //redirect try içinde olursa hata olur
    redirect("/dashboard/products");

 }

//formData=> formdan gellen bilgilerin geldiği veri tipi

