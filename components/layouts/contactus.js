import { useState, useContext } from 'react';
import { contact } from '../actions/contactform';
import { useRouter } from 'next/router';
import { MainContext } from '../../contexts/MainContext';
import BaseLayout from './baseLayout';

const ContactUs = () => {
    const pageData = useContext(MainContext)
    const router = useRouter();
    const result = pageData[0].filter(pageItem => pageItem.slug === router.query.slug);
    const page = result[0];

    const [values, setValues] = useState({
        name: '',
        email: '',
        phone: '',
        textMessage: '',
        error: '',
        loading: false,
        message: '',
        showForm: true,
        showSuccessMessage: false
    });

    const { name, email, phone, textMessage, error, loading, message, showForm, showSuccessMessage } = values;

    const handleSubmit = e => {
        e.preventDefault();
        setValues({ ...values, loading: true, error: false });
        const message = { name, email, phone, textMessage };

        contact(message).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, loading: false });
            } else {
                setValues({
                    ...values,
                    name: '',
                    email: '',
                    phone: '',
                    textMessage: '',
                    error: '',
                    loading: false,
                    message: data.message,
                    showForm: false,
                    showSuccessMessage: true
                });
            }
        });
    };

    const handleChange = name => e => {
        setValues({ ...values, error: false, [name]: e.target.value });
    };

    const showLoading = () => (loading ? <div className="alert alert-info">Loading...</div> : '');
    const showError = () => (error ? <div className="alert alert-danger">{error}</div> : '');
    const showMessage = () => (message ? <div className="alert alert-info">{message}</div> : '');
    const showSuccess = () => (showSuccessMessage ? <div className="container alert alert-success"><center><p>Thank you! Your Message Has been Sent!</p></center></div>: '');

    const contactUsForm = () => {
    return (
    <section>
        <BaseLayout page={page}/>
        <div className="container-fluid background-color">
            <div className="container">
                <div className="form-box">
                    <form id="contact-form" onSubmit={handleSubmit}>
                        <div className="messages"></div>
                        <div className="controls">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input id="form_name" value={name} onChange={handleChange('name')} type="text" className="form-control customize" placeholder="Name" required="required" data-error="Firstname is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input id="form_email"  value={email} onChange={handleChange('email')} type="email" className="form-control customize" placeholder="Email address" required="required" data-error="Valid email is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="form-group">
                                        <input id="form_phone" value={phone} onChange={handleChange('phone')} type="tel" className="form-control customize" placeholder="Please enter your phone" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea id="form_message" value={textMessage} onChange={handleChange('textMessage')} className="form-control customize" placeholder="Your message" rows="6" required="required" data-error="Please,leave us a message."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <p><button className="btn btn-custom">SEND MESSAGE</button></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
 };

    return (
        <React.Fragment>
            {showError()}
            {showLoading()}
            {showMessage()}
            {showSuccess()}
            {showForm && contactUsForm()}
        </React.Fragment>
    );
};

export default ContactUs;
