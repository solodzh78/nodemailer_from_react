import React from "react";
import "materialize-css/dist/css/materialize.min.css"

export const Form = ( { form, setForm, sendHandler, sending } ) => {

    const changeHandler = e => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };

    return (
        <form 
            onSubmit={sendHandler}
            onChange={changeHandler}
            className="row send-mail"
            disabled
        >
            <div className="col s12">
                <h1 className="center-align">Отправка Email</h1>
                <div className="card blue  darken-2">
                    <div className="card-content white-text">
                        <span className="card-title">Введите данные</span>

                        <div className="input-field ">
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={form["email"]}
                                onChange={changeHandler}
                                className="yellow-input validate"
                            />
                            <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field">
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                value={form["subject"]}
                                onChange={changeHandler}
                                className="yellow-input validate"
                            />
                            <label htmlFor="subject">Тема</label>
                        </div>

                        <div className="input-field">
                            <textarea 
                                id="message" 
                                name="message"
                                value={form["message"]}
                                onChange={changeHandler}
                                className="materialize-textarea"
                            />                        
                            <label htmlFor="message">Сообщение</label>
                        </div>

                        {!!sending && (
                        <div className="input-field">
                            <textarea 
                                id="info" 
                                name="info"
                                value={sending}
                                disabled 
                                className="materialize-textarea white-text"
                            />
                        </div>)}

                    </div>
                    <div className="card-action">
                        <button 
                            className="waves-effect btn yellow darken-4"
                            type="submit"
                            disabled={sending === "Отправка......"}
                        >
                            Отправить
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}