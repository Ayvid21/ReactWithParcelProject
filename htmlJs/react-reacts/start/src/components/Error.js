import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className='errorComponent'>
            <h1 className='errorOops'>Oops !!!</h1>
            <h2 className='errorMessage'>Something went wrong!</h2>
            <h3 className='errorStatus'>{err?.status} {err?.statusText}</h3>
            <h4 className='errorInfo'>{err?.error?.message}</h4>
        </div>
    )
}

export default Error