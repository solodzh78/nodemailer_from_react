import axios from 'axios';
import React, {useState} from 'react';
import 'materialize-css';
import { Form } from './components/Form';

function App() {
  const [sending, setSending] = useState('');
  const [form, setForm] = useState({ email: '', subject: '', message: '' });

  const sendHandler = async (e) => {
    e.preventDefault();
    setSending("Отправка......");
    try {
      const res = await axios.post('https://nodemailer-react-238.herokuapp.com/mail/send', {        
        email: form["email"],
        subject: form["subject"],
        text: form["message"]
      });
      const answerMessage = res.data.message;
      console.log(answerMessage);
      setSending(answerMessage);
    } catch (error) {
      console.log(error.message);
      setSending(error.message);
    }
  }

  return (
    <div className="App">
      <Form 
        form={form} 
        setForm={setForm} 
        sendHandler={sendHandler}
        sending={sending}
      />
    </div>
  );
}

export default App;
