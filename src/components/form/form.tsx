import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import styles from './form.module.scss'

export function Form() {
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [isSendingForm, setIsSendingForm] = useState(false);

    function HandleSetEmail(event: React.FormEvent<HTMLInputElement>) {
        setEmail(event.currentTarget.value);
    }
    function HandleSetWhatsapp(event: React.FormEvent<HTMLInputElement>) {
        setWhatsapp(event.currentTarget.value)
    }

    async function sendEmail(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSendingForm(true);

        var axios = require('axios');
        
        var data = JSON.stringify({
        "list_ids": [
            process.env.NEXT_PUBLIC_LIST_ID
        ],
        "contacts": [
            {
            "email": email,
            "whatsapp": whatsapp
            }
        ]
        });

        var config = {
        method: 'put',
        url: process.env.NEXT_PUBLIC_API_URL,
        headers: { 
            'Authorization': process.env.NEXT_PUBLIC_API_KEY, 
            'Content-Type': 'application/json'
        },
        data : data
        };

        await axios(config)

        .then(function (response: { data: any; }) {
            toast.success("Seu formulário foi enviado!");
            setEmail('');
            setWhatsapp('');
        })

        .catch(function (error: any) {
            toast.error("Erro ao enviar o formulário, tente novamente mais tarde");
        });


        setIsSendingForm(false);
    }


    return (
        <form onSubmit={sendEmail} action="" className={styles.form}>
            <input 
                value={email}
                onChange={HandleSetEmail}
                type="email" 
                placeholder="Seu melhor e-mail*" 
                required
            />
            <input 
                value={whatsapp}
                onChange={HandleSetWhatsapp}
                type="tel" 
                placeholder="Seu Whatsapp*" 
                required
            />

            {isSendingForm ? 
                <button disabled type="submit">Enviando</button> 
                :
                <button type="submit">Enviar</button>
            }   
        </form>
    )
}