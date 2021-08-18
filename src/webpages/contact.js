import React from 'react';
const Contact = () => {
    function copyClip() {
        var copy = document.getElementById('email');
        copy.select();
        copy.setSelectionRange(0, 99999);

        document.execCommand("copy");

        alert("Copied " + copy.value);
    }
    return (
        <header className="App-header">
            <div className="form-group">
                <br/>
                <div>
                    <div className="form-group">
                        <label className="form-label">Email: </label>
                        <input className="form-control" value="iztan98@gmail.com" type="text" id="email" readOnly />
                    </div>
                    <div>
                        <button className="btn btn-primary" onClick={copyClip}>Copy ME</button>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Contact;