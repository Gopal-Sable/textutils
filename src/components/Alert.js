import React from 'react'

function Alert(props) {
    return (

        <div style={{ height: '50px' }}>
        {props.alert &&
            <div className={`alert alert-${props.alert.type} d-flex align-items-center alert-dismissible`} role="alert">
                <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"> </svg>
                <div>
                    <strong>{props.alert.type}</strong>  :       {props.alert.msg}
                </div>

            </div>}
        </div>
    )
}

export default Alert
